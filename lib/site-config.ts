export const siteConfig = {
  name: "AZELIE",
  tagline: "L'ingénierie numérique sénégalaise, à l'échelle du monde.",
  description:
    "AZELIE conçoit des produits Web, Mobile et IA pour les entreprises tout en formant les talents de demain aux métiers du numérique et du digital.",
  url: "https://azeliedigital.jonilink.com",
  email: "azeliedigital@gmail.com",
  phone: "+221 78 951 52 68",
  address: "Dakar, Sénégal — Plateau",
  locality: "Dakar",
  region: "Dakar",
  country: "SN",
  socials: {
    linkedin: "https://www.linkedin.com/company/azelie/",
    twitter: "https://x.com/azelie",
    instagram: "https://instagram.com/azelie",
    github: "https://github.com/azelie",
  },
} as const;

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Produits", href: "/produits" },
  { label: "Projets", href: "/projets" },
  { label: "Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
] as const;

export const secondaryLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
] as const;

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon:
    | "code"
    | "smartphone"
    | "brain"
    | "workflow"
    | "sparkles"
    | "layers"
    | "graduation"
    | "cpu";
  image: string;
  features: string[];
  /** Phrase courte pour le hero de la page service dédiée. */
  tagline: string;
  /** Qui, quoi, pour qui : présentation courte du service (section 1). */
  problem: string;
  /** Cas d'usage concrets (section "Comment nous pouvons vous aider"). */
  useCases: string[];
  /** Clés vers TECH_CATALOG : catégories d'outils réellement pertinentes pour ce service. */
  techCategories: string[];
  /** Section "Pourquoi AZELIE ?" pour ce service. */
  whyAzelie: string;
  /** Slugs des projets réels (lib/site-config.ts > projects) liés à ce service. */
  relatedProjectSlugs: string[];
  /** FAQ propre au service, uniquement quand elle apporte une vraie valeur. */
  faq?: FaqItem[];
  seo: { title: string; description: string };
};

/**
 * Catalogue des technologies réellement utilisées par AZELIE (produits internes,
 * portfolio des fondateurs). Les services y piochent uniquement les catégories
 * pertinentes plutôt que d'afficher une liste figée pour tous les projets.
 */
export const TECH_CATALOG: Record<string, string[]> = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Laravel"],
  Mobile: ["React Native"],
  "Bases de données": ["PostgreSQL", "Prisma"],
  Automatisation: ["n8n", "Intégrations API"],
  "Data & IA": ["Python", "IA générative / LLM", "Analyse de données"],
  "UI/UX": ["Figma"],
};

/** Étapes génériques de la méthode AZELIE, affichées sur chaque page service. */
export const serviceProcessSteps = [
  {
    title: "Comprendre le besoin",
    description:
      "Nous cadrons votre besoin réel, vos contraintes et vos objectifs business avant toute proposition technique.",
  },
  {
    title: "Concevoir la solution",
    description:
      "Architecture, parcours et maquettes : nous posons les fondations du projet avant d'écrire la moindre ligne de code.",
  },
  {
    title: "Développer",
    description:
      "Développement itératif avec points d'avancement réguliers, ou configuration des outils selon la nature du projet.",
  },
  {
    title: "Tester",
    description:
      "Vérification fonctionnelle, technique et de sécurité avant toute mise en production.",
  },
  {
    title: "Déployer",
    description:
      "Mise en ligne ou en production maîtrisée, avec un accompagnement au changement si nécessaire.",
  },
  {
    title: "Accompagnement",
    description:
      "Maintenance, évolutions et support après la livraison, pour que la solution continue de créer de la valeur.",
  },
] as const;

