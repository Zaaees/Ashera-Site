import { BookOpen, MapPin, Compass, Shield, Sparkles } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "accueil", title: "Accueil", icon: BookOpen, subtitle: "Conte d'Ashera" },
    { id: "carnet_adresse", title: "Carnet d'Adresse", icon: MapPin, subtitle: "Figures d'Esperia" },
    { id: "bestiaire", title: "Bestiaire", icon: Shield, subtitle: "Créatures d'Ashera" },
    { id: "mythes_legendes", title: "Mythes & Légendes", icon: Sparkles, subtitle: "Récits Divins" },
    { id: "trace_historique", title: "Trace Historique", icon: Compass, subtitle: "Chronologie des Arcs" },
  ];

  return (
    <aside className="w-80 h-screen fixed top-0 left-0 bg-slate-950/90 border-r border-amber-500/10 flex flex-col p-6 z-50 backdrop-blur-xl">
      {/* Brand Logo Header */}
      <div className="flex flex-col items-center justify-center py-8 border-b border-slate-900 mb-8">
        <h1 className="font-serif text-2xl font-black text-amber-500 tracking-widest uppercase flex items-center gap-2">
          Ashera
        </h1>
        <p className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-2">
          Le Grimoire Sacré
        </p>
      </div>

      {/* Menu Navigation Links */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 group cursor-pointer text-left ${
                isActive
                  ? "bg-amber-500/10 border-amber-500/35 text-amber-300 shadow-md shadow-amber-500/5"
                  : "bg-slate-950/20 border-transparent text-slate-400 hover:bg-slate-900/40 hover:text-amber-100 hover:border-slate-800"
              }`}
            >
              <div
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-amber-500/20 text-amber-400"
                    : "bg-slate-900 text-slate-500 group-hover:bg-slate-800 group-hover:text-amber-400"
                }`}
              >
                <Icon size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-sans font-bold tracking-wide">
                  {item.title}
                </span>
                <span className="text-[10px] text-slate-500 font-mono tracking-wider">
                  {item.subtitle}
                </span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer Info */}
      <div className="border-t border-slate-900 pt-6 text-center">
        <p className="text-[10px] font-mono text-slate-600">
          Grimoire Ashera v4.0.0
        </p>
      </div>
    </aside>
  );
}
