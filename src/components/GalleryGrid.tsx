import { useState } from "react";
import { Sparkles, Maximize2, X, Trash2, Plus } from "lucide-react";
import type { LoreSection } from "../data/loreData";

interface GalleryGridProps {
  loreData: LoreSection[];
  isAdmin: boolean;
  onAddImage: (img: { id: string; name: string; description: string; avatarUrl: string }) => void;
  onDeleteImage: (imgId: string) => void;
}

export default function GalleryGrid({ loreData, isAdmin, onAddImage, onDeleteImage }: GalleryGridProps) {
  const [activeImage, setActiveImage] = useState<{ url: string; title: string; desc: string } | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form state
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const gallerySection = loreData.find((section) => section.id === "galerie_ashera");
  const categories = gallerySection?.subsections || [];

  // Compile all images across subsections (e.g. tarot_cards, illustrations, gakollection)
  const allImages = categories.flatMap((cat) => {
    const chars = cat.characters || [];
    return chars.map((char) => ({
      categoryId: cat.id,
      categoryTitle: cat.title,
      id: char.id,
      title: char.name,
      desc: char.description || "Aucune description",
      url: char.avatarUrl || "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600"
    }));
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newUrl) return;

    onAddImage({
      id: `custom_img_${Date.now()}`,
      name: newTitle,
      description: newDesc,
      avatarUrl: newUrl
    });

    // Reset and close
    setNewTitle("");
    setNewUrl("");
    setNewDesc("");
    setIsAddModalOpen(false);
  };

  return (
    <div id="gallery-root" className="space-y-8 animate-in fade-in duration-500">
      {/* Intro Header */}
      <div className="bg-slate-900/40 border border-amber-500/10 rounded-2xl p-6 text-center max-w-3xl mx-auto flex flex-col items-center">
        <Sparkles className="text-amber-500 mb-3" size={28} />
        <h2 className="font-serif text-xl font-bold text-amber-100">
          La Galerie d'Ashera
        </h2>
        <p className="text-xs text-slate-400 font-sans mt-2 max-w-2xl mx-auto leading-relaxed">
          Admirez les illustrations d'exception, les cartes de Tarot mystiques, et les planches de mèmes de notre communauté. Une vitrine visuelle de notre univers de jeu.
        </p>

        {/* Admin Quick Add Button */}
        {isAdmin && (
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-sans font-bold text-xs flex items-center gap-2 tracking-wide shadow-lg shadow-amber-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Plus size={14} />
            Ajouter une illustration
          </button>
        )}
      </div>

      {/* Grid of Artwork cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {allImages.map((img) => (
          <div
            key={img.id}
            className="bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden group relative aspect-[3/4] shadow-xl hover:border-amber-500/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* The Image (Click to Expand) */}
            <div
              onClick={() => setActiveImage({ url: img.url, title: img.title, desc: img.desc })}
              className="w-full h-full cursor-pointer overflow-hidden"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600";
                }}
              />
            </div>

            {/* Hover overlay with title and options */}
            <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-mono bg-slate-950/80 text-amber-400 px-2 py-0.5 rounded border border-slate-800">
                  {img.categoryTitle}
                </span>
                
                {/* Admin Delete Action */}
                {isAdmin && (
                  <button
                    onClick={() => onDeleteImage(img.id)}
                    className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg transition-colors cursor-pointer"
                  >
                    <Trash2 size={12} />
                  </button>
                )}
              </div>

              <div className="space-y-1 text-left">
                <h4 className="font-serif text-sm font-bold text-amber-200">
                  {img.title}
                </h4>
                <p className="text-[10px] text-slate-400 line-clamp-3">
                  {img.desc}
                </p>
                <div className="pt-2 flex items-center gap-1 text-[9px] text-amber-500 font-mono">
                  <Maximize2 size={8} />
                  <span>Agrandir l'illustration</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              <X size={16} />
            </button>
            <div className="bg-slate-900 p-2 rounded-2xl border border-slate-800 shadow-2xl max-h-[70vh] overflow-hidden">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="max-w-full max-h-[65vh] object-contain rounded-xl"
              />
            </div>
            <div className="text-center mt-4 space-y-1 max-w-xl">
              <h3 className="font-serif text-base font-bold text-amber-400">
                {activeImage.title}
              </h3>
              <p className="text-xs text-slate-400">
                {activeImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add Image Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 max-w-md w-full rounded-2xl p-6 relative shadow-2xl">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              <X size={16} />
            </button>
            
            <h3 className="font-serif text-base font-bold text-amber-500 mb-4">
              Ajouter une illustration
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Titre</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ex: Éveil de la Déesse"
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2 text-xs focus:outline-none focus:border-amber-500/40 text-slate-300"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase block mb-1">URL de l'image</label>
                <input
                  type="url"
                  required
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://ex.com/image.png"
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2 text-xs focus:outline-none focus:border-amber-500/40 text-slate-300"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Description (Optionnelle)</label>
                <textarea
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Brève histoire ou description..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2 text-xs focus:outline-none focus:border-amber-500/40 text-slate-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-sans font-bold text-xs cursor-pointer transition-colors"
              >
                Confirmer l'ajout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}