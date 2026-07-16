import { useState } from "react";
import { Sparkles, Compass, Sun, ShieldAlert, Zap, BookOpen, Skull } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Myth {
id: string;
title: string;
subtitle: string;
shortDesc: string;
content: string;
themeColor: string;
bgGradient: string;
icon: any;
borderClass: string;
shadowClass: string;
figures: {
name: string;
role: string;
status: string;
description: string;
avatarUrl?: string;
}[];
}

const MYTHS_DATA: Myth[] = [
{
id: "deesse_mere",
title: "La Déesse-Mère & ses Nephilims",
subtitle: "La Genèse d'Ashera & Les Nephilims",
shortDesc: "Le récit sacré de la création d'Ashera par la toute-puissante Ifrit et l'éveil des cinq gardiens Nephilims.",
content: "Dans le silence éternel du Grand Vide, la toute-puissante Déesse-Mère (Ifrit) s'éveilla et propagea son souffle créateur pour chasser les ténèbres. Dans sa brise créatrice, elle donna naissance non seulement à ses trois enfants sacrés (Prométhée, Pandore et Sisyphe) mais aussi à cinq créatures mythiques : Les Nephilims.\n\nCes gardiens sacrés sont l'origine même de la vie animale et spirituelle d'Ashera :\n\n• NORUKI : Nephilim des flots et des tempêtes, mère de toutes les créatures marines.\n• IRYION : Nephilim du pouvoir et de l'ambition, patriarche des fiers reptiles et des grands dragons.\n• TATYOVA : Nephilim de la vie et de la jouvence, gardienne suprême des mammifères.\n• L'ÉDUCATEUR CÉLESTE (?) : Nephilim des connaissances et de la liberté, père des oiseaux sous toutes leurs formes.\n• XYLIK : Nephilim des secrets et de la curiosité, la tisseuse sacrée pondant insectes et rampants.\n\nCette sainte fratrie de cinq est profondément vénérée et accorde sa bénédiction éternelle au clan Yeshou, agissant comme le cœur mystique d'Ashera.",
themeColor: "text-amber-400",
bgGradient: "from-amber-950/40 via-amber-950/20 to-slate-950/90",
icon: Sun,
borderClass: "border-amber-500/20 hover:border-amber-500/40",
shadowClass: "shadow-amber-500/5",
figures: [
{
name: "Ifrit (La Déesse-Mère)",
role: "Créatrice Suprême",
status: "Divinité Céleste",
description: "L'entité divine originelle d'Ashera. Son éveil dissipa le vide primordial et fit jaillir la lumière, les continents et la magie.",
avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/b7d9a9f219349cec2147c4bd675b7d8b.png"
},
{
name: "Les Cinq Nephilims",
role: "Gardiens Sacrés de la Nature",
status: "Esprits Majeurs",
description: "Noruki, Iryion, Tatyova, l'Éducateur et Xylik. Ils unissent leurs bénédictions pour faire battre le cœur d'Ashera.",
avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/b74285d104af55488c346fe0910bb79f.png"
}
]
},
{
id: "grand_vide",
title: "Le Grand Vide & ses Abominations",
subtitle: "Les Forces Occultes de l'Ombre",
shortDesc: "L'ennemi juré de la Vie, rôdant aux frontières d'Esperia et enfantant des monstres d'une indicible horreur.",
content: "Des légendes anciennes aux faits historiques vérifiés, un ennemi implacable de la Vie elle-même ne cesse de rôder autour de la capitale des mages : le Grand Vide. Père de toutes les Abominations, il engendre des fléaux porteurs de ruines et de folie.\n\nNombre de ses créatures monstrueuses ont été scellées par le passé au prix de sacrifices tragiques. Les souvenirs de ces batailles s'effacent périodiquement de la mémoire des citoyens d'Esperia — un oubli tragique payé au prix fort à chaque réveil du Vide. Car le Vide se nourrit des peurs et des doutes du peuple mages d'Esperia.\n\nPrononcer son nom est considéré comme une grave offense, le vénérer est un crime de haute trahison, et lui adresser des prières est la plus pure hérésie punie du châtiment de l'exil ou de la mort.",
themeColor: "text-purple-400",
bgGradient: "from-purple-950/40 via-purple-950/20 to-slate-950/90",
icon: Skull,
borderClass: "border-purple-500/20 hover:border-purple-500/40",
shadowClass: "shadow-purple-500/5",
figures: [
{
name: "Abominations du Vide",
role: "Destructeurs de Mondes",
status: "Forces Antiques",
description: "Entités cauchemardesques nées du néant, capables de corrompre l'esprit des mages et de dévorer des contrées entières.",
avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/a296f82aaea61ffa60b94c029b5df0c2.png"
}
]
},
{
id: "icare",
title: "Icare, le Déchu",
subtitle: "Le Mythe de la Chute et du Châtiment",
shortDesc: "Le récit tragique du premier mage à avoir succombé à l'ambition démesurée, donnant naissance à la race déchue des Icares.",
content: "La légende d'Icare narre l'insatiable cupidité et le besoin désespéré de reconnaissance d'un jeune mage d'exception face à son divin créateur. Soumettant ses pouvoirs et son corps aux rites arcaniques les plus interdits pour égaler l'Ashen, Icare finit par rompre son âme.\n\nSa chute propagea une malédiction sans précédent sur les peuples d'Esperia, donnant naissance à l'espèce déchue des Icares — des mages consumés par le vide magique, condamnés à une folie destructrice irrémédiable.\n\nAujourd'hui, la métamorphose en Icare reste la plus grande terreur des mages de la cour et le pire cauchemar des hautes-sphères politiques. Elle incarne l'absence absolue de but, l'agonie de l'esprit et la fin irrésistible de la conscience.",
themeColor: "text-red-400",
bgGradient: "from-red-950/40 via-red-950/20 to-slate-950/90",
icon: ShieldAlert,
borderClass: "border-red-500/20 hover:border-red-500/40",
shadowClass: "shadow-red-500/5",
figures: [
{
name: "Icare le Déchu",
role: "Le Premier Maudit",
status: "Esprit Démoniaque",
description: "Autrefois mage d'une brillance inouïe, il commit l'arrogance ultime de vouloir dépasser les dieux, fondant la tragique lignée des damnés.",
avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/14d71c7791d6b8735bd84d58e6b4698c.png"
}
]
},
{
id: "uriel",
title: "Uriel, le Prince Azur",
subtitle: "Les Légendes Héroïques d'Esperia",
shortDesc: "L'épopée héroïque du Prince Azur, dompteur de tempêtes et inventeur d'immenses reliques sacrées.",
content: "Mage légendaire et inventeur d'une ingéniosité sans pareille, ce prince de la lignée de Pandore maîtrisait à la perfection les courants de l'air et de la foudre, ce qui lui valut le titre glorieux de Prince Azur.\n\nAyant affronté et pourfendu à lui seul deux des plus terrifiantes Abominations envoyées par le Grand Vide pour assiéger Esperia, ses exploits guerriers sont gravés dans le marbre du Sanctuaire. Mais sa plus grande force résidait dans son savoir :\n\nUriel forgea d'inestimables artefacts magiques d'une complexité absolue pour dresser un bouclier d'arcanes célestes autour d'Esperia, protégeant les futures générations des incursions de l'Ombre.",
themeColor: "text-indigo-400",
bgGradient: "from-indigo-950/40 via-indigo-950/20 to-slate-950/90",
icon: Zap,
borderClass: "border-indigo-500/20 hover:border-indigo-500/40",
shadowClass: "shadow-indigo-500/5",
figures: [
{
name: "Prince Uriel d'Azure",
role: "Mage Légendaire & Protecteur",
status: "Légende d'Esperia",
description: "Héros éternel ayant fait don de ses reliques et de ses boucliers d'arcanes pour préserver la capitale des mages face au néant.",
avatarUrl: "https://taiyangshi.my.canva.site/ashera/_assets/media/cccb23ef8f663b6aa0c25769876ea4da.png"
}
]
}
];

