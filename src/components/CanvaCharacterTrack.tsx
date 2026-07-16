import { useRef } from "react";
import type { Character } from "../data/loreData";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { motion } from "motion/react";

interface CanvaCharacterTrackProps {
  characters: Character[];
  subCategoryId: string;
}

const THEME_COLORS: Record<string, { border: string; borderFocus: string; text: string; bg: string; glow: string }> = {
  famille_royale: { border: "border-rose-500/20", borderFocus: "group-hover:border-rose-500/40", text: "text-rose-400", bg: "from-rose-950/20", glow: "shadow-rose-500/5" },
  grandes_familles: { border: "border-amber-500/20", borderFocus: "group-hover:border-amber-500/40", text: "text-amber-400", bg: "from-amber-950/20", glow: "shadow-amber-500/5" },
  maison_cravgant: { border: "border-red-500/20", borderFocus: "group-hover:border-red-500/40", text: "text-red-400", bg: "from-red-950/20", glow: "shadow-red-500/5" },
  maison_eclipsium: { border: "border-indigo-500/20", borderFocus: "group-hover:border-indigo-500/40", text: "text-indigo-400", bg: "from-indigo-950/20", glow: "shadow-indigo-500/5" },
  maison_valdor: { border: "border-teal-500/20", borderFocus: "group-hover:border-teal-500/40", text: "text-teal-400", bg: "from-teal-950/20", glow: "shadow-teal-500/5" },
  temoins: { border: "border-purple-500/20", borderFocus: "group-hover:border-purple-500/40", text: "text-purple-400", bg: "from-purple-950/20", glow: "shadow-purple-500/5" },
  cercle_azur: { border: "border-cyan-500/20", borderFocus: "group-hover:border-cyan-500/40", text: "text-cyan-400", bg: "from-cyan-950/20", glow: "shadow-cyan-500/5" },
  voile_ivoire: { border: "border-slate-300/20", borderFocus: "group-hover:border-slate-300/40", text: "text-slate-200", bg: "from-slate-900/20", glow: "shadow-slate-300/5" },
  garde_pourpre: { border: "border-red-700/20", borderFocus: "group-hover:border-red-700/40", text: "text-red-500", bg: "from-red-950/25", glow: "shadow-red-700/5" },
  sans_guildes: { border: "border-slate-500/20", borderFocus: "group-hover:border-slate-500/40", text: "text-slate-400", bg: "from-slate-900/20", glow: "shadow-slate-500/5" },
};

const ROMAN_NUMERALS = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ"];

