import { useState, useMemo } from "react";
import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";
import SectionGallery from "./components/SectionGallery";
import CanvaPageRenderer from "./components/CanvaPageRenderer";
import CharacterCard from "./components/CharacterCard";
import type { Character } from "./components/CharacterCard";
import MythsList from "./components/MythsList";
import Timeline from "./components/Timeline";
import { LORE_DATA } from "./data/loreData";
import { PAGE_IMAGES } from "./data/pageImages";
import { Search, X, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SUBSECTION_CANVA_PAGE_INDICES: Record<string, number> = {
  famille_royale: 2,
  grandes_familles: 3,
  maison_cravgant: 4,
  maison_eclipsium: 5,
  maison_valdor: 6,
  temoins: 7,
  cercle_azur: 8,
  voile_ivoire: 9,
  garde_pourpre: 10,
  sans_guildes: 11
};

export default function App() {
  const [activeTab, setActiveTab] = useState("accueil");
  const [selectedSubCategory, setSelectedSubCategory] = useState("famille_royale");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  // Get carnet_adresse subsections
  const carnetSection = useMemo(() => {
    return LORE_DATA.find((section) => section.id === "carnet_adresse");
  }, []);

  const subSections = useMemo(() => {
    return carnetSection?.subsections || [];
  }, [carnetSection]);

  // Filter characters based on search query
  const filteredCharacters = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    // Search across ALL subsections in carnet_adresse for maximum convenience
    const allChars: Character[] = [];
    subSections.forEach((sub) => {
      if (sub.characters) {
        sub.characters.forEach((c) => {
          // Prevent duplicates
          if (!allChars.some((existing) => existing.id === c.id)) {
            allChars.push(c);
          }
        });
      }
    });

    const query = searchQuery.toLowerCase();
    return allChars.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        (c.title && c.title.toLowerCase().includes(query)) ||
        (c.affiliation && c.affiliation.toLowerCase().includes(query))
    );
  }, [subSections, searchQuery]);

  return (
    <div className="flex min-h-screen bg-[#020205] text-slate-100 font-sans">
      {/* Navigation Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen pl-80 p-8 pb-32">
        <AnimatePresence mode="wait">
          {activeTab === "accueil" && (
            <motion.div
              key="accueil"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 max-w-6xl mx-auto"
            >
              {/* Canva Page 0 (Accueil) */}
              <CanvaPageRenderer pageIndex={0} />
              
              {/* Gallery Grid */}
              <div className="border-t border-slate-900 pt-8 mt-12">
                <h3 className="font-serif text-lg font-bold text-amber-500 tracking-wider mb-6 flex items-center gap-2">
                  <Sparkles size={16} />
                  Illustrations d'Accueil
                </h3>
                <SectionGallery images={PAGE_IMAGES["accueil"] || []} />
              </div>
            </motion.div>
          )}

          {activeTab === "carnet_adresse" && (
            <motion.div
              key="carnet_adresse"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 max-w-6xl mx-auto"
            >
              {/* Sub-Navigation & Search bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-950/40 border border-slate-900/60 p-4 rounded-2xl backdrop-blur-sm">
                {/* Horizontal tabs */}
                <div className="flex flex-wrap gap-2">
                  {subSections.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setSelectedSubCategory(sub.id);
                        setSearchQuery("");
                      }}
                      className={`px-3 py-1.5 rounded-xl border text-[11px] font-sans font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                        selectedSubCategory === sub.id
                          ? "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-md shadow-amber-500/5"
                          : "bg-slate-950/40 border-slate-900 text-slate-400 hover:text-amber-100 hover:border-slate-800"
                      }`}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher un résident..."
                    className="w-full bg-slate-950 border border-slate-900 focus:border-amber-500/40 text-xs text-slate-300 pl-8 pr-8 py-2 rounded-xl focus:outline-none transition-colors"
                  />
                  <Search className="absolute left-2.5 top-2.5 text-slate-600" size={12} />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-2.5 text-slate-500 hover:text-slate-300 cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Conditional rendering: Search Results OR Canva Page Renderer */}
              <div className="space-y-8">
                {searchQuery.trim().length > 0 ? (
                  <div className="space-y-6">
                    <h3 className="font-serif text-sm font-bold text-slate-400 tracking-wider">
                      Résultats de recherche ({filteredCharacters.length})
                    </h3>
                    {filteredCharacters.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredCharacters.map((char) => (
                          <CharacterCard
                            key={char.id}
                            character={char}
                            onSelect={setSelectedCharacter}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-16 bg-slate-900/10 rounded-2xl border border-slate-900/50">
                        <AlertCircle className="text-slate-600 mx-auto mb-3" size={24} />
                        <p className="text-xs text-slate-400">
                          Aucun résident ne correspond à votre recherche.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-12">
                    {/* Pixel-perfect Canva Page Renderer */}
                    <CanvaPageRenderer pageIndex={SUBSECTION_CANVA_PAGE_INDICES[selectedSubCategory] ?? 2} />

                    {/* Section Gallery */}
                    <div className="border-t border-slate-900 pt-8">
                      <h3 className="font-serif text-lg font-bold text-amber-500 tracking-wider mb-6 flex items-center gap-2">
                        <Sparkles size={16} />
                        Galerie des Factions
                      </h3>
                      <SectionGallery images={PAGE_IMAGES[selectedSubCategory] || []} />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "bestiaire" && (
            <motion.div
              key="bestiaire"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 max-w-6xl mx-auto"
            >
              {/* Canva Page 12 (Bestiaire) */}
              <CanvaPageRenderer pageIndex={12} />
              
              {/* Bestiary Gallery */}
              <div className="border-t border-slate-900 pt-8 mt-12">
                <h3 className="font-serif text-lg font-bold text-amber-500 tracking-wider mb-6 flex items-center gap-2">
                  <Sparkles size={16} />
                  Créatures d'Ashera
                </h3>
                <SectionGallery images={PAGE_IMAGES["bestiaire"] || []} />
              </div>
            </motion.div>
          )}

          {activeTab === "mythes_legendes" && (
            <motion.div
              key="mythes_legendes"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <MythsList />
            </motion.div>
          )}

          {activeTab === "trace_historique" && (
            <motion.div
              key="trace_historique"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <Timeline />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Character Detail Modal */}
        <AnimatePresence>
          {selectedCharacter && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900/90 border border-amber-500/20 max-w-2xl w-full rounded-3xl p-6 md:p-8 relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedCharacter(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-950/60 hover:bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 rounded-xl cursor-pointer"
                >
                  <X size={16} />
                </button>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-amber-500/35 bg-slate-950 flex-shrink-0">
                    <img
                      src={selectedCharacter.avatarUrl}
                      alt={selectedCharacter.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="flex-1 text-left space-y-4">
                    <div>
                      <span className="text-[9px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {selectedCharacter.grade || "Porte non définie"}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-amber-500 tracking-wide mt-2">
                        {selectedCharacter.name}
                      </h2>
                      {selectedCharacter.title && (
                        <p className="text-xs text-slate-300 font-medium">
                          {selectedCharacter.title}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[10px] font-mono border-y border-slate-950 py-3">
                      <div>
                        <span className="text-slate-500 block uppercase">Origine</span>
                        <span className="text-slate-300">{selectedCharacter.origin || "Inconnue"}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block uppercase">Affiliation</span>
                        <span className="text-slate-300">{selectedCharacter.affiliation || "Indépendant"}</span>
                      </div>
                    </div>

                    {selectedCharacter.quote && (
                      <div className="bg-slate-950/40 border-l-2 border-amber-500/50 p-3 rounded-r-xl">
                        <p className="text-xs text-slate-300 italic leading-relaxed">
                          "{selectedCharacter.quote}"
                        </p>
                      </div>
                    )}

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Histoire & Rôle</span>
                      <p className="text-xs text-slate-400 leading-relaxed text-justify">
                        {selectedCharacter.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Global Immersive Audio Player */}
        <AudioPlayer />
      </main>
    </div>
  );
}
