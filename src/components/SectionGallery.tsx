import React, { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight, Play, Film, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SectionGalleryProps {
  images: string[];
  title?: string;
}

export default function SectionGallery({ images, title = "Archives Visuelles & Illustrations" }: SectionGalleryProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  // Filter out system design decorations like svg files if they are trivial (e.g., df4522b14b9e818e53950413a5e72fb5.svg is a divider)
  const filteredImages = images.filter(
    img => !img.endsWith(".svg") || img === "911092d83da6dbcfec0413e213a021d6.svg"
  );

  if (filteredImages.length === 0) return null;

  const getMediaUrl = (filename: string) => `/_assets/media/${filename}`;

  const isVideo = (filename: string) => filename.endsWith(".mp4");

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % filteredImages.length);
    }
  };

  return (
    <div id="section-gallery-root" className="space-y-6 mt-12 pt-8 border-t border-slate-900">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg flex items-center justify-center">
          <ImageIcon size={14} />
        </div>
        <h3 className="font-serif text-lg font-bold text-amber-100 tracking-wide uppercase">
          {title}
        </h3>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredImages.map((filename, idx) => {
          const url = getMediaUrl(filename);
          const isVid = isVideo(filename);

          return (
            <motion.div
              key={filename}
              onClick={() => setActiveIdx(idx)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/40 cursor-pointer shadow-lg hover:shadow-amber-500/5 group"
            >
              {isVid ? (
                <div className="w-full h-full relative flex items-center justify-center bg-slate-950">
                  <video
                    src={url}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
                    <div className="p-2.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full backdrop-blur-sm group-hover:scale-110 transition-all">
                      <Play size={14} fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-slate-950/80 text-[8px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1 border border-slate-800">
                    <Film size={8} /> Video
                  </span>
                </div>
              ) : (
                <img
                  src={url}
                  alt={`Illustration ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=200";
                  }}
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Maximize2 className="text-amber-300 transform scale-75 group-hover:scale-100 transition-transform" size={18} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIdx(null)}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-md"
            />

            {/* Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col justify-center items-center z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveIdx(null)}
                className="absolute top-[-50px] right-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 p-2.5 rounded-full cursor-pointer hover:border-amber-500/30 transition-all shadow-lg"
                title="Fermer la vue"
              >
                <X size={20} />
              </button>

              {/* Navigation controls */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-[-20px] sm:left-[-60px] bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-amber-300 p-3 rounded-full cursor-pointer hover:border-amber-500/30 hover:bg-slate-900 transition-all shadow-lg z-20"
                    title="Précédente"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-[-20px] sm:right-[-60px] bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-amber-300 p-3 rounded-full cursor-pointer hover:border-amber-500/30 hover:bg-slate-900 transition-all shadow-lg z-20"
                    title="Suivante"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Media viewer */}
              <div className="w-full h-full flex flex-col items-center bg-slate-950/60 border border-amber-500/10 rounded-2xl p-2 sm:p-4 overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="relative flex items-center justify-center max-h-[75vh] w-full overflow-hidden">
                  {isVideo(filteredImages[activeIdx]) ? (
                    <video
                      src={getMediaUrl(filteredImages[activeIdx])}
                      className="max-h-[70vh] rounded-lg max-w-full object-contain"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={getMediaUrl(filteredImages[activeIdx])}
                      alt={`Illustration zoom ${activeIdx + 1}`}
                      className="max-h-[70vh] rounded-lg max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600";
                      }}
                    />
                  )}
                </div>

                {/* Subtitle / Counter */}
                <div className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-slate-500 flex items-center gap-3">
                  <span>Illustration {activeIdx + 1} / {filteredImages.length}</span>
                  <span>•</span>
                  <span>{filteredImages[activeIdx]}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
