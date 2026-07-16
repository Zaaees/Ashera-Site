import { useState, useEffect, useRef } from "react";
import canvaPagesData from "../data/canvaPagesData.json";
import { ZoomIn, ZoomOut } from "lucide-react";

interface CanvaPageRendererProps {
  pageIndex: number;
}

export default function CanvaPageRenderer({ pageIndex }: CanvaPageRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [autoFit, setAutoFit] = useState<boolean>(true);

  const page = canvaPagesData.find((p) => p.index === pageIndex);

  // Compute actual canvas dimensions based on elements
  const computedWidth = page
    ? Math.max(...page.elements.map((el) => el.x + el.w), page.width)
    : 1920;
  // Ignore elements below y=1300 if they are just decorations, or fit them all
  const computedHeight = page
    ? Math.max(...page.elements.map((el) => el.y + el.h), page.height)
    : 1080;

  useEffect(() => {
    if (autoFit && containerRef.current) {
      const containerHeight = containerRef.current.clientHeight || 700;
      // Leave some padding
      const fitZoom = (containerHeight - 40) / computedHeight;
      setZoom(Math.max(Math.min(fitZoom, 1), 0.25));
    }
  }, [pageIndex, autoFit, computedHeight]);

  if (!page) {
    return (
      <div className="text-center py-20 text-slate-400">
        Page Canva non trouvée (Index {pageIndex})
      </div>
    );
  }

  // Group elements representation
  const renderElement = (el: any, keyIdx: number, scaleX = 1, scaleY = 1) => {
    const isImage = el.type === "image";
    const isText = el.type === "text";
    const isGroup = el.type === "group";
    const isVector = el.type === "vector";
    const isShape = el.type === "shape";

    const commonStyle: React.CSSProperties = {
      position: "absolute",
      left: `${el.x * scaleX}px`,
      top: `${el.y * scaleY}px`,
      width: `${el.w * scaleX}px`,
      height: `${el.h * scaleY}px`,
    };

    if (isImage && el.imgUrl) {
      return (
        <img
          key={keyIdx}
          src={el.imgUrl}
          alt={`Canva Image ${keyIdx}`}
          className="rounded-sm shadow-md pointer-events-none select-none"
          style={{
            ...commonStyle,
            objectFit: "cover",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      );
    }

    if (isText && el.text) {
      let fontStack = el.fontFamily || "sans-serif";
      if (
        el.fontFamily === "League Spartan" ||
        el.fontFamily === "Archivo Black" ||
        el.fontFamily === "Anton" ||
        el.fontFamily === "Agrandir"
      ) {
        fontStack = `"${el.fontFamily}", sans-serif`;
      } else if (el.fontFamily === "Cardo" || el.fontFamily === "Benedict") {
        fontStack = `"${el.fontFamily}", serif`;
      }

      return (
        <div
          key={keyIdx}
          style={{
            ...commonStyle,
            height: "auto",
            minHeight: `${el.h * scaleY}px`,
            color: el.color || "#ffffff",
            fontFamily: fontStack,
            fontSize: `${(el.fontSize || 14) * 0.95}px`,
            fontWeight: el.fontWeight || "normal",
            fontStyle: el.fontStyle || "normal",
            textAlign: el.textAlign || "left",
            lineHeight: "1.35",
            whiteSpace: "pre-wrap",
            overflow: "visible",
          }}
          className="select-text antialiased leading-relaxed tracking-wide drop-shadow-md"
        >
          {el.text}
        </div>
      );
    }

    if (isVector) {
      const viewBoxW = el.viewBox?.w || 64;
      const viewBoxH = el.viewBox?.h || 64;
      const borderStyle: React.CSSProperties = el.border
        ? {
            border: `${el.border.width}px solid ${el.border.color || "transparent"}`,
          }
        : {};

      return (
        <svg
          key={keyIdx}
          style={{
            ...commonStyle,
            ...borderStyle,
          }}
          viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
          preserveAspectRatio="none"
          className="pointer-events-none select-none overflow-visible"
        >
          {el.paths &&
            el.paths.map((p: any, pIdx: number) => (
              <path
                key={pIdx}
                d={p.d}
                fill={p.fill || "transparent"}
                fillOpacity={p.opacity !== undefined ? p.opacity / 100 : 1}
              />
            ))}
        </svg>
      );
    }

    if (isShape) {
      return (
        <div
          key={keyIdx}
          style={{
            ...commonStyle,
            backgroundColor: el.fill || "#ffffff",
          }}
          className="pointer-events-none select-none rounded-sm"
        />
      );
    }

    if (isGroup && el.children) {
      return (
        <div key={keyIdx} style={commonStyle}>
          {el.children.map((sub: any, subIdx: number) =>
            renderElement(sub, subIdx)
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div
      id={`canva-page-${pageIndex}-renderer`}
      className="flex flex-col h-full rounded-3xl relative"
    >
      {/* Main scrolling viewport */}
      <div
        ref={containerRef}
        className="flex-1 w-full min-h-[650px] overflow-auto border border-slate-900/60 bg-slate-950/20 rounded-3xl p-1 relative shadow-inner custom-scrollbar flex items-start justify-center"
      >
        <div
          style={{
            width: `${computedWidth * zoom}px`,
            height: `${computedHeight * zoom}px`,
            position: "relative",
            transition: "width 0.2s, height 0.2s",
          }}
          className="mx-auto overflow-hidden rounded-2xl shadow-2xl border border-slate-900/40 bg-slate-950"
        >
          <div
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "top left",
              width: `${computedWidth}px`,
              height: `${computedHeight}px`,
              position: "absolute",
              left: 0,
              top: 0,
            }}
          >
            {page.elements.map((el, idx) => renderElement(el, idx))}
          </div>
        </div>

        {/* Minimalist Floating Glassmorphic Zoom Panel (bottom-right) */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-slate-950/70 border border-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg z-20 text-[10px] text-slate-400 font-mono">
          <span>{page.title}</span>
          <span className="text-slate-800">|</span>
          <label className="flex items-center gap-1 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={autoFit}
              onChange={(e) => setAutoFit(e.target.checked)}
              className="rounded bg-slate-900 border-slate-800 text-amber-500 focus:ring-0 cursor-pointer w-3 h-3"
            />
            <span>Ajuster</span>
          </label>
          <span className="text-slate-800">|</span>
          <button
            onClick={() => {
              setAutoFit(false);
              setZoom((prev) => Math.max(prev - 0.1, 0.2));
            }}
            className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
            title="Zoom arrière"
          >
            <ZoomOut size={12} />
          </button>
          <span className="w-8 text-center text-slate-300">
            {(zoom * 100).toFixed(0)}%
          </span>
          <button
            onClick={() => {
              setAutoFit(false);
              setZoom((prev) => Math.min(prev + 0.1, 1.5));
            }}
            className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
            title="Zoom avant"
          >
            <ZoomIn size={12} />
          </button>
          <button
            onClick={() => {
              setAutoFit(false);
              setZoom(1);
            }}
            className="hover:text-amber-400 transition-colors cursor-pointer px-1 text-[9px]"
            title="100%"
          >
            100%
          </button>
        </div>
      </div>
    </div>
  );
}
