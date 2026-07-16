import { useState } from "react";
import { Users, Shield, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Participant {
  name: string;
  firstName: string;
  lastName: string;
  status: string;
  avatarUrl: string;
  borderClass: string;
  textClass: string;
}

interface NPC {
  name: string;
  title: string;
  status: string;
  avatarUrl: string;
}

interface ChapterDetails {
  id: string;
  title: string;
  subtitle?: string;
  introduction: string;
  paragraphs: string[];
  participants: Participant[];
  npcs: NPC[];
}

const ARC1_CHAPTERS: ChapterDetails[] = [
  {
    id: "banquet_etripeur",
    title: "Banquet de l’Étripeur",
    subtitle: "Couper le Mal à la Racine",
    introduction: "Sous l'ordre de l'Ashen, mage le plus puissant de la Cour, les nouveaux espoirs d'Esperia sont conviés à la table du redoutable chef du Conseil des Marchands.",
    paragraphs: [
      "Sous l'ordre de l'Ashen, Brutus Redwitch de la Garde Pourpre, Tsukishiro Akane du Voile d'Ivoire, Eveus Asior du Cercle Azur et Kalès Septimus envoyé de JAVUS, se retrouvent conviés à un banquet organisé par Oscar, dit l'Étripeur, dirigeant du Conseil des Marchands.",
      "Le but officiel de cette rencontre était de négocier la paix sociale dans la Basse-Ville d'Esperia, mais la réunion tourne rapidement à l'affrontement politique de grande envergure. Entre joutes verbales et révélations de corruption, le vernis de respectabilité des marchands s'écaille rapidement.",
      "Les mages découvrent alors l'existence de la ROD, une nouvelle substance dévastatrice, et réalisent que le Conseil des Marchands contrôle en réalité l'économie souterraine et les réseaux clandestins.",
      "Les alliances politiques se forment et se déforment sous les yeux de Sir Isaac Gellner, représentant de Shrade, et de la mystérieuse Izena Haveh, observatrice attentive de l'Havre Bleu. La menace de l'affrontement armé plane désormais sur les bas-fonds d'Esperia."
    ],
    participants: [
      {
        name: "Brutus Redwitch",
        firstName: "BRUTUS",
        lastName: "REDWITCH",
        status: "En vie.",
        borderClass: "border-red-600/60 shadow-red-500/5",
        textClass: "text-red-400",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/a296f82aaea61ffa60b94c029b5df0c2.png"
      },
      {
        name: "Tsukishiro Akane",
        firstName: "TSUKISHIRO",
        lastName: "AKANE",
        status: "En vie.",
        borderClass: "border-teal-600/60 shadow-teal-500/5",
        textClass: "text-teal-400",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/80b92962de42668b2c528f916ddc16ad.png"
      },
      {
        name: "Eveus Asior",
        firstName: "EVEUS",
        lastName: "ASIOR",
        status: "En vie.",
        borderClass: "border-indigo-600/60 shadow-indigo-500/5",
        textClass: "text-indigo-400",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/b74285d104af55488c346fe0910bb79f.png"
      },
      {
        name: "Kalès Septimus",
        firstName: "KALES",
        lastName: "SEPTIMUS",
        status: "En vie.",
        borderClass: "border-amber-600/60 shadow-amber-500/5",
        textClass: "text-amber-400",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/b7d9a9f219349cec2147c4bd675b7d8b.png"
      }
    ],
    npcs: [
      {
        name: "Oscar l'Étripeur",
        title: "Chef du Conseil des Marchands",
        status: "En vie",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/cccb23ef8f663b6aa0c25769876ea4da.png"
      },
      {
        name: "Sir Isaac Gellner",
        title: "Ambassadeur de Shrade",
        status: "En vie",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/cccb23ef8f663b6aa0c25769876ea4da.png"
      }
    ]
  },
  {
    id: "rouge_revelera",
    title: "Ce que le Rouge révélera",
    subtitle: "Le Piège de l'Arène de Sang",
    introduction: "Une filature délicate mène les mages au cœur de la terrible Arène de Sang, où la Distra les attend pour un affrontement dantesque.",
    paragraphs: [
      "Les Mages de la Cour ont été convoqués en urgence pour prendre en filature la Régente de la Basse-Ville suite à l’interception d’une communication secrète avec l'Étripeur. La Garde Pourpre dépêche l'implacable Allaric Gesun pour encadrer l'équipe.",
      "Après une filature complexe à travers les ruelles brumeuses d'Esperia, l'équipe se sépare pour couvrir les issues, mais se retrouve piégée et encerclée. Un affrontement d'une rare violence s'engage alors face à la Distra et aux mercenaires de Sha'al Langster dans l'Arène de Sang.",
      "Les aventuriers se mesurent à des guerriers de Sisyphe Senso, Sisyphe Yeshou et à des mages de feu pandoriens, tous dopés aux potions explosives de ROD. La disparité de puissance est terrifiante : le brave Hedwig y perd un œil lors des premiers échanges.",
      "Les marchands, convaincus de leur victoire, imposent un marché impitoyable : la servitude éternelle ou la mort. Le combat reprend de plus belle, et de multiple portes magiques s'éveillent, illuminant l'arène de éclats écarlates.",
      "Alors que la vie de Ren Urugaki est directement menacée par un coup fatal, Allaric Gesun descend des cieux tel un météore de feu, invoquant ses pouvoirs de guerre pour couvrir l'évacuation des mages brisés."
    ],
    participants: [
      {
        name: "Ren Urugaki",
        firstName: "REN",
        lastName: "URUGAKI",
        status: "En vie.",
        borderClass: "border-indigo-600/60 shadow-indigo-500/5",
        textClass: "text-indigo-400",
        avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300"
      },
      {
        name: "Hedwig",
        firstName: "HEDWIG",
        lastName: "BORGNE",
        status: "En vie (Borgne).",
        borderClass: "border-red-600/60 shadow-red-500/5",
        textClass: "text-red-400",
        avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=300"
      },
      {
        name: "Allaric Gesun",
        firstName: "ALLARIC",
        lastName: "GESUN",
        status: "En vie.",
        borderClass: "border-amber-600/60 shadow-amber-500/5",
        textClass: "text-amber-400",
        avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300"
      }
    ],
    npcs: [
      {
        name: "Sha'al Langster",
        title: "Marquise au Conseil des Marchands",
        status: "En vie",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/cccb23ef8f663b6aa0c25769876ea4da.png"
      }
    ]
  },
  {
    id: "rage_sang",
    title: "De la Rage et du Sang",
    subtitle: "La Tragédie de Theodore Mest",
    introduction: "Une enquête urgente sur les docks révèle les ravages de la drogue ROD et conduit à l'héroïque sacrifice d'un mage aîné d'exception.",
    paragraphs: [
      "Le quartier Ouest, condamné par la pourriture et la drogue ROD, est le théâtre d'une enquête d'urgence des douanes menée par Euros, Lucia, Nick, Katelyn, Louis et Kenji. Après la découverte de la milice des Libérateurs qui rançonne les habitants ou les force à se prostituer, un complice est capturé.",
      "La nuit suivante, une unité de l'Étendard Écarlate est retrouvée brisée au quai de la Balade du Pèlerin. Aryana Erhendil, Isis Faerith et Nah Jasp enquêtent à 'La Belette à deux queues' où ils découvrent une nouvelle drogue dévastatrice : la ROD.",
      "Theodore Mest, Mage aîné d'une immense gentillesse, est forcé d'utiliser l'Arcane Interdite face aux ravisseurs pour sauver ses élèves, entamant sa transformation tragique en Icare.",
      "Il est ensuite abattu avec respect par Reya Arcadia, offrant un dernier au revoir à sa tombe, scellant ainsi l'une des nuits les plus sombres de la guilde du Voile d'Ivoire."
    ],
    participants: [
      {
        name: "Euros",
        firstName: "EUROS",
        lastName: "",
        status: "En vie.",
        borderClass: "border-blue-600/60 shadow-blue-500/5",
        textClass: "text-blue-400",
        avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
      },
      {
        name: "Theodore Mest",
        firstName: "THEODORE",
        lastName: "MEST",
        status: "Décédé (Transformé en Icare).",
        borderClass: "border-purple-600/60 shadow-purple-500/5",
        textClass: "text-purple-400",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/cccb23ef8f663b6aa0c25769876ea4da.png"
      },
      {
        name: "Reya Arcadia",
        firstName: "REYA",
        lastName: "ARCADIA",
        status: "En vie.",
        borderClass: "border-red-600/60 shadow-red-500/5",
        textClass: "text-red-400",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
      }
    ],
    npcs: [
      {
        name: "Theodore Mest (Icare)",
        title: "Mage Aîné Déchu",
        status: "Abattu",
        avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/cccb23ef8f663b6aa0c25769876ea4da.png"
      }
    ]
  }
];

export default function Timeline() {
  const [activeChapterId, setActiveChapterId] = useState<string>("banquet_etripeur");

  const activeChapter = ARC1_CHAPTERS.find((c) => c.id === activeChapterId) || ARC1_CHAPTERS[0];

  return (
    <div id="timeline-root" className="space-y-10 animate-in fade-in duration-500">
      {/* Intro Header */}
      <div className="bg-slate-900/40 border border-amber-500/10 rounded-2xl p-6 text-center max-w-3xl mx-auto">
        <Calendar className="text-amber-500 mx-auto mb-3" size={28} />
        <h2 className="font-serif text-xl font-bold text-amber-100">
          Chronique Historique d'Esperia
        </h2>
        <p className="text-xs text-slate-400 font-sans mt-2 max-w-2xl mx-auto leading-relaxed">
          Suivez la chronologie des événements majeurs de la campagne d'Ashera, reconstituée à partir des rapports officiels de la Garde Pourpre et des archives du Voile d'Ivoire.
        </p>
      </div>

      {/* Grid: Navigation Timeline & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
        {/* Left Column: Chapters vertical steps (5 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="font-serif text-xs font-bold text-slate-500 uppercase tracking-widest pl-2 mb-2 text-left">
            Événements Récents (Arc 1)
          </h3>
          <div className="relative pl-6 border-l border-slate-900 space-y-6 text-left">
            {ARC1_CHAPTERS.map((chapter, index) => {
              const isActive = chapter.id === activeChapterId;
              return (
                <div
                  key={chapter.id}
                  onClick={() => setActiveChapterId(chapter.id)}
                  className="relative group cursor-pointer"
                >
                  {/* Glowing Node Dot */}
                  <div
                    className={`absolute -left-[30px] top-1.5 h-4 w-4 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-amber-500 border-amber-400 shadow-md shadow-amber-500/25 scale-110"
                        : "bg-slate-950 border-slate-800 group-hover:border-amber-500/50"
                    }`}
                  />

                  <div
                    className={`p-4 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "bg-slate-900 border-amber-500/30 shadow-lg shadow-amber-500/5"
                        : "bg-slate-950/40 border-slate-900 hover:border-slate-850 hover:bg-slate-950/80"
                    }`}
                  >
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wide block">
                      Chapitre 0{index + 1}
                    </span>
                    <h4
                      className={`font-serif text-sm font-bold mt-1 transition-colors ${
                        isActive ? "text-amber-400" : "text-slate-300 group-hover:text-amber-300"
                      }`}
                    >
                      {chapter.title}
                    </h4>
                    {chapter.subtitle && (
                      <p className="text-[10px] text-slate-500 font-sans mt-0.5 truncate">
                        {chapter.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Chapter Detail (8 cols) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapterId}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-950 border border-slate-900 rounded-3xl p-6 md:p-8 space-y-6 relative shadow-2xl"
            >
              {/* Header */}
              <div className="space-y-1 text-left">
                <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">
                  Rapport Officiel d'Esperia
                </span>
                <h3 className="font-serif text-2xl font-bold text-amber-100 mt-1">
                  {activeChapter.title}
                </h3>
                {activeChapter.subtitle && (
                  <p className="text-xs text-slate-400 font-serif italic">
                    {activeChapter.subtitle}
                  </p>
                )}
              </div>

              <div className="w-16 h-[1px] bg-slate-900" />

              {/* Introduction box */}
              <div className="bg-slate-900/30 border-l border-amber-500/30 p-4 rounded-r-2xl text-left">
                <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                  {activeChapter.introduction}
                </p>
              </div>

              {/* Story Paragraphs */}
              <div className="space-y-4 text-xs md:text-sm text-slate-400 leading-relaxed text-justify font-sans">
                {activeChapter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Grid: Participants & NPCs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-900/60">
                {/* Active Participants */}
                <div className="space-y-4 text-left">
                  <h4 className="font-serif text-xs font-bold text-slate-200 flex items-center gap-1.5 uppercase tracking-wide border-b border-slate-900 pb-2">
                    <Users size={12} className="text-amber-500" />
                    Mages de la Cour
                  </h4>
                  <div className="space-y-3">
                    {activeChapter.participants.map((part, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-slate-900/40 p-2.5 rounded-xl border border-slate-900"
                      >
                        <div
                          className={`w-9 h-9 rounded-lg overflow-hidden border ${part.borderClass} bg-slate-950 flex-shrink-0`}
                        >
                          <img
                            src={part.avatarUrl}
                            alt={part.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback on broken image
                              e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100";
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-[11px] font-bold text-slate-200 truncate">
                            {part.name}
                          </h5>
                          <span className={`text-[8px] font-mono tracking-wider ${part.textClass}`}>
                            {part.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* NPCs / Allies / Enemies */}
                <div className="space-y-4 text-left">
                  <h4 className="font-serif text-xs font-bold text-slate-200 flex items-center gap-1.5 uppercase tracking-wide border-b border-slate-900 pb-2">
                    <Shield size={12} className="text-amber-500" />
                    PNJ & Menaces Clés
                  </h4>
                  <div className="space-y-3">
                    {activeChapter.npcs.map((npc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-slate-900/40 p-2.5 rounded-xl border border-slate-900"
                      >
                        <div className="w-9 h-9 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 flex-shrink-0">
                          <img
                            src={npc.avatarUrl}
                            alt={npc.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100";
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-[11px] font-bold text-amber-200 truncate">
                            {npc.name}
                          </h5>
                          <span className="text-[8px] font-mono text-slate-500 block truncate">
                            {npc.title} — <span className="text-slate-400">{npc.status}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}