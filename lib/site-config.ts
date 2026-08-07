export const siteConfig = {
  name: "AZELIE",
  tagline: "L'ingénierie numérique sénégalaise, à l'échelle du monde.",
  description:
    "AZELIE conçoit des produits Web, Mobile et IA pour les entreprises tout en formant les talents de demain aux métiers du numérique et du digital.",
  url: "https://azelie.com",
  email: "azeliedigital@gmail.com",
  phone: "+221 78 951 52 68",
  address: "Dakar, Sénégal — Plateau",
  socials: {
    linkedin: "https://linkedin.com/company/azelie",
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
};

export const services: ServiceItem[] = [
  {
    slug: "developpement-web",
    title: "Développement Web",
    short: "Sites et applications web sur mesure, rapides et évolutifs.",
    description:
      "Nous concevons des plateformes web performantes avec Next.js et les meilleures pratiques modernes : vitrines premium, applications métiers, portails clients et back-offices.",
    icon: "code",
    image:
      "https://images.unsplash.com/photo-1774901128302-e2bbd154da44?w=1200&q=80",
    features: [
      "Architecture Next.js / TypeScript",
      "SEO technique & performance",
      "Interfaces sur mesure, sans template",
      "Intégration API & back-office",
    ],
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
  },
  {
    slug: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    short: "Des IA appliquées à vos besoins métiers réels.",
    description:
      "Chatbots, assistants métiers, analyse de données et automatisation intelligente : nous intégrons l'IA là où elle crée une valeur mesurable.",
    icon: "brain",
    image:
      "https://images.unsplash.com/photo-1750365919971-7dd273e7b317?w=1200&q=80",
    features: [
      "Assistants IA sur mesure",
      "Automatisation de processus",
      "Analyse & extraction de données",
      "Intégration LLM sécurisée",
    ],
  },
  {
    slug: "automatisation",
    title: "Automatisation",
    short: "Éliminez les tâches répétitives, gagnez du temps.",
    description:
      "Nous automatisons vos flux internes — facturation, reporting, synchronisation d'outils — pour libérer vos équipes des tâches à faible valeur.",
    icon: "workflow",
    image:
      "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?w=1200&q=80",
    features: [
      "Automatisation des workflows",
      "Intégrations entre outils métiers",
      "Reporting automatisé",
      "Réduction des erreurs manuelles",
    ],
  },
  {
    slug: "transformation-digitale",
    title: "Transformation Digitale",
    short: "Un accompagnement stratégique pour votre virage numérique.",
    description:
      "Audit, feuille de route et exécution : nous accompagnons les organisations dans leur passage au numérique, de la stratégie à la mise en œuvre.",
    icon: "sparkles",
    image:
      "https://images.unsplash.com/photo-1758873268998-2f77c2d38862?w=1200&q=80",
    features: [
      "Audit digital & stratégie",
      "Modernisation des outils internes",
      "Conduite du changement",
      "Formation des équipes",
    ],
  },
  {
    slug: "developpement-saas",
    title: "Développement SaaS",
    short: "De l'idée au produit SaaS prêt à scaler.",
    description:
      "Nous construisons des produits SaaS complets — architecture multi-tenant, facturation, sécurité — pensés pour croître avec vos utilisateurs.",
    icon: "layers",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    features: [
      "Architecture multi-tenant",
      "Facturation & abonnements",
      "Sécurité & scalabilité",
      "MVP à mise à l'échelle",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Des interfaces pensées pour convertir et fidéliser.",
    description:
      "Recherche utilisateur, wireframes, design system et interfaces finales : chaque écran est pensé pour l'usage réel de vos utilisateurs.",
    icon: "cpu",
    image:
      "https://images.unsplash.com/photo-1743385779436-a6950c168fff?w=1200&q=80",
    features: [
      "Recherche & parcours utilisateur",
      "Design system sur mesure",
      "Prototypage haute-fidélité",
      "Tests d'utilisabilité",
    ],
  },
  {
    slug: "formation",
    title: "Formation",
    short: "Montez en compétence vos équipes techniques.",
    description:
      "Des formations pratiques en développement, IA et outils digitaux, adaptées au niveau et aux objectifs de vos équipes.",
    icon: "graduation",
    image:
      "https://images.unsplash.com/photo-1758270705290-62b6294dd044?w=1200&q=80",
    features: [
      "Formations développement web/mobile",
      "Initiation à l'IA appliquée",
      "Ateliers pratiques en entreprise",
      "Parcours sur mesure",
    ],
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
  },
  {
    slug: "identite-visuelle-azelie",
    title: "Identité visuelle AZELIE",
    client: "Marque AZELIE",
    category: "Identité visuelle",
    summary:
      "Conception du logo, de la charte graphique et des supports de communication d'AZELIE, pensés pour refléter une entreprise tech ambitieuse et humaine.",
    technologies: ["Branding", "Design system", "Supports imprimés"],
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
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Abdoul Aziz Gueye",
    role: "CEO & Data Scientist — Développeur Full Stack",
    bio: "Fondateur d'AZELIE, pilote la vision de l'entreprise et conçoit des produits web et IA de bout en bout, de la donnée à l'interface.",
    photo: "/images/Abdoul Aziz GUEYE.jpeg",
  },
  {
    name: "Elie Reyara",
    role: "Co-fondateur & Data Analyste",
    bio: "Co-fondateur d'AZELIE, transforme la donnée en décisions concrètes pour guider la stratégie produit et celle de nos clients.",
    photo: "/images/Elie Reyara.jpeg",
  },
  {
    name: "Mouhamadou Lamine Faye",
    role: "Co-fondateur & Développeur Full Stack",
    bio: "Co-fondateur d'AZELIE, construit des applications web et mobiles robustes, du back-office aux interfaces utilisateurs.",
    photo: "/images/Mouhamadou Lamine Faye.jpeg",
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