export const services: ServiceItem[] = [
  {
    slug: "developpement-web",
    title: "Développement Web",
    short: "Sites et applications web sur mesure, rapides et évolutifs.",
    description:
      "Nous concevons des plateformes web performantes avec Next.js et les meilleures pratiques modernes : vitrines premium, applications métiers, portails clients et back-offices.",
    icon: "code",
    image: "/images/dev.avif",
    features: [
      "Architecture Next.js / TypeScript",
      "SEO technique & performance",
      "Interfaces sur mesure, sans template",
      "Intégration API & back-office",
    ],
    tagline: "Un site ou une application web qui reflète votre exigence.",
    problem:
      "Beaucoup d'entreprises se retrouvent freinées par un site vitrine générique, lent ou impossible à faire évoluer. AZELIE intervient lorsqu'il faut construire — ou reconstruire — une présence web rapide, sur mesure et pensée pour durer : site vitrine premium, plateforme métier, portail client ou back-office.",
    useCases: [
      "Site vitrine premium pour une entreprise ou une marque",
      "Plateforme métier ou portail client sur mesure",
      "Back-office de gestion pour une équipe interne",
      "Refonte d'un site existant devenu lent ou obsolète",
      "Intégration d'API tierces (paiement, CRM, outils métier)",
    ],
    techCategories: ["Frontend", "Backend", "Bases de données"],
    whyAzelie:
      "Chez AZELIE, chaque site est développé sur mesure avec Next.js, sans template ni surcouche inutile : performance, SEO technique et évolutivité sont pensés dès la conception, pas ajoutés après coup.",
    relatedProjectSlugs: ["azelie-edu", "jonilink"],
    faq: [
      {
        question: "Travaillez-vous avec Next.js pour tous vos projets web ?",
        answer:
          "Nous utilisons Next.js comme socle principal pour sa performance et son SEO technique, en l'adaptant aux contraintes spécifiques de chaque projet.",
      },
      {
        question: "Le site sera-t-il facile à faire évoluer ensuite ?",
        answer:
          "Oui. Nous livrons une architecture claire et documentée, pensée pour que votre équipe ou la nôtre puisse la faire évoluer sans tout reconstruire.",
      },
    ],
    seo: {
      title: "Développement web sur mesure au Sénégal",
      description:
        "AZELIE conçoit des sites et applications web sur mesure avec Next.js : vitrines premium, plateformes métier et back-offices rapides, sécurisés et optimisés pour le référencement.",
    },
  },
  {
    slug: "developpement-mobile",
    title: "Développement Mobile",
    short: "Applications iOS & Android natives et cross-platform.",
    description:
      "Des applications mobiles fluides et robustes, pensées pour l'usage réel de vos clients, avec une expérience cohérente sur iOS et Android.",
    icon: "smartphone",
    image:
      "https://images.unsplash.com/photo-1748801584058-29faa47242ee?w=1200&q=80",
    features: [
      "React Native & natif",
      "UX mobile-first",
      "Notifications & paiements",
      "Publication App Store / Play Store",
    ],
    tagline: "Une application mobile fluide, du premier prototype au store.",
    problem:
      "Une application mobile mal conçue coûte cher en support et en désinstallations. AZELIE intervient lorsqu'une entreprise a besoin d'une app fiable, rapide et cohérente entre iOS et Android — pour ses clients finaux ou pour ses équipes terrain.",
    useCases: [
      "Application mobile pour clients finaux (réservation, mise en relation, e-commerce)",
      "Application interne pour équipes terrain",
      "Notifications push et parcours utilisateur mobile",
      "Publication et suivi sur App Store / Play Store",
    ],
    techCategories: ["Mobile", "Frontend", "Backend"],
    whyAzelie:
      "Nous concevons chaque application mobile-first, en priorisant la fluidité réelle d'usage plutôt que la simple liste de fonctionnalités, et nous accompagnons la publication jusqu'aux stores.",
    relatedProjectSlugs: [],
    seo: {
      title: "Développement d'applications mobiles au Sénégal",
      description:
        "AZELIE développe des applications mobiles iOS et Android fluides et robustes, de la conception UX à la publication sur les stores.",
    },
  },
  {
    slug: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    short: "Des IA appliquées à vos besoins métiers réels.",
    description:
      "Chatbots, assistants métiers, analyse de données et automatisation intelligente : nous intégrons l'IA là où elle crée une valeur mesurable.",
    icon: "brain",
    image: "/images/IA.jpeg",
    features: [
      "Assistants IA sur mesure",
      "Automatisation de processus",
      "Analyse & extraction de données",
      "Intégration LLM sécurisée",
    ],
    tagline: "L'intelligence artificielle là où elle crée une vraie valeur.",
    problem:
      "Beaucoup d'entreprises veulent « faire de l'IA » sans savoir où elle apporterait un gain réel. AZELIE intervient pour identifier les cas d'usage concrets — support client, extraction de documents, analyse de données — et les intégrer de façon sécurisée dans vos outils existants.",
    useCases: [
      "Assistant IA pour le support client",
      "Extraction automatique de données depuis des documents",
      "Analyse et visualisation de données métier",
      "Automatisation intelligente de tâches à faible valeur ajoutée",
      "Intégration sécurisée d'un modèle de langage (LLM) dans un outil existant",
    ],
    techCategories: ["Data & IA", "Automatisation"],
    whyAzelie:
      "Nous n'intégrons l'IA que là où elle a un impact mesurable sur votre activité, avec une attention particulière à la sécurité des données et à l'intégration réelle dans vos process métier.",
    relatedProjectSlugs: ["automatisations-internes"],
    faq: [
      {
        question: "Faut-il déjà avoir des données prêtes pour démarrer ?",
        answer:
          "Non. Nous commençons souvent par un audit de vos données et outils existants pour identifier le cas d'usage le plus pertinent avant toute mise en œuvre.",
      },
    ],
    seo: {
      title: "Intelligence artificielle appliquée pour entreprises",
      description:
        "AZELIE conçoit des solutions d'intelligence artificielle appliquées aux besoins métiers réels : assistants, automatisation intelligente et extraction de données.",
    },
  },
  {
    slug: "automatisation",
    title: "Automatisation",
    short: "Éliminez les tâches répétitives, gagnez du temps.",
    description:
      "Nous automatisons vos flux internes — facturation, reporting, synchronisation d'outils — pour libérer vos équipes des tâches à faible valeur.",
    icon: "workflow",
    image: "/images/automatisation.avif",
    features: [
      "Automatisation des workflows",
      "Intégrations entre outils métiers",
      "Reporting automatisé",
      "Réduction des erreurs manuelles",
    ],
    tagline: "Moins de tâches répétitives, plus de temps pour l'essentiel.",
    problem:
      "Facturation manuelle, ressaisie entre outils, reporting fait à la main : ces tâches répétitives coûtent du temps et génèrent des erreurs. AZELIE intervient pour automatiser ces flux internes et connecter vos outils métiers entre eux.",
    useCases: [
      "Automatisation de tâches répétitives (saisie, classement, notifications)",
      "Automatisation de processus métier de bout en bout",
      "Connexion entre plusieurs outils (CRM, tableur, messagerie, stockage)",
      "Synchronisation automatique de données entre systèmes",
      "Génération automatique de rapports et tableaux de bord",
      "Traitement automatique de documents (factures, formulaires)",
    ],
    techCategories: ["Automatisation", "Backend"],
    whyAzelie:
      "Nous concevons des automatisations robustes et documentées, construites autour de vos outils existants plutôt que de vous imposer d'en changer.",
    relatedProjectSlugs: ["automatisations-internes"],
    faq: [
      {
        question: "Quels types de tâches peuvent être automatisées ?",
        answer:
          "Principalement les flux répétitifs et à faible valeur ajoutée : synchronisation d'outils, traitement de documents, génération de rapports, notifications. Nous évaluons ensemble ce qui est réellement pertinent à automatiser.",
      },
    ],
    seo: {
      title: "Automatisation des processus d'entreprise au Sénégal",
      description:
        "AZELIE automatise les flux internes des entreprises — facturation, reporting, intégrations d'outils — pour réduire les tâches répétitives et les erreurs manuelles.",
    },
  },
  {
    slug: "transformation-digitale",
    title: "Transformation Digitale",
    short: "Un accompagnement stratégique pour votre virage numérique.",
    description:
      "Audit, feuille de route et exécution : nous accompagnons les organisations dans leur passage au numérique, de la stratégie à la mise en œuvre.",
    icon: "sparkles",
    image: "/images/TransformationDigital.avif",
    features: [
      "Audit digital & stratégie",
      "Modernisation des outils internes",
      "Conduite du changement",
      "Formation des équipes",
    ],
    tagline: "Un accompagnement stratégique pour votre virage numérique.",
    problem:
      "Digitaliser une organisation ne se résume pas à acheter un nouvel outil. AZELIE intervient lorsqu'une entreprise a besoin d'une feuille de route claire pour moderniser ses outils internes et accompagner ses équipes dans le changement.",
    useCases: [
      "Audit des outils et process numériques existants",
      "Feuille de route de digitalisation priorisée",
      "Modernisation d'outils internes vieillissants",
      "Accompagnement des équipes au changement d'outils",
    ],
    techCategories: ["Backend", "Automatisation", "Data & IA"],
    whyAzelie:
      "Nous combinons audit stratégique et exécution technique concrète, pour que la transformation digitale se traduise réellement en outils utilisés au quotidien, pas seulement en recommandations.",
    relatedProjectSlugs: [],
    seo: {
      title: "Transformation digitale des entreprises au Sénégal",
      description:
        "AZELIE accompagne les organisations sénégalaises dans leur transformation digitale : audit, feuille de route et modernisation des outils internes.",
    },
  },
  {
    slug: "developpement-saas",
    title: "Développement SaaS",
    short: "De l'idée au produit SaaS prêt à scaler.",
    description:
      "Nous construisons des produits SaaS complets — architecture multi-tenant, facturation, sécurité — pensés pour croître avec vos utilisateurs.",
    icon: "layers",
    image: "/images/DevSaas.avif",
    features: [
      "Architecture multi-tenant",
      "Facturation & abonnements",
      "Sécurité & scalabilité",
      "MVP à mise à l'échelle",
    ],
    tagline: "De l'idée au produit SaaS prêt à scaler.",
    problem:
      "Lancer un produit SaaS soulève des questions d'architecture, de facturation et de sécurité dès les premiers utilisateurs. AZELIE intervient pour construire un produit SaaS complet, pensé pour croître sans tout reconstruire à chaque palier.",
    useCases: [
      "MVP SaaS testable auprès de vrais utilisateurs",
      "Architecture multi-tenant pour plusieurs organisations clientes",
      "Mise en place de la facturation et des abonnements",
      "Mise à l'échelle d'un produit existant qui a trouvé son marché",
    ],
    techCategories: ["Frontend", "Backend", "Bases de données"],
    whyAzelie:
      "Nous avons développé nos propres produits SaaS (AzelieEdu, JoniLink), nous savons donc concrètement ce qu'implique de faire grandir un produit multi-utilisateurs dans la durée.",
    relatedProjectSlugs: ["azelie-edu", "jonilink"],
    faq: [
      {
        question: "Pouvez-vous partir d'une simple idée sans spécifications ?",
        answer:
          "Oui. Nous cadrons d'abord la fonctionnalité cœur de votre produit avant de concevoir l'architecture, pour livrer un MVP testable rapidement plutôt qu'un produit surdimensionné.",
      },
    ],
    seo: {
      title: "Développement de produits SaaS au Sénégal",
      description:
        "AZELIE conçoit et développe des produits SaaS complets — architecture multi-tenant, facturation, sécurité — du MVP à la mise à l'échelle.",
    },
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Des interfaces pensées pour convertir et fidéliser.",
    description:
      "Recherche utilisateur, wireframes, design system et interfaces finales : chaque écran est pensé pour l'usage réel de vos utilisateurs.",
    icon: "cpu",
    image: "/images/UXDESIGN.avif",
    features: [
      "Recherche & parcours utilisateur",
      "Design system sur mesure",
      "Prototypage haute-fidélité",
      "Tests d'utilisabilité",
    ],
    tagline: "Des interfaces pensées pour convertir et fidéliser.",
    problem:
      "Une interface confuse fait fuir les utilisateurs, même quand le produit derrière est solide. AZELIE intervient pour concevoir des parcours clairs et des interfaces cohérentes, appuyées sur un vrai design system plutôt que sur des écrans isolés.",
    useCases: [
      "Recherche utilisateur et définition des parcours",
      "Wireframes et maquettes haute-fidélité",
      "Design system réutilisable pour un produit qui grandit",
      "Refonte d'une interface existante peu claire",
      "Tests d'utilisabilité avant développement",
    ],
    techCategories: ["UI/UX", "Frontend"],
    whyAzelie:
      "Nous concevons chaque interface en lien direct avec le développement qui suivra, pour éviter l'écart classique entre une maquette séduisante et un produit livré différent.",
    relatedProjectSlugs: ["identite-visuelle-azelie"],
    seo: {
      title: "Design UI/UX au Sénégal",
      description:
        "AZELIE conçoit des interfaces UI/UX sur mesure : recherche utilisateur, design system et prototypage haute-fidélité pour des produits digitaux clairs et efficaces.",
    },
  },
  {
    slug: "formation",
    title: "Formation",
    short: "Montez en compétence vos équipes techniques.",
    description:
      "Des formations pratiques en développement, IA et outils digitaux, adaptées au niveau et aux objectifs de vos équipes.",
    icon: "graduation",
    image: "/images/Formations.avif",
    features: [
      "Formations développement web/mobile",
      "Initiation à l'IA appliquée",
      "Ateliers pratiques en entreprise",
      "Parcours sur mesure",
    ],
    tagline: "Montez en compétence vos équipes techniques.",
    problem:
      "Recruter des profils techniques est difficile et long. AZELIE intervient pour former vos équipes existantes — développement, IA appliquée, outils digitaux — avec des formations pratiques adaptées à leur niveau réel.",
    useCases: [
      "Initiation au développement web/mobile pour une équipe",
      "Sensibilisation et prise en main de l'IA appliquée",
      "Atelier pratique sur un outil digital spécifique",
      "Parcours de formation sur mesure selon le niveau des équipes",
    ],
    techCategories: [],
    whyAzelie:
      "Nos formations sont conçues et animées par les mêmes personnes qui développent nos projets clients : le contenu reste ancré dans des pratiques réellement utilisées, pas uniquement théoriques.",
    relatedProjectSlugs: [],
    seo: {
      title: "Formations en développement et IA au Sénégal",
      description:
        "AZELIE propose des formations pratiques en développement web/mobile, IA appliquée et outils digitaux, adaptées au niveau et aux objectifs de vos équipes.",
    },
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: "Disponible" | "Bêta" | "Bientôt disponible";
  image?: string;
};

export const products: Product[] = [
  {
    slug: "azelie-edu",
    name: "AzelieEdu",
    category: "EdTech",
    description:
      "Plateforme EdTech dédiée à la formation numérique et à la gestion intelligente des établissements scolaires : élèves, enseignants, notes et présence, en un seul endroit.",
    status: "Bêta",
    image: "/images/AzelieEdu-app.png",
  },
  {
    slug: "jonilink",
    name: "JoniLink",
    category: "Services à domicile",
    description:
      "Plateforme de mise en relation pour des services à domicile de confiance — ménage, entretien et bien plus — avec réservation en quelques clics.",
    status: "Bêta",
    image: "/images/JoniLink-app.png",
  },
  {
    slug: "prochain-produit",
    name: "Prochain produit",
    category: "En préparation",
    description:
      "Notre catalogue s'enrichit continuellement. Un nouveau produit AZELIE rejoindra bientôt cette liste.",
    status: "Bientôt disponible",
  },
];

export type ProjectItem = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  technologies: string[];
  image?: string;
  /** Détails pour les pages services : contexte, problème, solution, rôle, résultat. */
  context?: string;
  problem?: string;
  solution?: string;
  azelieRole?: string;
  result?: string;
  link?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "azelie-edu",
    title: "AzelieEdu — Plateforme de gestion scolaire",
    client: "Produit AZELIE",
    category: "Plateforme SaaS",
    summary:
      "Conception et développement d'une plateforme complète de gestion scolaire : élèves, enseignants, notes, présence et communication, pensée pour les établissements sénégalais.",
    technologies: ["Next.js", "Base de données temps réel", "UI/UX"],
    image: "/images/AzelieEdu-app.png",
    context:
      "Les établissements scolaires sénégalais gèrent encore souvent élèves, notes et présence sur des supports papier ou des tableurs dispersés.",
    problem:
      "Absence d'un outil centralisé pour suivre élèves, enseignants, notes, présence et communication au sein d'un même établissement.",
    solution:
      "Une plateforme SaaS unique regroupant la gestion des élèves, des enseignants, des notes, de la présence et de la communication.",
    azelieRole:
      "Conception produit, UI/UX et développement complet de la plateforme, en tant que produit propre d'AZELIE.",
    result:
      "Une plateforme fonctionnelle, actuellement en phase bêta.",
  },
  {
    slug: "jonilink",
    title: "JoniLink — Services à domicile",
    client: "Produit AZELIE",
    category: "Application web",
    summary:
      "Plateforme de mise en relation entre particuliers et prestataires de services à domicile, avec réservation en ligne et parcours pensé pour la confiance.",
    technologies: ["Développement web", "Réservation en ligne", "UI/UX"],
    image: "/images/JoniLink-app.png",
    context:
      "Trouver un prestataire de confiance pour un service à domicile (ménage, entretien...) reste souvent informel et incertain.",
    problem:
      "Manque d'un canal fiable et structuré pour mettre en relation particuliers et prestataires de services à domicile.",
    solution:
      "Une plateforme web de mise en relation avec réservation en ligne, pensée pour instaurer la confiance entre les deux parties.",
    azelieRole:
      "Conception produit, UI/UX et développement complet de la plateforme, en tant que produit propre d'AZELIE.",
    result:
      "Une plateforme fonctionnelle, actuellement en phase bêta.",
  },
  {
    slug: "identite-visuelle-azelie",
    title: "Identité visuelle AZELIE",
    client: "Marque AZELIE",
    category: "Identité visuelle",
    summary:
      "Conception du logo, de la charte graphique et des supports de communication d'AZELIE, pensés pour refléter une entreprise tech ambitieuse et humaine.",
    technologies: ["Branding", "Design system", "Supports imprimés"],
    context:
      "AZELIE avait besoin d'une identité visuelle cohérente pour se présenter comme une entreprise technologique crédible, au Sénégal et au-delà.",
    problem:
      "Absence d'une identité de marque structurée (logo, charte, supports) au lancement de l'entreprise.",
    solution:
      "Conception du logo, d'une charte graphique complète et des supports de communication de la marque.",
    azelieRole: "Conception et réalisation de l'identité de marque en interne.",
    result: "Une identité visuelle cohérente utilisée sur l'ensemble des supports AZELIE.",
  },
  {
    slug: "automatisations-internes",
    title: "Automatisation documentaire avec IA",
    client: "Interne AZELIE",
    category: "Automatisation",
    summary:
      "Workflow n8n : chaque document déposé sur Google Drive est automatiquement téléchargé, analysé par un modèle d'IA, puis les données extraites sont consignées dans un tableur — zéro saisie manuelle.",
    technologies: ["n8n", "Google Drive", "IA générative", "Google Sheets"],
    image: "/images/Automatisations.PNG",
    context:
      "En interne, AZELIE traitait manuellement des documents déposés sur Google Drive pour en extraire les informations utiles.",
    problem:
      "La saisie manuelle des données issues de documents était répétitive, chronophage et source d'erreurs.",
    solution:
      "Un workflow n8n qui télécharge automatiquement chaque nouveau document déposé, l'analyse via un modèle d'IA générative, puis consigne les données extraites dans un tableur.",
    azelieRole: "Conception et mise en place du workflow d'automatisation, en interne.",
    result: "Zéro saisie manuelle sur ce flux documentaire.",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  /** Dérivé des segments du champ `role` (aucune information inventée). */
  expertise: string[];
  linkedin?: string;
  github?: string;
  portfolioUrl?: string;
  personalEmail?: string;
  personalPhone?: string;
  /** Vision professionnelle, uniquement si une citation réelle existe. */
  vision?: string;
  education?: { degree: string; institution: string }[];
  /** Étapes qualitatives du parcours, sans dates inventées. */
  timeline?: { label: string; description: string }[];
  skillCategories?: { category: string; items: string[] }[];
  personalProjects?: {
    name: string;
    description: string;
    role?: string;
    technologies: string[];
    link?: string;
    category: "Développement" | "UI/UX Design";
  }[];
};

