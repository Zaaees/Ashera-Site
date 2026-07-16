import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Mythical ambiance music URL
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder audio track

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.log("Audio play error: ", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 bg-slate-950/80 border border-amber-500/20 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-4 z-50 transition-all duration-300 hover:border-amber-500/40">
      <audio ref={audioRef} src={audioUrl} loop />

      {/* Visual wave equalizer bars */}
      <div className="flex items-center gap-0.5 h-4 w-4">
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`w-0.5 bg-amber-500 rounded-full transition-all duration-300 origin-bottom ${
              isPlaying ? "animate-bounce" : "h-1"
            }`}
            style={{
              animationDelay: `${bar * 0.15}s`,
              animationDuration: "0.8s",
              height: isPlaying ? "100%" : "20%",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col text-[10px] text-left pr-2 border-r border-slate-900">
        <span className="font-serif font-bold text-slate-300 tracking-wider">
          Ambiance d'Ashera
        </span>
        <span className="text-[8px] font-mono text-slate-500 tracking-widest uppercase">
          {isPlaying ? "En Lecture" : "En Pause"}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="p-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-xl transition-all duration-300 cursor-pointer border border-amber-500/20"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        {/* Volume Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            {isMuted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (isMuted) setIsMuted(false);
            }}
            className="w-16 h-1 rounded-lg bg-slate-900 accent-amber-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
