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
  status?: "En vie" | "Décédé" | "Inconnu" | string;
}

export interface Subsection {
  id: string;
  title: string;
  description?: string;
  content?: string;
  characters?: Character[];
  subsections?: Subsection[];
}

export interface LoreSection {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  characters?: Character[];
  content?: string;
  subsections?: Subsection[];
}

export const LORE_DATA: LoreSection[] = [
  {
    id: "carnet_adresse",
    title: "Carnet d'Adresse",
    subtitle: "Les Figures d'Esperia",
    description: "Découvrez l'annuaire complet des habitants de la capitale des mages : les dirigeants, la noblesse, les témoins et les mages des différentes guildes.",
    subsections: [
      {
        id: "famille_royale",
        title: "La Famille Royale",
        description: "La Maison Leonhart — Sang Royal d'Esperia",
        content: "La cité d'or a presque toujours connu une puissante famille à sa tête : La Maison Leonhart. C'est à leur tête que se trouve le Roi d'Esperia, toujours membre du peuple de Sisyphe. Leur sang est considéré comme sacré, royal, mais ils restent des hommes et des femmes proches de leur peuple. De notre temps, c'est le roi Lucius, qui est chef de cette illustre famille, secondé par la douce reine Lise. Ensemble, ils ont eu trois magnifiques enfants : deux garçons et une fille. Le Cadet se nomme Alexandre et il est particulièrement apprécié par le peuple ; sa petite sœur Fiona reste quant à elle plus discrète, constamment accompagnée d'un garde du corps membre de l'Œil. L'Aîné portant le nom d'Ézéchiel a disparu depuis quelques années maintenant, causant un grand chagrin au sein de la cour. Ensemble et avec l'appui du Conseil, les Leonhart dirigent Esperia vers une paix continue et la prospérité qui l'accompagne.",
        characters: [
          {
            id: "lucius_leonheart",
            name: "Lucius Ier Leonheart",
            title: "Roi d'Esperia",
            origin: "Sisyphe",
            affiliation: "Roi d'Esperia, la cité des mages",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/cccb23ef8f663b6aa0c25769876ea4da.png",
            description: "Digne descendant de la lignée Leonhart, sa Majesté Lucius est connu pour sa grande bienveillance et sa bonté, le tout encadré par la fermeté d'un dirigeant sage, d'un érudit. Apprécié par son peuple, l'âge a su tirer ses traits sans lui retirer sa beauté. Son charisme naturel en fait un leader né, pour autant il remet toujours en question son jugement, ses décisions. Cela ne fait pas de lui un Roi faible, bien au contraire, les hautes sphères aiment dire de lui qu'il est lucide. Aujourd'hui patriarche de la famille la plus importante de la capitale, sa majesté se tourne vers l'avenir, avec l'espoir que sa paix perdurera encore, bien des années après lui.",
            quote: "J'ai foi en mon peuple, je sais que la paix ne peut que perdurer.",
            status: "En vie"
          },
          {
            id: "lise_leonheart",
            name: "Lise Leonheart",
            title: "Reine d'Esperia",
            origin: "Prométhéen",
            affiliation: "Reine d'Esperia",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/df7bef257478f3708b8c7c9e022d4eb1.png",
            description: "La douce reine d'Esperia et épouse de sa Majesté Lucius. D'origine Prométhéenne, elle incarne la tempérance et le soutien indéfectible du trône. Respectée pour sa droiture, elle est l'oreille attentive du peuple et apporte une vision apaisante au Conseil Royal.",
            status: "En vie"
          },
          {
            id: "alexandre_leonheart",
            name: "Alexandre Leonheart",
            title: "Prince Héritier d'Esperia",
            origin: "Sisyphe",
            affiliation: "Prince héritier d'Esperia",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/342f6b7f4a8c3d8f3bcdc1e9f97d39a2.png",
            description: "Premier fils et digne héritier, Alexandre est à l'honneur ce que la couronne est à la royauté. Jeune prodige de la lame dès petit, il se démarque au travers de la manipulation de son aspect, attirant aussi bien les regards joyeux de ses géniteurs que l'œil envieux des autres escrimeurs. Dès ses huit ans, il entre dans le cercle des 10 Grandes Lames de sa cité, faisant de lui rapidement le prince idéal que ses parents et son peuple ont tant convoité, certains le surnommant même le prince d'azur.",
            quote: "Père, vous devriez cesser de faire pister ma Sœur lors de ses évasions hors du palais... Non pas que je puisse comprendre votre anxiété... Mais plutôt que c'est la septième fois cette semaine qu'elle arrive à habilement les semer...",
            status: "En vie"
          },
          {
            id: "fiona_leonheart",
            name: "Fiona Leonheart",
            title: "Princesse d'Esperia",
            origin: "Pandorienne",
            affiliation: "Princesse d'Esperia",
            grade: "Porte 2",
            avatarUrl: "/_assets/media/8eb9f1828601d7704dc60ca8ef45ca6c.png",
            description: "Enfant de la lignée royale, Fiona est la cadette. Adorée de ses parents, elle n'éprouve pourtant qu'une haine viscérale pour son géniteur. Curieuse, inventive, elle arpente les rues d'Esperia sous une identité autre que celle de la couronne. Vivre au rythme des carrefours, parmi ceux qui sont le peuple. Armée d'un capuchon discret, elle s'adonne à une forme de maquillage pour masquer son identité. Plusieurs surnoms lui sont attribués, plus ou moins connus du peuple. Douce, elle n'en reste pas moins digne de sa lignée, gardant les traits d'une famille noble et distinguée. Elle dispose d'une particularité, une affinité avec l'Arcane dont les liens sont encore inconnus, incompris.",
            quote: "Je... l'entends... Par l'Au-Delà.",
            status: "En vie"
          },
          {
            id: "le_conseiller",
            name: "Le Conseiller",
            title: "Conseiller d'Esperia",
            origin: "Inconnue",
            affiliation: "Conseiller d'Esperia, la cité des mages",
            avatarUrl: "/_assets/media/afaccf1e6cd838d51da057c3399ee0c8.png",
            description: "Le conseiller, figure emblématique de la cour royale, il est l’ombre du roi et son sujet le plus dévoué. Arbitre au haut conseil des trois maisons, il est celui qui a recruté et formé les trois témoins. Combinant la clairvoyance d'un scientifique, l'instinct d'un juge et la finesse d'un stratège, il est en charge de l'application de la volonté du Roi et de la maison Leonhart. Seconde autorité la plus influente après son seigneur et l'Ashen, c'est lui qui régit et règle la majorité des problèmes du royaume. Disposant d'un champ de vision absolu dans chaque coin d’Esperia, il est celui qui flirte le plus avec l’Arcane. Une légende conte même qu’il n’est actuellement plus qu’un esprit dans un corps entièrement reconstitué par ses compétences telluriques.",
            quote: "Il est le guide du Roi, un esprit éclairé dans un corps arcanique.",
            status: "En vie"
          }
        ]
      },
      {
        id: "grandes_familles",
        title: "Les Grandes Familles Nobles",
        description: "Valdor, Eclipsium et Cravgant",
        content: "Fondatrices des guildes et membres exclusifs du Conseil du roi, les three grandes familles nobles que sont les Valdor, les Cravgant et les Eclipsium forment une élite assumée de la capitale. Alors qu'elles évoluent côte à côte, malgré des idéologies différentes, chacune des trois familles souhaite s'imposer sur l'échiquier politique et ainsi, avoir la chance de peindre Esperia aux couleurs de ses idées.",
        characters: [
          {
            id: "ares_cravgant",
            name: "Arès Cravgant",
            title: "Ancien Patriarche Cravgant",
            origin: "Sisyphe",
            affiliation: "La Maison Cravgant",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/0d0a37959b0900bc45c0e8f7ca189dea.jpg",
            description: "La Maison Cravgant descend des premiers nomades Sisyphes, bien avant l'instauration des clans. Ils ont toujours mis en avant l'importance du sang et sa pureté ; menant bien souvent une chasse aux sorcières envers leurs confrères ne maîtrisant pas leurs pouvoirs avec assez de justesse. De nos jours repentis, cette famille n'en reste pas moins particulièrement belliqueuse et conservatrice sur les sujets de l'Arcane, sa maîtrise comme son exploitation. Arès Cravgant est à cette image : un homme rude, guerrier sanglant qui ne semble rendre de compte qu'à lui-même. Celui-ci fut arrêté et exécuté pour un crime si odieux qu'il a été passé sous silence par le Voile d'Ivoire et la Justice.",
            status: "Décédé"
          },
          {
            id: "alexandre_cravgant",
            name: "Alexandre Cravgant",
            title: "Chef de la Maison Cravgant",
            origin: "Sisyphe",
            affiliation: "La Garde Pourpre",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/8c31b31751475121ab102031807fddb3.png",
            description: "Fils d'Arès Cravgant. Aujourd'hui, Alexandre semble progressivement suivre les traces de son père, partageant son obsession pour la pureté du sang. Il est cependant bien plus encadré par Dame Félina Cravgant, qui mesure les pulsions de l'enfant-roi.",
            status: "En vie"
          },
          {
            id: "felina_cravgant",
            name: "Félina Cravgant",
            title: "Matriarche Cravgant",
            origin: "Sisyphe",
            affiliation: "La Garde Pourpre",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/b97cce2eabe6836531b55b33fc77a249.png",
            description: "Matriarche de la famille Cravgant. Elle s'efforce de mesurer et de guider les pulsions belliqueuses et conservatrices de son fils Alexandre, assurant la survie diplomatique de sa maison au sein d'Esperia.",
            status: "En vie"
          },
          {
            id: "willem_eclipsium",
            name: "Willem Loom Eclipsium",
            title: "Héritier Eclipsium",
            origin: "Pandorien",
            affiliation: "Le Cercle Azur",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/911f8ba93fab89775477c48475685918.jpg",
            description: "Willem n'est pas un aventurier, c'est un rêveur amoureux de poésie et de philosophie qui perçoit la littérature et la philosophie comme les sciences les plus complexes. Figure actuelle la plus emblématique de sa maison, il est aussi la plus connue du grand public. Surnommé l'oiseau de nuit pour sa manie de ne daigner se manifester qu'une fois le soleil couché, il est l'enfant que l'on a placé sur le siège des responsabilités de son père depuis que celui-ci ne daigne plus montrer le bout de son nez aux dîners mondains.",
            status: "En vie"
          },
          {
            id: "dante_eclipsium",
            name: "Dante Eclipsium",
            title: "Archiviste Eclipsium",
            origin: "Pandorien",
            affiliation: "Le Cercle Azur",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/b5fc5a2034e5034f477d76a359aa4926.png",
            description: "La Lune dispose toujours d'une part d'ombre : Dante. Willem, héritier de la branche principale, a toujours éclipsé son cousin de par son talent ou sa prestance. Pourtant, tout porte à croire qu'ils évoluent sur un même plan : une recherche et une assimilation avares de connaissances, découvertes et de secrets. Son rôle au sein de la maison Eclipsium et du Cercle Azur est de répertorier toutes les découvertes et l'histoire d'Ashera au sein de la Bibliothèque Royale la plus importante et la plus ancienne : le sanctuaire bleu. Plus discret et portant en permanence un masque, il laisse la lumière lunaire à Willem et sa fratrie, tandis qu'il manipule les ombres, les secrets et les blasphèmes, scellant les connaissances les plus délicates au sein de son temple de papier, de bois et de cuir.",
            quote: "La vérité a autant de facettes que de bouches pour la raconter… Il en va de même pour tout écrit, qu'il soit scientifique ou historique… Le pouvoir des mots est sans limite. Il permet de communiquer, de forger, de détruire ou de briser.",
            status: "En vie"
          },
          {
            id: "elena_eclipsium",
            name: "Elena Celeste Eclipsium",
            title: "Gouverneur & Matriarche Eclipsium",
            origin: "Pandorienne",
            affiliation: "Le Cercle Azur",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/dfda039423b1f70007b4e7331ed04422.jpg",
            description: "Épouse d’un voyageur absent, elle est la main qui dans l’ombre s’est chargée de faire briller l’écusson de sa maison alors que son rêveur de mari préférait voyager… Matriarche aussi douce que rigide, c’est à elle que l’on doit la survie des Eclipsiums parmi la haute sphère de la noblesse. Peu réputée pour ses écrits, elle a grandi et vieilli dans la politique que son mari méprisait. Sa voix est sans appel et le glacial qui peut en découler est la seule terreur apte à ramener sur terre les rêveurs de sa famille.",
            quote: "Sur l'échiquier de sa famille, elle est incontestablement la pièce maîtresse : une reine capable de traverser 8 cases d'un battement de cils tandis que son mari n'est qu'un roi bon à protéger.",
            status: "En vie"
          },
          {
            id: "orion_eclipsium",
            name: "Orion Star Eclipsium",
            title: "Directeur du Cercle Azur",
            origin: "Prométhéen",
            affiliation: "Le Cercle Azur",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/9f6d6869ecdbf62ff0df3e67b27eb941.jpg",
            description: "Premier fils de son blason, Orion a hérité du goût du voyage de son père et du sens organisationnel de sa mère. Il se distingue dès son plus jeune âge par une dévotion sans faille à la Déesse-Mère. Particulièrement friand de lecture, il est certainement des quatre enfants héritiers celui qui a le plus consommé les ouvrages des bibliothèques de sa guilde. D’une mémoire d'éléphant, on murmure qu'il est capable de réciter par cœur les écrits de sa maison. Chargé depuis maintenant cinq ans de la gestion de cette guilde, il peut être compris comme le directeur de cet organisme savant.",
            quote: "Orion n'est pas de ces jeunes nobles éduqués à la barbarie du pouvoir. Mage d'une qualité exceptionnelle, c'est à son doigté que l'on doit la construction d'importantes infrastructures arcaniques du Cercle Azur ou d'Esperia elle-même. Surnommé l'architecte, il est le fondateur de l'unité ciel.",
            status: "En vie"
          },
          {
            id: "aurore_eclipsium",
            name: "Aurore Floyd Eclipsium",
            title: "Comptable Eclipsium",
            origin: "Prométhéenne",
            affiliation: "Le Cercle Azur",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/b94ce5bbbeeadce210655837bbc4c2ca.png",
            description: "Née entre deux icônes de sa famille, Aurore est une femme que trop souvent on oublie. Et cela, malgré le fait que ses connaissances sur l’utilisation de l’Arcane dépassent largement celles de ses frères… Démunie de tout talent rédactionnel, c’est dans les chiffres qu’elle se terre. Comptable de sa maison, elle a appris la gestion chez ceux qui la connaissent au cours de ses nombreux voyages. Elle entretient d'ailleurs une relation proche avec Izena Haveh, une amie de longue date.",
            quote: "Le bleu du havre me manque déjà… J’espère que ce mois ne va pas durer une éternité…",
            status: "En vie"
          },
          {
            id: "rias_valdor",
            name: "Rias Valdor",
            title: "Tête de la Maison Valdor",
            origin: "Pandorienne",
            affiliation: "Le Voile d'Ivoire",
            grade: "Porte 4 (Les yeux éveillés)",
            avatarUrl: "/_assets/media/8e7a8047add91a5907c3e7adacbcb05e.png",
            description: "À l'inverse des deux autres maisons nobles, la Maison Valdor is a house of the people. Initialement une maison de pauvres gens, elle a réussi à se démarquer par son altruisme. Rias Valdor, fille de l'ancien patriarche Richard tombé étrangement malade, mène la maison d'une main douce mais ferme. Belle, grande et sophistiquée, elle accumule sans fin les informations, se souvenant, retenant et analysant tout avec une véracité surprenante. Ses portes sont ouvertes à ceux qui n'ont pas la chance d'être instruits et qui souhaitent découvrir la beauté du monde à travers le passé et le futur. Son domaine de prédilection : les étoiles et le ciel.",
            status: "En vie"
          },
          {
            id: "marcus_valdor",
            name: "Marcus Valdor",
            title: "Chef du Voile d'Ivoire",
            origin: "Prométhéen",
            affiliation: "Le Voile d'Ivoire",
            grade: "Porte 3",
            avatarUrl: "/_assets/media/c901dbef845ef5d37fe3003ea9185e73.png",
            description: "Celui qui siège sur le fauteuil de dirigeant du Voile d'Ivoire est une figure presque paternelle pour tous ses membres. Marcus n'a pas choisi la voie des nobles et a commencé tout en bas. Adepte de l'Ordre, du Respect et de l'Humain, il a bâti une guilde transparente qui agit pour le peuple d'Esperia. En dehors de sa prestance, c'est un homme complexe partagé entre de grandes ambitions de sécurité (liées à un traumatisme d'une de ses premières missions) et son côté complètement gaga avec sa nièce Rias et les jeunes recrues.",
            quote: "Pour les membres, il y a deux Marcus : celui qui impose le respect par sa prestance d'un chic et brave type... et le Marcus avec un tablier Rose quand sa nièce se présente à sa porte.",
            status: "En vie"
          }
        ]
      },
      {
        id: "maison_cravgant",
        title: "Maison Cravgant",
        description: "Les seigneurs de la Garde Pourpre",
        content: "La Maison Cravgant descend des premiers nomades Sisyphes. Ils ont toujours mis en avant l'importance du sang et sa pureté. Aujourd'hui dirigée par le jeune et belliqueux Alexandre Cravgant sous la surveillance de la Matriarche Félina, elle s'impose sur les sujets militaires de la capitale.",
        characters: [
          {
            id: "alexandre_cravgant_2",
            name: "Alexandre Cravgant",
            title: "Chef de la Maison Cravgant",
            origin: "Sisyphe",
            affiliation: "La Garde Pourpre",
            grade: "Chef de la maison Cravgant",
            door: "Porte 3",
            avatarUrl: "/_assets/media/8c31b31751475121ab102031807fddb3.png",
            description: "Fils d'Arès Cravgant, il dirige sa maison avec une certaine tyrannie et cherche à étendre son idéologie du 'Sang-Roi' au sein de la Garde Pourpre. Il nourrit une jalousie obsessionnelle envers le Témoin Allaric Gesun.",
            quote: "Seul le Sang-Roi compte, le reste n'est qu'hérésie et corruption.",
            status: "En vie"
          },
          {
            id: "felina_cravgant_2",
            name: "Félina Cravgant",
            title: "Matriarche Cravgant",
            origin: "Sisyphe",
            affiliation: "La Garde Pourpre",
            grade: "Matriarche de la famille",
            door: "Porte 3",
            avatarUrl: "/_assets/media/b97cce2eabe6836531b55b33fc77a249.png",
            description: "Épouse d'Arès, elle est la responsable opérationnelle de la maison. Guerrière sans pitié mais dame de la Cour avisée, elle tempère la tyrannie de son fils et applique un contrôle strict sur la magie irrégulière.",
            quote: "Félina ? Je n'échangerais ma place avec elle pour rien au monde. — Allaric Gesun",
            status: "En vie"
          },
          {
            id: "ares_cravgant_2",
            name: "Arès Cravgant",
            title: "Ancien Patriarche 'Le Bourreau'",
            origin: "Sisyphe — Senso",
            affiliation: "La Maison Cravgant",
            grade: "Patriarche (exécuté)",
            avatarUrl: "/_assets/media/0d0a37959b0900bc45c0e8f7ca189dea.jpg",
            description: "Guerrier barbare et sanguinaire qui a mené la maison d'une main de fer, n'obéissant qu'à lui-même. Il a été exécuté par la Justice d'Esperia pour ses crimes indicibles.",
            quote: "Par le sang, je purge la faiblesse.",
            status: "Décédé"
          }
        ]
      },
      {
        id: "maison_eclipsium",
        title: "Maison Eclipsium",
        description: "Les gardiens du Sanctuaire Bleu",
        content: "La Maison Eclipsium est l'âme du Cercle Azur. Consacrée à la poésie, à l'astrologie et à la conservation de la Bibliothèque Royale (le Sanctuaire Bleu), ses membres manipulent les secrets, les livres anciens et la sagesse arcanique.",
        characters: [
          {
            id: "willem_eclipsium_2",
            name: "Willem Loom Eclipsium",
            title: "Héritier Eclipsium",
            origin: "Pandorien",
            affiliation: "Le Cercle Azur",
            grade: "Héritier principal",
            door: "Porte 3",
            avatarUrl: "/_assets/media/911f8ba93fab89775477c48475685918.jpg",
            description: "Amoureux de philosophie et de poésie surnommé 'l'oiseau de nuit' pour ses habitudes nocturnes, il a repris la gestion des affaires de sa maison en l'absence de son père.",
            status: "En vie"
          },
          {
            id: "dante_eclipsium_2",
            name: "Dante Eclipsium",
            title: "Archiviste Eclipsium",
            origin: "Pandorien",
            affiliation: "Le Cercle Azur",
            grade: "Archiviste du Sanctuaire",
            door: "Porte 3",
            avatarUrl: "/_assets/media/b5fc5a2034e5034f477d76a359aa4926.png",
            description: "Cousin de Willem, il travaille dans l'ombre et porte constamment un masque. Il archive toute l'histoire d'Ashera et protège les manuscrits blasphématoires les plus occultes.",
            quote: "La vérité a autant de facettes que de bouches pour la raconter…",
            status: "En vie"
          },
          {
            id: "elena_eclipsium_2",
            name: "Elena Celeste Eclipsium",
            title: "Gouverneur & Matriarche Eclipsium",
            origin: "Pandorienne",
            affiliation: "Le Cercle Azur",
            grade: "Matriarche de la maison",
            door: "Porte 3",
            avatarUrl: "/_assets/media/dfda039423b1f70007b4e7331ed04422.jpg",
            description: "Vraie régente politique de la famille, elle a assuré la survie de la maison face aux intrigues pendant que son mari parcourait Ashera. D'une rigueur glaciale.",
            quote: "Sur l'échiquier de sa famille, elle est la reine capable de traverser 8 cases d'un battement de cils.",
            status: "En vie"
          },
          {
            id: "orion_eclipsium_2",
            name: "Orion Star Eclipsium",
            title: "Directeur du Cercle Azur",
            origin: "Prométhéen",
            affiliation: "Le Cercle Azur",
            grade: "Directeur de guilde / Architecte",
            door: "Porte 3",
            avatarUrl: "/_assets/media/9f6d6869ecdbf62ff0df3e67b27eb941.jpg",
            description: "Fervent dévot de la Déesse-Mère et architecte de talent, il a conçu de nombreuses infrastructures arcaniques du Cercle Azur et d'Esperia.",
            status: "En vie"
          },
          {
            id: "aurore_eclipsium_2",
            name: "Aurore Floyd Eclipsium",
            title: "Comptable Eclipsium",
            origin: "Prométhéenne",
            affiliation: "Le Cercle Azur",
            grade: "Comptable",
            door: "Porte 3",
            avatarUrl: "/_assets/media/b94ce5bbbeeadce210655837bbc4c2ca.png",
            description: "Mathématicienne de génie, elle gère les comptes de sa maison. Elle a fait de nombreux voyages et est une amie proche d'Izena Haveh de Havre-Bleu.",
            quote: "Le bleu du havre me manque déjà…",
            status: "En vie"
          }
        ]
      },
      {
        id: "maison_valdor",
        title: "Maison Valdor",
        description: "Les bienfaiteurs du Voile d'Ivoire",
        content: "La Maison Valdor se démarque par son altruisme. Initialement modeste, elle a gagné son titre de noblesse en s'opposant aux répressions abusives contre le peuple d'Esperia.",
        characters: [
          {
            id: "rias_valdor_2",
            name: "Rias Valdor",
            title: "Tête de la Maison Valdor",
            origin: "Pandorienne",
            affiliation: "Le Voile d'Ivoire",
            grade: "Tête de la Maison / Porte 4",
            avatarUrl: "/_assets/media/8e7a8047add91a5907c3e7adacbcb05e.png",
            description: "Fille de Richard, elle dirige la maison avec douceur et logique. Elle amasse les secrets astronomiques et astrologiques. Ses portes sont ouvertes pour instruire les plus pauvres d'Esperia.",
            quote: "Vous voulez parler d'Histoire ? La Femme ou son Ouvrage ? Dans tous les cas, face à Elle vous ne savez rien. — Richard Valdor",
            status: "En vie"
          },
          {
            id: "marcus_valdor_2",
            name: "Marcus Valdor",
            title: "Chef du Voile d'Ivoire",
            origin: "Prométhéen",
            affiliation: "Le Voile d'Ivoire",
            grade: "Chef de la guilde",
            door: "Porte 3",
            avatarUrl: "/_assets/media/c901dbef845ef5d37fe3003ea9185e73.png",
            description: "Figure paternelle de la guilde transparente. Combattant émérite de l'ordre et de la justice humaine, il s'est illustré en renonçant au trône familial au profit de sa nièce Rias.",
            quote: "Il n'y a personne qui n'exprime plus l'ordre au sein du Voile d'Ivoire autre que Marcus. — Membre du Voile d'Ivoire",
            status: "En vie"
          },
          {
            id: "richard_valdor",
            name: "Richard Valdor",
            title: "Ancien Patriarche Valdor",
            origin: "Pandorien",
            affiliation: "La Maison Valdor",
            description: "Ancien patriarche de la maison, connu pour son engagement social. Il est tombé gravement et étrangement malade, devant céder les rênes à sa fille Rias.",
            quote: "Tout doit se savoir, tout revient aux fiers citoyens. Nous serons leurs défenseurs et porte-parole.",
            status: "Inconnu"
          }
        ]
      },
      {
        id: "temoins",
        title: "Les Témoins",
        description: "Les intermédiaires du haut conseil",
        characters: [
          {
            id: "allaric_gesun",
            name: "Allaric Gesun",
            title: "Témoin de la Garde Pourpre",
            origin: "Sisyphe",
            affiliation: "La Garde Pourpre",
            grade: "Témoin",
            avatarUrl: "/_assets/media/2717de653d8e9aef45de79892e4a2e09.png",
            description: "Il est le stratège, celui qui sanctionne l'erreur et contre les plans. Un combattant d'exception capable de descendre des cieux pour mettre fin aux affrontements les plus brutaux.",
            status: "En vie"
          },
          {
            id: "caelum_isylae",
            name: "Caelum & Isylae II. Solstice",
            title: "Témoins du Cercle Azur",
            origin: "Pandorien",
            affiliation: "Le Cercle Azur",
            grade: "Témoins",
            avatarUrl: "/_assets/media/f9514d93723f912ba3d4abd9b2e3b31f.png",
            description: "Ils représentent le savoir et la puissance magique la plus dévastatrice du Cercle Azur. Des érudits investis d'une mission sacrée.",
            status: "En vie"
          },
          {
            id: "arcadia_reya",
            name: "Arcadia Reya",
            title: "Témoin du Voile d'Ivoire",
            origin: "Sisyphe Clan Yeshou",
            affiliation: "Le Voile d'Ivoire",
            grade: "Témoin",
            avatarUrl: "/_assets/media/b8a255879fdf62277b830be7056f975e.png",
            description: "Elle est venue, et depuis, elle nous est indispensable au sein du Voile d'Ivoire. Gardienne de la morale et exécuteur de la justice s'il le faut.",
            status: "En vie"
          },
          {
            id: "mael_lagarde",
            name: "Maël Lagarde",
            title: "Témoin de l'Œil",
            origin: "Prométhéen",
            affiliation: "L'Œil",
            grade: "Témoin",
            avatarUrl: "/_assets/media/7a16210bbf924f78dd18d646ced9e968.jpg",
            description: "Il ne tolère pas l'échec. C'est le candidat idéal pour l'Œil, la branche de surveillance royale.",
            status: "En vie"
          },
          {
            id: "caleb",
            name: "Caleb",
            title: "Témoin de JAVUS",
            origin: "Pandorien",
            affiliation: "JAVUS",
            grade: "Témoin",
            avatarUrl: "/_assets/media/419dc5c802f98800725c46f1728a6200.png",
            description: "Caleb est un résident d'Esperia. D'une grande discrétion, sa présence n'est que peu requise auprès de la couronne. Plus proche d'un organisme indépendant sans réel attache à la noblesse, JAVUS se caractérise par sa droiture : faire régner la vérité. Caleb est un homme d'une vingtaine d'années à l'allure faiblarde, mais dissimulant une fine musculature lui permettant de distribuer les impressions de la vérité dans toute la basse-ville.",
            quote: "Nous sommes à votre service, et la Voix du peuple continuera de résonner grâce à vous. La Vérité aura raison des ombres qui planent sur notre belle cité.",
            status: "En vie"
          }
        ]
      },
      {
        id: "cercle_azur",
        title: "Membres du Cercle Azur",
        description: "La guilde de la science, de la recherche et du savoir",
        content: "Le Cercle Azur est fondé sur les sciences, la recherche et le savoir. Conservatrice de la connaissance mais aussi gardienne de l’érudisme d'Esperia, ses membres sont considérés comme d’éminents chercheurs, qu'ils soient spécialisés en philosophie ou en astrologie. De précieux savants dont l’esprit habile cache les réponses aux questionnements d’hier et théorise les événements de demain.",
        characters: [
          {
            id: "may_sohun",
            name: "May Sohun",
            title: "Biologiste & Zoologiste",
            origin: "Pandorienne",
            affiliation: "Le Cercle Azur",
            grade: "Mage de rang 3",
            door: "Porte 2",
            avatarUrl: "/_assets/media/0f711323b83dac12ab967f2138b2f546.png",
            description: "Fille et disciple d’Anderson Sohun, May marche droit dans l’héritage de son père en s’imposant comme la biologiste et la zoologiste la plus talentueuse d’Esperia. Véritable encyclopédie vivante, c’est à elle que l’on doit la majorité des connaissances, études et recherches menées ces 15 dernières années. Un regroupement de savoir qu’elle a recensé dans l’œuvre connue sous le nom de Bestiaire.",
            quote: "Pour comprendre et analyser, il est obligatoire de rencontrer et d'observer… Sinon, comment pourriez-vous ne serait-ce que comprendre ce dont je parle quand je vous dis qu'un Kulkrut est un cousin du Phazomite…",
            status: "En vie"
          },
          {
            id: "leon_alurium",
            name: "Léon Alurium",
            title: "Le Monarque Gardien",
            origin: "Inconnue",
            affiliation: "Le Cercle Azur",
            grade: "Mage de rang 3",
            door: "Porte 3",
            avatarUrl: "/_assets/media/fb09220c83a8ad6710dbfde8e5bdfe1b.png",
            description: "Silencieux, celui que les plus éclairés surnomment le monarque veille sur les écrits de la bibliothèque azur avec fermeté et rigueur. Peu bavard, il favorisera toujours une prise de parole psychique à un échange verbal… Donnant une tournure mystique à chacune de ses phrases. Gardien des secrets, il s'avère également être celui chargé de la protection d'Eldren Gates, la seconde bibliothèque protégée par la loi d'un mordant silence.",
            quote: "…",
            status: "En vie"
          }
        ]
      },
      {
        id: "voile_ivoire",
        title: "Membres du Voile d'Ivoire",
        description: "La guilde transparente et protectrice du peuple",
        content: "Le Voile d'Ivoire est la guilde protectrice d'Esperia, agissant directement dans la Basse-Ville pour faire régner la paix sociale et la justice tout en veillant sur l'Histoire de la cité à travers ses registres.",
        characters: [
          {
            id: "hector_swaft",
            name: "Hector Swaft",
            title: "Formateur du Voile d'Ivoire",
            origin: "Sisyphe Senso",
            affiliation: "Le Voile d'Ivoire",
            grade: "Mage de Rang 3",
            door: "Porte 2",
            avatarUrl: "/_assets/media/363f27961453a270900feec8d8f86f7a.png",
            description: "Hector est un mage d'une promotion récente, mais avec ses prouesses et ses faits d'armes déjà très importants, il est capable de diriger sa propre équipe. C'est lui qui accueille les nouvelles recrues après qu'elles ont reçu leur convocation. Il s'occupe de leur donner une chambre et de leur expliquer le fonctionnement du Hub de la guilde, avant de les convier aux rondes habituelles pour leur apprendre le métier.",
            quote: "Euh... Ouais. C'est censé être comme ça normalement. Laisse d'autres gens s'en occuperont.",
            status: "En vie"
          },
          {
            id: "joshua_talner",
            name: "Joshua Talner",
            title: "Régisseur du Centre de l'Histoire",
            origin: "Prométhéen",
            affiliation: "Le Voile d'Ivoire",
            grade: "Mage de Rang 2",
            door: "Porte 3",
            avatarUrl: "/_assets/media/8e1c749e8517f7b4cb1f224844141bd7.png",
            description: "Joshua est le maître du Centre des Registres, la bibliothèque d'Esperia qui compile les faits et gestes de chaque citoyen en temps réel. Sa conscience est elle-même l'encre qui s'écoule pour remplir ces livres magiques, ce qui l'empêche de quitter l'édifice. C'est un homme détestable, désagréable et aigri qui n'apprécie que le silence.",
            quote: "Il est détestable mais indispensable. Nous n'avons pas le choix de le tolérer mais il faut le cogner s'il fait n'importe quoi. — Marcus Valdor",
            status: "En vie"
          },
          {
            id: "andrea_villar",
            name: "Andrea Villar",
            title: "Mentor du Voile d'Ivoire",
            origin: "Sisyphe Senso",
            affiliation: "Le Voile d'Ivoire",
            grade: "Mage de Rang 2",
            door: "Porte 2",
            avatarUrl: "/_assets/media/9d8ac736e10fb0192f2b49f7ddfa25c6.png",
            description: "Une mage expérimentée et chaleureuse issue d'une ancienne promotion. C'est une alliée solide et dévouée. Issue d'une noble famille entachée par des scandales, elle œuvre pour redorer son blason. Sur le champ de bataille, son aspect produit des flammes destructrices de grande envergure.",
            quote: "J'espère que ma compagnie ne fait pas peur, je suis vraiment là pour vous aider ! Mon aspect est juste un peu plus chaud quand je suis contente de me battre.",
            status: "En vie"
          },
          {
            id: "hansel",
            name: "Hansel",
            title: "Second des Registres",
            origin: "Sisyphe Yeshou",
            affiliation: "Le Voile d'Ivoire",
            grade: "Mage de Rang 2",
            door: "Porte 2",
            avatarUrl: "/_assets/media/42691712e4263150815610b1b1c9c28a.png",
            description: "Second de Joshua dans le Centre des Registres, il est capable de réaliser presque le même travail méticuleux que son supérieur. C'est un rat de bibliothèque de petite taille, mais c'est également un redoutable combattant en cas de bagarre.",
            quote: "Hansel ? J'en ai marre qu'il traîne dans mes pattes, surtout quand il ne fait que lire des bouquins. — Joshua Talner",
            status: "En vie"
          },
          {
            id: "lianna_voss",
            name: "Lianna Voss",
            title: "Éclaireuse du Voile d'Ivoire",
            origin: "Pandorienne",
            affiliation: "Le Voile d'Ivoire",
            grade: "Mage de Rang 2",
            avatarUrl: "/_assets/media/95e4b44d058592d94ed4350f0db56d36.png",
            description: "Lianna est une figure très appréciée au sein de la guilde, connue pour sa joie de vivre, sa convivialité et ses talents d'éclaireuse dans les bas-fonds d'Esperia. Elle est souvent présente lors des événements communautaires et des missions de reconnaissance délicates.",
            quote: "Il n'y a pas de mauvaise beuverie quand Lianna est là. — Boucher du Quartier Est",
            status: "En vie"
          }
        ]
      },
      {
        id: "garde_pourpre",
        title: "Membres de la Garde Pourpre",
        description: "La force militaire et gardienne des traditions d'Esperia",
        content: "La Garde Pourpre est l'étendard de combat de la Couronne, spécialisée dans la protection du sang royal et la répression des actes irréguliers dans la cité.",
        characters: [
          {
            id: "sravel_inzu",
            name: "Sravel Inzu",
            title: "Instructeur de la Garde Pourpre",
            origin: "Sisyphe Senso",
            affiliation: "La Garde Pourpre",
            grade: "Mage de Rang 3",
            door: "Porte 3",
            avatarUrl: "/_assets/media/a296f82aaea61ffa60b94c029b5df0c2.png",
            description: "Inzu est un membre important de la Garde Pourpre, chargé de former et d’accueillir les nouvelles recrues selon un rituel bien à lui. Contrairement à l’image stricte qu’il renvoie, Inzu est un personnage certes haut en couleur mais dont la pédagogie et l’éthique raisonnable ont à de nombreuses reprises fait leurs preuves au sein de la Garde. Ses hauts faits sont tenus secrets, mais sa légitimité est incontestable.",
            quote: "Il y en a qui comprendront tout de suite ce que l’on attend d’eux ici, d’autres auront besoin de plus de temps et de manger un mur pour saisir toute la profondeur de leur allégeance.",
            status: "En vie"
          },
          {
            id: "oley_frantz",
            name: "Frantz Oley",
            title: "Adjoint de la Garde Pourpre",
            origin: "Prométhéen",
            affiliation: "La Garde Pourpre",
            grade: "Mage de Rang 3",
            door: "Porte 2",
            avatarUrl: "/_assets/media/9cc99487ee57aba731b968341ceb6309.jpg",
            description: "Occupant le rang immédiatement inférieur à celui d'Inzu, Frantz Oley est d'une discipline et d'une loyauté inflexibles envers le trône. Ancien membre du Voile d'Ivoire, son passage violent de la Porte II a profondément marqué son corps et son esprit. Il déteste la paperasse et les responsabilités mais fait preuve d'un professionnalisme sans faille en mission.",
            quote: "Frantz est... un être humain fatigué. Mais sa loyauté est infaillible. Il fuit les responsabilités comme la Ronge-Gorge mais le travail est toujours bien exécuté. — Sravel Inzu",
            status: "En vie"
          }
        ]
      },
      {
        id: "sans_guildes",
        title: "Les Sans Guildes & Indépendants",
        description: "Les mages libres d'Esperia",
        content: "Cette section rassemble les mages qui ont choisi de ne pas s'affilier aux trois grandes guildes de la cité. Autonomes et libres de leurs mouvements, ils arpentent la cité ou Ashera selon leurs propres conditions.",
        characters: []
      }
    ]
  },
  {
    id: "mythes_legendes",
    title: "Mythes & Légendes",
    subtitle: "Les croyances et récits antiques",
    description: "Explorez les récits religieux, la genèse d'Ashera, et les figures qui hantent ou inspirent les mages de la cité d'or.",
    subsections: [
      {
        id: "deesse_mere",
        title: "La Déesse-Mère & ses Nephilims",
        content: "Genèse d'Ashera, c'est bien l'éveil de la toute-puissante Déesse-Mère (Ifrit) qui va chasser les ténèbres du Grand Vide omniprésent. Dans sa brise créatrice, Ifrit donna naissance non seulement à ses trois enfants (Prométhée, Pandore et Sisyphe) mais aussi à cinq créatures mythiques : Les Nephilims. Ces créatures sont l'origine des vies non-humaines, portant en elles la souche des mammifères, des oiseaux, de la faune marine, ou même des insectes et autres rampants.\n\nCette fratrie de cinq compte :\n- **Noruki** : Nephilim des flots et des tempêtes, mère de la faune marine.\n- **Iryion** : Nephilim du pouvoir et de l'ambition, patriarche des reptiles et des dragons.\n- **Tatyova** : Nephilim de la vie et de la jouvence, protectrice des mammifères.\n- **L'Éducateur** : Nephilim des connaissances et de la liberté, éducateur des oiseaux sous toutes leurs formes.\n- **Xylik** : Nephilim des secrets et de la curiosité, la tisseuse pondant insectes et rampants.\n\nCette fratrie est vénérée et accorde ses bénédictions au clan Yeshou. Ils sont les protecteurs d'Esperia, mais avant tout, ils sont les cœurs d'Ashera, indispensables à son bon fonctionnement.",
        characters: [
          {
            id: "deesse_mere_ifrit",
            name: "Ifrit (La Déesse-Mère)",
            title: "Créatrice d'Ashera",
            description: "La divinité suprême qui s'éveilla dans le Grand Vide pour amener la lumière, la vie, et la magie sur Ashera.",
            avatarUrl: "/_assets/media/b7d9a9f219349cec2147c4bd675b7d8b.png",
            status: "Céleste"
          }
        ]
      },
      {
        id: "grand_vide",
        title: "Le Grand Vide & ses Abominations",
        content: "Des légendes aux faits, un ennemi ancien de la Vie elle-même ne cesse de rôder autour de la capitale des mages : on le nomme le Grand Vide. Il est le Père d'Abominations, rôdant aux quatre coins du monde, porteuses de divers maux et destructrices de civilisations. Nombres d'entre elles ont déjà été vaincues, non sans emporter des vies dans leur sillage. Les informations à leur égard s'effacent régulièrement de la mémoire des citoyens, qui paient le prix de cette ignorance quand le drame survient. Car c'est ainsi que le Grand Vide existe, à travers les Espériens, le peuple élu de la Déesse-Mère. Prononcer son nom est une injure, le louer est un crime et le prier est la plus grande des hérésies."
      },
      {
        id: "icare",
        title: "Icare, le Déchu",
        content: "La légende d'Icare narre son avidité et son immense besoin de reconnaissance, surtout aux yeux de son divin père. Contraignant son corps aux entraînements les plus ignobles dans l'objectif d'attirer l'attention du dieu solaire, Icare a fini par sombrer et propager son mal sur le peuple, en donnant naissance à une espèce maudite, portant désormais son nom. Le récit exact de sa métamorphose n'est jamais complet ou semble incorrect, délirant, mais le mal causé à ses enfants, comme à ceux de Pandore et Sisyphe, est encore aujourd'hui vu comme le plus grand drame de l'histoire de la cité d'or. La transformation en icare est la plus grande peur de nombreux mages et le cauchemar des puissants. Elle symbolise la fin, le vide, l'absence de but, le péril de l'âme.",
        characters: [
          {
            id: "icare_dechu",
            name: "Icare",
            title: "Le Déchu",
            description: "Le premier mage à sombrer dans le vide par ambition, engendrant l'espèce maudite des Icares.",
            avatarUrl: "/_assets/media/14d71c7791d6b8735bd84d58e6b4698c.png",
            status: "Démoniaque"
          }
        ]
      },
      {
        id: "uriel",
        title: "Uriel, le Prince Azur",
        content: "Inventeur de génie, Pandorien maîtrisant à la perfection l'air, Uriel est connu sous le titre de Prince Azur. Ayant affronté et vaincu deux abominations envoyées par le grand vide, ses exploits se comptent par milliers ; mais sa force n'était pas son seul atout. Inventeur hors pair, il a conçu de fabuleux artefacts pour protéger Esperia.",
        characters: [
          {
            id: "uriel_prince",
            name: "Uriel",
            title: "Le Prince Azur",
            description: "Mage légendaire et inventeur de génie, vainqueur des abominations du Vide.",
            avatarUrl: "/_assets/media/b4afb5714f3c2dab2dcab9e16ddd805a.gif",
            status: "Légendaire"
          }
        ]
      }
    ]
  },
  {
    id: "bestiaire",
    title: "Bestiaire",
    subtitle: "Faune & Flore d'Ashera",
    description: "Le catalogue scientifique de la faune et de la flore d'Ashera compilé par May Sohun.",
    content: "Le Bestiaire d'Ashera est une œuvre scientifique monumentale initiée par Anderson Sohun et complétée par sa fille May Sohun. Il recense toutes les espèces magiques, mammifères, reptiles, abominations et créatures nées des bénédictions des Nephilims. Il contient les informations de notre faune et de notre flore sauvage, bien que la plupart des mages refusent d'en lire les chapitres avant d'avoir fait leurs premiers pas sur le terrain."
  },
  {
    id: "trace_historique",
    title: "Trace Historique",
    subtitle: "Les Chroniques d'Esperia",
    description: "Suivez la chronologie des événements majeurs, quêtes, et arcs scénaristiques qui façonnent l'histoire d'Esperia.",
    subsections: [
      {
        id: "arc_0",
        title: "ARC 0 : Les Nouvelles Lumières d'Esperia",
        content: "Esperia est une cité qui a tant à offrir. Pourtant, son Roi, notre Roi, a décidé d'ouvrir ses portes au reste d'Ashera. Ses paroles, empreintes de sagesse et sollicitant les nouveaux Mages de la Cour, ont abouti à ce que chacun puisse trouver sa place. Au sein des trois guildes, les événements se sont enchaînés afin d'accueillir les nouvelles recrues :\n\n- **Au Cercle Azur** : Les Éclairés se sont adonnés à résoudre des énigmes, faisant flancher leur morale et leur logique au gré de la découverte des différents étages de leur QG.\n\n- **Au Voile d'Ivoire** : C'est après un repas de fête que les nouvelles recrues ont pu mesurer l'ampleur de leurs occupations et missions au sein de la bannière d'Ivoire, aidant les citoyens d'Esperia.\n\n- **A la Garde Pourpre** : Sous le joug d'un entremetteur, les nouvelles recrues ont pu mesurer toute l'étendue de leurs obligations, mêlant morale et affrontement.\n\n- **Les Sans Guilde** : Se sont offusqués ou non de leur liberté nouvelle. Certains ne peuvent que se complaire de cette situation, pour d'autres, il s'agit d'un abandon.\n\nEt à l'issue de cela, lorsque tous eurent trouvé leur marque, la venue de l'Ashen fut annoncée : le plus grand Mage de son temps était rentré entre les murs de la cité et s'apprêtait à donner un discours d'accueil d'exception."
      },
      {
        id: "arc_1",
        title: "ARC 1 : Ténèbres sur la Basse-Ville",
        description: "Les intrigues de l'ombre au Conseil des Marchands",
        content: "La tension monte dans la Basse-Ville alors qu'un complot impliquant une nouvelle drogue (la ROD) et des assassinats politiques menace la cité.",
        subsections: [
          {
            id: "banquet_etripeur",
            title: "Banquet de l’Étripeur & Couper le Mal à la Racine",
            content: "Sous l'ordre de l'Ashen, mage le plus puissant de la Cour, Brutus Redwitch de la Garde Pourpre, Tsukishiro Akane du Voile d'Ivoire, Eveus Asior du Cercle Azur et Kalès Septimus envoyé de JAVUS, se retrouvent conviés à un banquet organisé par Oscar, dit l'Étripeur, dirigeant du Conseil des Marchands, afin de négocier la paix sociale, mais la réunion tourne à l'affrontement politique de grande envergure. Le Nord pose sa condition : que les mages lui remettent une relique conservée par le Cercle Azur, connue sous le nom de 'Le Mot'."
          },
          {
            id: "galerie_prince_lunaire",
            title: "La Galerie du Prince Lunaire",
            content: "Le mystérieux Chronos convie quatre mages de la Cour (Nah Jasp, Isis Faerieth, Loyis Delacroix et Velka Valcyrion) dans sa galerie. Ils y traversent ses murs et se nourrissent de sa vérité. Les pièces se déplacent lentement sur l'échiquier d'Ashera, sous le regard amusé de Chronos, annonçant l'avènement prochain du Prince Lunaire aux sombres apparats."
          },
          {
            id: "soupcons_morbides",
            title: "Soupçons Morbides",
            content: "Suite à l’assassinat d’Albrech du conseil des marchands, le marché sombre de la joaillerie a été récupéré de justesse par Sha’al Langster avant qu’il ne s’effondre. Cette affaire l’arrange grandement, elle qui convoite la richesse sous ses formes les plus matérialistes possibles. Une rumeur court qu’elle dissimulait des preuves cruciales dans un de ses établissements de plaisir, la Maison de Velours.\n\nLewis Phoebe Ashbourne, Red Roadman, Adelina del Fuego, Nerith Aya, Nyx et Lewis Bamer s’y infiltrent sous de faux déguisements pour passer des entretiens avec la Régente elle-même tandis que d'autres fouillent son bureau.\n\n**Découvertes cruciales :**\n- Une dague richement décorée et un nombre faramineux de lettres d'amour signées 'A'.\n- Des livres de compte révélant que les employés de Sha'al sont soumis à des dettes exponentielles.\n- La rencontre avec la Distra, la milice privée féroce de la Matriarche."
          },
          {
            id: "rouge_revelera",
            title: "Ce que le Rouge révélera",
            content: "Les Mages de la Cour ont été convoqués pour prendre en filature la Régente de la Basse-Ville suite à l’interception d’une communication avec l'Étripeur. La Garde Pourpre dépêche Allaric Gesun pour encadrer l'équipe. Après une filature complexe, l'équipe se sépare et affronte la Distra et les mercenaires de Sha'al Langster dans l'Arène de Sang. Un combat dantesque s'engage. Les marchands offrent un marché : la servitude ou la mort. Au moment critique où la vie de Ren Urugaki est menacée, Allaric Gesun descend des cieux pour évacuer les mages de l'Arène."
          },
          {
            id: "rage_sang",
            title: "De la Rage et du Sang & Premier Contact",
            content: "Le quartier Ouest, condamné par la pourriture et la drogue ROD, est le théâtre d'une enquête d'urgence des douanes. La nuit suivante, une unité de l'Étendard Écarlate est retrouvée brisée au quai de la Balade du Pèlerin. Aryana Erhendil, Isis Faerith et Nah Jasp enquêtent à 'La Belette à deux queues' où ils découvrent une nouvelle drogue dévastatrice : la ROD. Theodore Mest, Mage aîné d'une immense gentillesse, est forcé d'utiliser l'Arcane Interdite face aux ravisseurs pour sauver ses élèves, entamant sa transformation tragique en Icare. Il est ensuite abattu avec respect par Reya Arcadia."
          }
        ]
      }
    ]
  },
  {
    id: "galerie_ashera",
    title: "Galerie d'Ashera",
    subtitle: "Artworks, Memes et Souvenirs",
    description: "Une collection d'illustrations, de cartes de tarot, de mèmes et d'œuvres communautaires créées par et pour la communauté d'Ashera RP.",
    subsections: [
      {
        id: "tarot_cards",
        title: "Cartes de Tarot",
        description: "Les destins majeurs dessinés sous forme d'arcanes mystiques.",
        characters: [
          {
            id: "tarot_le_soleil",
            name: "L'Arcane du Soleil",
            description: "Représente Lucius Ier et la prospérité royale d'Esperia.",
            avatarUrl: "/_assets/media/b97cce2eabe6836531b55b33fc77a249.png"
          },
          {
            id: "tarot_la_lune",
            name: "L'Arcane de la Lune",
            description: "Représente les secrets d'ombre et de papier de la maison Eclipsium.",
            avatarUrl: "/_assets/media/4385b04c1548f194105e496b97951765.png"
          },
          {
            id: "tarot_le_monde",
            name: "L'Arcane du Monde",
            description: "La représentation de l'équilibre fragile d'Ashera.",
            avatarUrl: "/_assets/media/ac314981fb6cf3882b0644ae87fa94d9.png"
          },
          {
            id: "tarot_le_chariot",
            name: "L'Arcane du Chariot",
            description: "La marche en avant inexorable des bannières mages d'Esperia.",
            avatarUrl: "/_assets/media/cb8a01e77a4c6bd9af8b772cbc63b36e.png"
          }
        ]
      },
      {
        id: "illustrations",
        title: "Illustrations de la Communauté",
        content: "Découvrez les dessins d'exception illustrant les personnages de nos joueurs lors de leurs aventures.",
        characters: [
          {
            id: "illustration_danse",
            name: "Apprendre à danser",
            description: "Illustration poétique par Yûu représentant Katelyn Hoffman et Sulyvan Vosk.",
            avatarUrl: "/_assets/media/80b92962de42668b2c528f916ddc16ad.png"
          },
          {
            id: "illustration_abime",
            name: "Au bord de l'Abîme",
            description: "Illustration par Yûu représentant Katelyn Hoffmann et Aryana Erhendil.",
            avatarUrl: "/_assets/media/85e03e97548fe24fb1868652e9d6cb19.png"
          },
          {
            id: "illustration_merle",
            name: "Le Merle & le Cygne",
            description: "Illustration par Yûu représentant Yûu et Hussh.",
            avatarUrl: "/_assets/media/9f6d6869ecdbf62ff0df3e67b27eb941.jpg"
          },
          {
            id: "illustration_sanctuaire",
            name: "Le Sanctuaire",
            description: "Illustration d'ambiance du temple des Eclipsiums.",
            avatarUrl: "/_assets/media/d52fa7f28bbed32da7ed7d7ce7fd9ec4.jpg"
          }
        ]
      },
      {
        id: "videos",
        title: "Vidéos & Fan-Edits",
        description: "Montages et animations créés pour célébrer les moments forts d'Ashera RP.",
        characters: [
          {
            id: "video_1",
            name: "Le Prince de Sang",
            description: "Une cinématique dynamique présentant Alexandre Leonhart et ses duels d'aspect.",
            avatarUrl: "/_assets/media/7b547be10af9fe443c1af0a0b59d49ad.mp4"
          }
        ]
      },
      {
        id: "memes",
        title: "Mèmes & Souvenirs",
        description: "Une collection d'artworks humoristiques et drôles créés par et pour la communauté d'Ashera RP.",
        characters: [
          {
            id: "meme_1",
            name: "Mage en formation",
            description: "Quand un apprenti essaie de manipuler l'aspect de feu sans surveillance.",
            avatarUrl: "/_assets/media/1e2d11928605bd848ce77b4458e365b4.png"
          },
          {
            id: "meme_2",
            name: "Le tablier de Marcus",
            description: "Le redoutable chef du Voile d'Ivoire face à sa nièce Rias.",
            avatarUrl: "/_assets/media/7d3ec2c3644bbee5ec0c0e9c76fdaa86.png"
          },
          {
            id: "meme_3",
            name: "L'esquive de Fiona",
            description: "Quand les gardes d'élite de l'Œil essaient encore une fois de suivre la princesse.",
            avatarUrl: "/_assets/media/8a4cd2bdd98c5365ba3c900cdd33a83c.png"
          }
        ]
      }
    ]
  }
];