export const team: TeamMember[] = [
  {
    slug: "mouhamadou-lamine-faye",
    name: "Mouhamadou Lamine Faye",
    role: "Co-fondateur & Développeur Full Stack",
    bio: "Co-fondateur d'AZELIE, construit des applications web et mobiles robustes, du back-office aux interfaces utilisateurs.",
    photo: "/images/Mouhamadou Lamine Faye.jpeg",
    expertise: ["Co-fondateur", "Développeur Full Stack"],
    timeline: [
      {
        label: "Formation",
        description:
          "Formation en développement informatique, avec une spécialisation progressive vers le développement web et mobile.",
      },
      {
        label: "Premiers projets",
        description:
          "Développement de premières applications web et mobiles, en autonomie et en équipe.",
      },
      {
        label: "Fondation d'AZELIE",
        description:
          "Co-fondation d'AZELIE, où il pilote le développement Full Stack des produits de l'entreprise.",
      },
      {
        label: "Aujourd'hui",
        description:
          "Continue d'approfondir l'architecture logicielle et le développement d'applications robustes, du back-office aux interfaces utilisateurs.",
      },
    ],
    skillCategories: [
      {
        category: "Frontend",
        items: ["JavaScript", "React", "HTML & CSS", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js", "API REST", "Bases de données relationnelles"],
      },
      {
        category: "Mobile",
        items: ["Développement mobile cross-platform"],
      },
      {
        category: "Outils",
        items: ["Git & versioning", "Déploiement d'applications"],
      },
    ],
  },
  {
    slug: "abdoul-aziz-gueye",
    name: "Abdoul Aziz Gueye",
    role: "CEO & Data Scientist — Développeur Full Stack",
    bio: "Fondateur d'AZELIE, pilote la vision de l'entreprise et conçoit des produits web et IA de bout en bout, de la donnée à l'interface.",
    photo: "/images/Abdoul Aziz GUEYE.jpeg",
    expertise: ["CEO", "Data Scientist", "Développeur Full Stack"],
    linkedin: "https://www.linkedin.com/in/abdoul-aziz-gueye-7840063a8/",
    github: "https://github.com/AbdoulAziz01",
    portfolioUrl: "https://abdoulaziz01.github.io/My-Portfolio/",
    personalEmail: "gueyeabdoulaziz111@gmail.com",
    personalPhone: "+221 78 951 52 68",
    vision:
      "Passionné par la création d'expériences digitales exceptionnelles, je transforme des idées en solutions innovantes et performantes.",
    education: [
      {
        degree: "Licence en Informatique de Gestion",
        institution: "UCAO Saint Michel",
      },
    ],
    timeline: [
      {
        label: "Formation",
        description:
          "Licence en Informatique de Gestion à l'UCAO Saint Michel.",
      },
      {
        label: "Premiers projets",
        description:
          "Développement de sites et interfaces pour des structures variées (santé, agro-industrie, design produit), en développement comme en UI/UX.",
      },
      {
        label: "Fondation de JoniLink",
        description:
          "Création de JoniLink, plateforme de mise en relation pour des services à domicile.",
      },
      {
        label: "Fondation d'AZELIE",
        description:
          "Co-fondation d'AZELIE en tant que CEO, pour construire des produits web et IA au service des entreprises et étudiants sénégalais.",
      },
      {
        label: "Aujourd'hui : vers la Data, l'IA & la Cybersécurité",
        description:
          "Approfondissement de la Data Science, du Machine Learning et des fondamentaux de la cybersécurité, en complément du développement Full Stack.",
      },
    ],
    skillCategories: [
      {
        category: "Frontend",
        items: ["HTML & CSS", "JavaScript", "React JS", "React (TypeScript)", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Laravel", "Node.js", "Python", "Java (base)"],
      },
      {
        category: "Bases de données",
        items: ["PostgreSQL", "Prisma"],
      },
      {
        category: "UI/UX",
        items: [
          "Wireframing & prototypage",
          "Design responsive & mobile-first",
          "Design systems",
          "Parcours utilisateur & interaction",
        ],
      },
      {
        category: "Data & IA",
        items: [
          "Python (Machine Learning)",
          "SQL avancé",
          "Jupyter Notebook",
          "Matplotlib / Seaborn",
          "Nettoyage & analyse de données",
          "Power BI",
        ],
      },
      {
        category: "Cybersécurité",
        items: ["Sécurité des applications web (bases)"],
      },
    ],
    personalProjects: [
      {
        name: "Facturelma",
        description: "Plateforme de gestion de facturation et de stock.",
        technologies: ["React JS", "Node.js"],
        link: "https://facturelma.tabaxbi.com",
        category: "Développement",
      },
      {
        name: "École de Santé Mouhamad Rassouillah",
        description:
          "Site web pour une école de santé : présentation des formations et inscription en ligne.",
        technologies: ["HTML5", "CSS3"],
        link: "https://abdoulaziz01.github.io/Ecole-sante/",
        category: "Développement",
      },
      {
        name: "Fresh O Vitroplant",
        description:
          "Site web pour une entreprise de biotechnologie agricole spécialisée dans les plants de bananier.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "https://abdoulaziz01.github.io/Fresh-O/",
        category: "Développement",
      },
      {
        name: "Modélica Style",
        description: "Portfolio personnel construit autour de principes de design affirmés.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "https://abdoulaziz01.github.io/Modelica-Style/",
        category: "Développement",
      },
      {
        name: "AZELIE Marketplace",
        description:
          "Design d'une application marketplace, dans l'esprit des plateformes e-commerce grand public.",
        technologies: ["Figma"],
        category: "UI/UX Design",
      },
      {
        name: "SumuPharma",
        description:
          "Design d'une application mobile de gestion de pharmacie : recherche, inventaire, catégorisation des médicaments.",
        technologies: ["Figma"],
        category: "UI/UX Design",
      },
      {
        name: "Sonatel Corporate",
        description:
          "Refonte design d'un site d'entreprise télécom, avec présentation des services et statistiques interactives.",
        technologies: ["Figma"],
        category: "UI/UX Design",
      },
      {
        name: "MOSS DOLI",
        description:
          "Design d'un site de restaurant : menu interactif, système de réservation, galerie.",
        technologies: ["Figma"],
        category: "UI/UX Design",
      },
    ],
  },
  {
    slug: "elie-reyara",
    name: "Elie Reyara",
    role: "Co-fondateur & Data Analyste",
    bio: "Co-fondateur d'AZELIE, transforme la donnée en décisions concrètes pour guider la stratégie produit et celle de nos clients.",
    photo: "/images/Elie Reyara.jpeg",
    expertise: ["Co-fondateur", "Data Analyste"],
    timeline: [
      {
        label: "Formation",
        description:
          "Formation en analyse de données, avec une appétence pour transformer des données brutes en informations exploitables.",
      },
      {
        label: "Premiers projets",
        description:
          "Premières missions d'analyse de données pour guider des décisions produit et business.",
      },
      {
        label: "Fondation d'AZELIE",
        description:
          "Co-fondation d'AZELIE, où il pilote l'analyse de données au service de la stratégie produit.",
      },
      {
        label: "Aujourd'hui",
        description:
          "Continue de structurer les indicateurs et tableaux de bord qui guident les décisions d'AZELIE et de ses clients.",
      },
    ],
    skillCategories: [
      {
        category: "Data",
        items: ["Analyse de données", "Nettoyage de données", "Tableaux de bord"],
      },
      {
        category: "Outils",
        items: ["Excel avancé", "SQL", "Power BI"],
      },
      {
        category: "Méthodologie",
        items: ["Reporting", "Aide à la décision"],
      },
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo?: string;
  logo?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "M. Traoré",
    role: "Client AZELIE",
    quote:
      "L'équipe AZELIE a su comprendre nos besoins rapidement et livrer une solution fiable, avec un vrai suivi du début à la fin du projet.",
  },
  {
    name: "Mme Khadija",
    role: "Cliente AZELIE",
    quote:
      "Un accompagnement sérieux et réactif : chaque retour a été pris en compte, et le résultat final correspond exactement à ce qu'on attendait.",
  },
  {
    name: "M. Sherif Youba",
    role: "Client AZELIE",
    quote:
      "Ce qui m'a marqué, c'est la rigueur et la transparence de l'équipe à chaque étape. Un vrai partenaire pour notre transformation numérique.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer:
      "Nous travaillons avec des startups, PME et grandes entreprises au Sénégal et à l'international, dans des secteurs variés : distribution, logistique, finance, services et santé.",
  },
  {
    question: "Combien de temps dure un projet type ?",
    answer:
      "Cela dépend de la portée : un site vitrine premium prend généralement 3 à 6 semaines, une application mobile ou un produit SaaS complet de 2 à 6 mois. Nous cadrons précisément les délais dès le premier échange.",
  },
  {
    question: "Proposez-vous un accompagnement après la livraison ?",
    answer:
      "Oui. Nous proposons des formules de maintenance, d'évolution continue et de support technique adaptées à chaque produit livré.",
  },
  {
    question: "Travaillez-vous avec des équipes déjà en place ?",
    answer:
      "Absolument. Nous intervenons aussi bien en autonomie complète qu'en renfort d'équipes techniques existantes, selon vos besoins.",
  },
  {
    question: "Comment se déroule le démarrage d'un projet ?",
    answer:
      "Après un premier échange de cadrage, nous produisons une proposition détaillée (périmètre, délais, budget) puis démarrons par une phase de conception avant le développement.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pourquoi-lia-generative-transforme-les-pme-senegalaises",
    title: "Pourquoi l'IA générative transforme les PME sénégalaises",
    excerpt:
      "Tour d'horizon des cas d'usage concrets de l'IA générative pour les entreprises locales, au-delà du buzz.",
    category: "Intelligence Artificielle",
    date: "2026-06-12",
    readingTime: "6 min",
    content: [
      "L'intelligence artificielle générative n'est plus réservée aux grandes multinationales technologiques. Au Sénégal, un nombre croissant de PME l'utilisent déjà pour automatiser leur support client, générer du contenu marketing ou analyser leurs données commerciales.",
      "Le cas le plus fréquent que nous observons chez AZELIE est celui de l'assistant de support client multilingue, capable de répondre en français comme en wolof, réduisant significativement la charge des équipes support tout en améliorant le temps de réponse.",
      "Au-delà du support, l'IA générative permet aussi d'accélérer la production de contenu commercial, d'automatiser la rédaction de rapports internes ou encore d'extraire de l'information structurée à partir de documents non structurés — factures, contrats, formulaires papier scannés.",
      "La clé du succès n'est pas la technologie elle-même, mais son intégration précise dans un processus métier existant. C'est cette approche pragmatique que nous privilégions à chaque projet d'IA que nous menons.",
    ],
  },
  {
    slug: "choisir-son-partenaire-technique-guide-2026",
    title: "Comment choisir son partenaire technique en 2026",
    excerpt:
      "Les critères essentiels pour évaluer une agence ou un studio de développement avant de vous engager.",
    category: "Stratégie",
    date: "2026-05-20",
    readingTime: "5 min",
    content: [
      "Choisir un partenaire technique est l'une des décisions les plus structurantes pour une entreprise qui se digitalise. Un mauvais choix peut coûter des mois de retard et un budget dépassé ; un bon choix peut au contraire devenir un véritable accélérateur de croissance.",
      "Le premier critère à évaluer est la capacité du partenaire à cadrer précisément votre besoin avant de coder quoi que ce soit. Une proposition détaillée, avec un périmètre, des délais et un budget clairs, est un signal de sérieux essentiel.",
      "Le second critère est la transparence tout au long du projet : accès au code source, points d'avancement réguliers, et documentation claire de ce qui est livré. Enfin, la capacité à accompagner après la livraison — maintenance, évolutions, support — fait souvent la différence entre un simple prestataire et un vrai partenaire technique.",
    ],
  },
  {
    slug: "de-lidee-au-mvp-saas-en-8-semaines",
    title: "De l'idée au MVP SaaS en 8 semaines",
    excerpt:
      "La méthode AZELIE pour transformer une idée produit en MVP testable auprès de vrais utilisateurs.",
    category: "Produit",
    date: "2026-04-03",
    readingTime: "7 min",
    content: [
      "Beaucoup de porteurs de projet SaaS pensent qu'il faut des mois, voire des années, avant de pouvoir tester leur idée auprès de vrais utilisateurs. Chez AZELIE, notre méthode permet de livrer un MVP testable en 8 semaines en moyenne.",
      "La première étape consiste à isoler la fonctionnalité cœur qui apporte la valeur principale au produit, en écartant délibérément tout ce qui n'est pas indispensable à la validation de l'hypothèse produit.",
      "Vient ensuite une phase de conception rapide — wireframes et parcours utilisateur — suivie d'un développement itératif avec des points de validation hebdomadaires. Cette approche permet d'ajuster le produit en continu plutôt que de découvrir les écarts une fois le développement terminé.",
      "Le résultat : un produit testable auprès de vrais utilisateurs en moins de deux mois, avec une base technique saine, prête à évoluer vers une version complète.",
    ],
  },
];

export const stats = [
  { label: "Fondateurs experts", value: "3" },
  { label: "Produits développés", value: "2+" },
  { label: "Sénégalais", value: "100%" },
  { label: "Délai de réponse", value: "24h" },
] as const;