export default function MythsList() {
const [activeMythId, setActiveMythId] = useState<string>("deesse_mere");

const activeMyth = MYTHS_DATA.find((m) => m.id === activeMythId) || MYTHS_DATA[0];

return (
<div id="myths-list-root" className="space-y-10 animate-in fade-in duration-500">
{/* Header Intro */}
<div className="bg-slate-900/40 border border-amber-500/10 rounded-2xl p-6 text-center max-w-3xl mx-auto">
<Sparkles className="text-amber-500 mx-auto mb-3" size={28} />
<h2 className="font-serif text-xl font-bold text-amber-100">
Mythes & Légendes d'Ashera
</h2>
<p className="text-xs text-slate-400 font-sans mt-2 max-w-2xl mx-auto leading-relaxed">
Découvrez la cosmogonie sacrée d'Ashera, de l'éveil de la Déesse-Mère aux récits tragiques des mages maudits et des grands protecteurs d'Esperia.
</p>
</div>

{/* Myths Grid Selection (Bento-styled Cards) */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
{MYTHS_DATA.map((myth) => {
const Icon = myth.icon;
const isActive = myth.id === activeMythId;
return (
<div
key={myth.id}
onClick={() => setActiveMythId(myth.id)}
className={`relative rounded-2xl p-5 border cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between group ${myth.borderClass} ${myth.shadowClass} ${
isActive
? "bg-slate-900 border-amber-500/40 shadow-xl scale-[1.02]"
: "bg-slate-950/70 border-slate-900 hover:-translate-y-1"
}`}
>
{/* Myth Glow Background */}
<div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-10 transition-opacity group-hover:opacity-20 ${isActive ? "opacity-25" : ""}`} />

<div className="space-y-4">
<div className="flex justify-between items-start">
<span className={`text-[10px] font-mono tracking-wider font-semibold uppercase ${myth.themeColor}`}>
{myth.subtitle.split(" & ")[0]}
</span>
<div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${isActive ? "border-amber-500/20 text-amber-300" : "text-slate-500"}`}>
<Icon size={16} />
</div>
</div>

<div>
<h3 className="font-serif text-base font-bold text-amber-100 group-hover:text-amber-200 transition-colors">
{myth.title}
</h3>
<p className="text-[11px] text-slate-400 font-sans mt-2 leading-relaxed">
{myth.shortDesc}
</p>
</div>
</div>

{/* Lower Decorative details */}
<div className="pt-4 border-t border-slate-900 mt-4 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-slate-500">
<span>Archives d'Esperia</span>
<span className={`opacity-0 transition-opacity group-hover:opacity-100 ${isActive ? "opacity-100 text-amber-400" : ""}`}>
Explorer
</span>
</div>
</div>
);
})}
</div>

{/* Expanded Myth Details (Double Column Immersive Page) */}
<AnimatePresence mode="wait">
<motion.div
key={activeMythId}
initial={{ opacity: 0, y: 15 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -15 }}
transition={{ duration: 0.3 }}
className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-900 bg-slate-950 shadow-2xl relative"
>
{/* Decorative colored glow band at top */}
<div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

<div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 bg-gradient-to-b ${activeMyth.bgGradient}`}>

{/* Left Column: Narrative Content (7 cols) */}
<div className="lg:col-span-7 space-y-6">
<div className="space-y-1">
<span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${activeMyth.themeColor}`}>
{activeMyth.subtitle}
</span>
<h3 className="font-serif text-2xl md:text-3xl font-extrabold text-amber-100 tracking-wide mt-1">
{activeMyth.title}
</h3>
</div>

<div className="w-16 h-[1px] bg-slate-800" />

{/* Text content split by paragraph to add leading-relaxed */}
<div className="text-xs md:text-sm text-slate-300 font-sans space-y-4 leading-relaxed whitespace-pre-wrap">
{activeMyth.content.split("\n\n").map((p, idx) => (
<p key={idx} className={p.startsWith("•") ? "pl-3 text-indigo-300/90 font-medium" : ""}>
{p}
</p>
))}
</div>
</div>

{/* Right Column: Figures / Illustrations associated (5 cols) */}
<div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
<div className="space-y-4">
<h4 className="font-serif text-sm font-bold text-slate-200 border-b border-slate-900 pb-2 flex items-center gap-2 uppercase tracking-wide">
<BookOpen size={14} className="text-amber-500" />
Figures Cosmiques Associées :
</h4>

<div className="space-y-4">
{activeMyth.figures.map((fig, idx) => (
<div key={idx} className="bg-slate-950/80 border border-slate-900 rounded-2xl p-4 flex gap-4 items-start shadow-xl">
{fig.avatarUrl && (
<div className="w-16 h-20 rounded-xl overflow-hidden border border-amber-500/20 shadow-md shadow-amber-500/5 flex-shrink-0">
<img
src={fig.avatarUrl}
alt={fig.name}
className="w-full h-full object-cover"
referrerPolicy="no-referrer"
onError={(e) => {
e.currentTarget.src = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=200";
}}
/>
</div>
)}
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-2">
<h5 className="font-serif text-xs font-bold text-amber-200 truncate">
{fig.name}
</h5>
<span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border border-slate-800 bg-slate-900/50 uppercase truncate ${activeMyth.themeColor}`}>
{fig.status}
</span>
</div>
<p className="text-[10px] text-indigo-300 font-sans font-semibold mt-0.5">
{fig.role}
</p>
<p className="text-[11px] text-slate-400 font-sans mt-2 leading-relaxed">
{fig.description}
</p>
</div>
</div>
))}
</div>
</div>

{/* Decorative Grimoire Insignia */}
<div className="hidden lg:flex items-center justify-center p-6 border border-slate-900 bg-slate-950/40 rounded-2xl mt-4">
<div className="text-center space-y-2">
<div className="h-8 w-8 bg-amber-500/5 border border-amber-500/15 rounded-full flex items-center justify-center mx-auto text-amber-500/40">
<Compass size={14} />
</div>
<p className="text-[9px] font-mono uppercase text-slate-500 tracking-widest">
Chroniqueurs d'Esperia — Grimoire Ⅲ
</p>
</div>
</div>

</div>

</div>
</motion.div>
</AnimatePresence>
</div>
);
}