export default function CanvaCharacterTrack({ characters, subCategoryId }: CanvaCharacterTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const theme = THEME_COLORS[subCategoryId] || THEME_COLORS.famille_royale;

  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const { scrollLeft, clientWidth } = trackRef.current;
      const offset = direction === "left" ? -clientWidth * 0.85 : clientWidth * 0.85;
      trackRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  if (!characters || characters.length === 0) return null;

  return (
    <div id="canva-character-track-root" className="relative group/track space-y-4">
      {/* Scroll controls */}
      {characters.length > 1 && (
        <div className="absolute top-[-40px] right-2 flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 hover:border-amber-500/30 transition-all cursor-pointer shadow-lg"
            title="Précédent"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 hover:border-amber-500/30 transition-all cursor-pointer shadow-lg"
            title="Suivant"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Track viewport */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth custom-scrollbar-horizontal scrollbar-none"
        style={{ scrollbarWidth: "none" }} // Hide scrollbar for clean layout
      >
        {characters.map((char, idx) => (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className={`snap-start flex-shrink-0 w-full max-w-[100%] md:w-[760px] min-h-[460px] rounded-3xl bg-gradient-to-b from-slate-900/60 via-slate-950/90 to-slate-950 border ${theme.border} ${theme.glow} shadow-2xl relative overflow-hidden group hover:border-slate-800/80 transition-all duration-500 flex flex-col justify-between p-6 md:p-8`}
          >
            {/* Background Glow */}
            <div className={`absolute top-[-100px] right-[-100px] w-52 h-52 rounded-full blur-[100px] opacity-10 bg-gradient-to-br ${theme.bg} transition-opacity duration-700 group-hover:opacity-20`} />

            {/* Header: Name, Title & Decorative Badge */}
            <div className="flex justify-between items-start border-b border-slate-900/80 pb-4">
              <div>
                <h4 className="font-serif text-3xl md:text-4xl font-black text-yellow-400 tracking-wide uppercase leading-tight drop-shadow-md">
                  {char.name}
                </h4>
                {char.title && (
                  <span className={`text-xs font-mono uppercase font-bold tracking-widest mt-1 block ${theme.text}`}>
                    {char.title}
                  </span>
                )}
              </div>

              {/* Roman numeral slide badge */}
              <div className="h-8 w-8 rounded-lg bg-slate-950/80 border border-slate-900 flex items-center justify-center font-serif text-[10px] text-slate-500 font-bold select-none">
                {ROMAN_NUMERALS[idx] || idx + 1}
              </div>
            </div>

            {/* Body Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start my-4 flex-1">
              {/* Portrait & Stats (5 cols) */}
              <div className="md:col-span-5 flex flex-col items-center gap-4">
                {char.avatarUrl && (
                  <div className="relative aspect-[4/5] w-full max-w-[180px] rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950 shadow-lg group-hover:border-amber-500/20 transition-colors duration-500">
                    <img
                      src={char.avatarUrl}
                      alt={char.name}
                      className="w-full h-full object-cover filter brightness-90 contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=300";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                  </div>
                )}

                {/* Specs List */}
                <div className="w-full space-y-1.5 font-sans text-[10px] text-slate-400 bg-slate-950/80 border border-slate-900/60 p-3 rounded-xl shadow-inner">
                  {char.origin && (
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span className="font-mono uppercase text-slate-600 font-semibold tracking-wider text-[8px]">Origine</span>
                      <span className="font-medium text-slate-300">{char.origin}</span>
                    </div>
                  )}
                  {char.affiliation && (
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span className="font-mono uppercase text-slate-600 font-semibold tracking-wider text-[8px]">Affiliation</span>
                      <span className="font-medium text-slate-300 truncate max-w-[130px]" title={char.affiliation}>{char.affiliation}</span>
                    </div>
                  )}
                  {char.grade && (
                    <div className="flex justify-between border-b border-slate-900 pb-1">
                      <span className="font-mono uppercase text-slate-600 font-semibold tracking-wider text-[8px]">Grade</span>
                      <span className="font-medium text-slate-300">{char.grade}</span>
                    </div>
                  )}
                  {char.door && (
                    <div className="flex justify-between">
                      <span className="font-mono uppercase text-slate-600 font-semibold tracking-wider text-[8px]">Porte</span>
                      <span className="font-medium text-slate-300">{char.door}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quote & Story (7 cols) */}
              <div className="md:col-span-7 h-full flex flex-col justify-between gap-4">
                {/* Quote block */}
                {char.quote && (
                  <div className={`relative border-l-2 ${theme.border.split(' ')[0]} pl-4 py-1.5 text-xs text-amber-200/90 font-serif leading-relaxed italic bg-slate-900/10 rounded-r-lg`}>
                    <Bookmark size={10} className={`absolute top-1 right-2 opacity-20 ${theme.text}`} />
                    “ {char.quote} ”
                  </div>
                )}

                {/* Description story text */}
                <div className="text-slate-300 font-sans text-xs md:text-sm leading-relaxed space-y-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar flex-1">
                  {char.description.split("\n\n").map((p, pIdx) => (
                    <p key={pIdx} className="whitespace-pre-wrap">{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer decors */}
            <div className="border-t border-slate-900 pt-3 flex justify-between items-center text-[8px] font-mono uppercase tracking-widest text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${char.status === "Décédé" ? "bg-red-500" : "bg-emerald-500"} animate-pulse`} />
                Statut : {char.status || "En vie"}
              </span>
              <span>Archives d'Esperia</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
