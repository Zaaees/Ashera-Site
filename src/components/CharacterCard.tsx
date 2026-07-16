import { Sparkles, User, MapPin } from "lucide-react";

export interface Character {
  id: string;
  name: string;
  title?: string;
  origin?: string;
  affiliation?: string;
  grade?: string;
  door?: string;
  avatarUrl?: string;
  description: string;
  quote?: string;
  status?: string;
}

interface CharacterCardProps {
  character: Character;
  onSelect: (char: Character) => void;
}

export default function CharacterCard({ character, onSelect }: CharacterCardProps) {
  return (
    <div
      onClick={() => onSelect(character)}
      className="group relative bg-slate-950/60 border border-slate-900 hover:border-amber-500/30 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer overflow-hidden backdrop-blur-sm"
    >
      {/* Glow highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Background card structure */}
      <div className="flex gap-4 items-start relative z-10">
        {/* Avatar Portrait */}
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex-shrink-0 group-hover:border-amber-500/40 transition-colors duration-500">
          {character.avatarUrl ? (
            <img
              src={character.avatarUrl}
              alt={character.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Remove broken image source to show fallback icon
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-700 group-hover:text-amber-500/50 transition-colors">
              <User size={24} />
            </div>
          )}
        </div>

        {/* Text information */}
        <div className="flex-1 min-w-0 text-left">
          <div className="flex justify-between items-start gap-1">
            <h4 className="font-serif text-sm font-bold text-amber-500 tracking-wide truncate group-hover:text-amber-400 transition-colors duration-300">
              {character.name}
            </h4>
            {character.grade && (
              <span className="text-[8px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded uppercase tracking-wider">
                {character.grade}
              </span>
            )}
          </div>
          
          {character.title && (
            <p className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
              {character.title}
            </p>
          )}

          {character.origin && (
            <p className="text-[9px] text-slate-500 font-mono flex items-center gap-1 mt-1">
              <MapPin size={8} className="text-slate-600" />
              <span>{character.origin}</span>
            </p>
          )}
        </div>
      </div>

      {/* Quote excerpt preview */}
      {character.quote && (
        <div className="mt-4 pt-3 border-t border-slate-900/60 relative z-10">
          <p className="text-[10px] text-slate-400 italic line-clamp-2 leading-relaxed">
            "{character.quote}"
          </p>
        </div>
      )}

      {/* Golden Star Sparkle Decorator on Hover */}
      <div className="absolute top-3 right-3 text-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Sparkles size={12} className="animate-pulse" />
      </div>
    </div>
  );
}
