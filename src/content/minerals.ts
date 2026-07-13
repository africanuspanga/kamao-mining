export type Mineral = {
  slug: string;
  name: { en: string; fr: string };
  shortStatement: { en: string; fr: string };
  applications: { en: string[]; fr: string[] };
  pageHeading: { en: string; fr: string };
  pageCopy: { en: string[]; fr: string[] };
  image: string;
  imageAlt: { en: string; fr: string };
  related: string[];
};

export const minerals: Mineral[] = [
  {
    slug: "cobalt",
    name: { en: "Cobalt", fr: "Cobalt" },
    shortStatement: {
      en: "A strategic mineral supporting rechargeable batteries, advanced alloys and high-performance industrial applications.",
      fr: "Un minéral stratégique utilisé pour les batteries rechargeables, les alliages avancés et les applications industrielles de haute performance.",
    },
    applications: {
      en: [
        "Electric-vehicle batteries",
        "Consumer electronics",
        "Energy storage",
        "Aerospace alloys",
        "Industrial materials",
      ],
      fr: [
        "Batteries pour véhicules électriques",
        "Électronique grand public",
        "Stockage d'énergie",
        "Alliages aérospatiaux",
        "Matériaux industriels",
      ],
    },
    pageHeading: {
      en: "Cobalt for an increasingly electrified world.",
      fr: "Le cobalt pour un monde de plus en plus électrifié.",
    },
    pageCopy: {
      en: [
        "Cobalt plays an important role in several modern battery chemistries and specialised industrial applications. The DRC occupies a central position in the global cobalt supply chain, making responsible development, traceability and transparent commercial relationships particularly important.",
        "Kamao's cobalt-related activities, project locations, product specifications and supply capacity must only be described after company verification.",
      ],
      fr: [
        "Le cobalt joue un rôle important dans plusieurs chimies de batteries modernes et applications industrielles spécialisées. La RDC occupe une position centrale dans la chaîne d'approvisionnement mondiale en cobalt, ce qui rend le développement responsable, la traçabilité et les relations commerciales transparentes particulièrement importants.",
        "Les activités liées au cobalt de Kamao, les emplacements des projets, les spécifications des produits et la capacité d'approvisionnement ne doivent être décrits qu'après vérification par l'entreprise.",
      ],
    },
    image: "/azurite-mineral-specimen.jpg",
    imageAlt: {
      en: "Cobalt-bearing mineral specimen with blue and copper tones",
      fr: "Échantillon de minerai contenant du cobalt aux tons bleus et cuivrés",
    },
    related: ["copper", "lithium"],
  },
  {
    slug: "copper",
    name: { en: "Copper", fr: "Cuivre" },
    shortStatement: {
      en: "A foundational material for electricity, infrastructure, transportation and global industrial growth.",
      fr: "Un matériau fondamental pour l'électricité, les infrastructures, les transports et la croissance industrielle mondiale.",
    },
    applications: {
      en: [
        "Power transmission",
        "Renewable-energy systems",
        "Construction",
        "Electronics",
        "Electric vehicles",
        "Industrial machinery",
      ],
      fr: [
        "Transmission d'électricité",
        "Systèmes d'énergie renouvelable",
        "Construction",
        "Électronique",
        "Véhicules électriques",
        "Machinerie industrielle",
      ],
    },
    pageHeading: {
      en: "Copper: the metal behind electrification.",
      fr: "Le cuivre : le métal derrière l'électrification.",
    },
    pageCopy: {
      en: [
        "Copper combines electrical conductivity, durability and recyclability, making it essential to power grids, buildings, transportation systems, telecommunications and manufacturing.",
        "As global electrification expands, dependable copper production and responsible mineral development will remain important to both established and emerging economies.",
      ],
      fr: [
        "Le cuivre allie conductivité électrique, durabilité et recyclabilité, ce qui en fait un matériau essentiel pour les réseaux électriques, les bâtiments, les systèmes de transport, les télécommunications et la fabrication.",
        "À mesure que l'électrification mondiale se développe, une production de cuivre fiable et un développement minier responsable resteront importants pour les économies établies comme émergentes.",
      ],
    },
    image: "/copper-ore-closeup.jpg",
    imageAlt: {
      en: "Close-up of copper ore showing metallic copper texture",
      fr: "Gros plan sur un minerai de cuivre montrant sa texture métallique",
    },
    related: ["cobalt", "gold"],
  },
  {
    slug: "coltan-tantalum",
    name: { en: "Coltan and Tantalum", fr: "Coltan et Tantale" },
    shortStatement: {
      en: "Mineral resources supporting compact, dependable electronic components.",
      fr: "Des ressources minérales servant à la fabrication de composants électroniques compacts et fiables.",
    },
    applications: {
      en: [
        "Smartphones",
        "Computers",
        "Medical equipment",
        "Automotive electronics",
        "Aerospace electronics",
        "Industrial capacitors",
      ],
      fr: [
        "Smartphones",
        "Ordinateurs",
        "Équipement médical",
        "Électronique automobile",
        "Électronique aérospatiale",
        "Condensateurs industriels",
      ],
    },
    pageHeading: {
      en: "Tantalum for compact and reliable technology.",
      fr: "Le tantale pour une technologie compacte et fiable.",
    },
    pageCopy: {
      en: [
        "Coltan is an ore from which tantalum and niobium may be recovered. Tantalum is valued for its ability to support small, reliable and high-performance electronic capacitors.",
        "Because tantalum supply chains may involve high-risk areas, traceability, due diligence and reliable documentation are essential.",
      ],
      fr: [
        "Le coltan est un minerai duquel le tantale et le niobium peuvent être extraits. Le tantale est apprécié pour sa capacité à supporter des condensateurs électroniques petits, fiables et de haute performance.",
        "Étant donné que les chaînes d'approvisionnement en tantale peuvent impliquer des zones à haut risque, la traçabilité, la diligence raisonnable et la documentation fiable sont essentielles.",
      ],
    },
    image: "/pyrite-crystal-cluster.jpg",
    imageAlt: {
      en: "Metallic mineral crystals resembling coltan and tantalum ore",
      fr: "Cristaux métalliques de minerai ressemblant au coltan et au tantale",
    },
    related: ["tin", "tungsten"],
  },
  {
    slug: "gold",
    name: { en: "Gold", fr: "Or" },
    shortStatement: {
      en: "A valuable mineral serving financial, technological, decorative and precision-manufacturing markets.",
      fr: "Un minéral précieux destiné aux marchés financiers, technologiques, décoratifs et de fabrication de précision.",
    },
    applications: {
      en: [
        "Electronics",
        "Investment products",
        "Jewellery",
        "Medical technology",
        "Aerospace systems",
        "Precision connectors",
      ],
      fr: [
        "Électronique",
        "Produits d'investissement",
        "Joaillerie",
        "Technologie médicale",
        "Systèmes aérospatiaux",
        "Connecteurs de précision",
      ],
    },
    pageHeading: {
      en: "Enduring value with modern industrial relevance.",
      fr: "Une valeur durable avec une pertinence industrielle moderne.",
    },
    pageCopy: {
      en: [
        "Gold has been valued for centuries as a store of wealth and a material for fine craftsmanship. Today it also plays a functional role in electronics, medical devices and aerospace systems where reliability and corrosion resistance matter.",
        "Kamao only discusses gold-related activities, origins or production capacity after company verification.",
      ],
      fr: [
        "L'or est valorisé depuis des siècles comme réserve de valeur et matériau pour l'artisanat de précision. Aujourd'hui, il joue également un rôle fonctionnel dans l'électronique, les dispositifs médicaux et les systèmes aérospatiaux où la fiabilité et la résistance à la corrosion comptent.",
        "Kamao ne discute des activités liées à l'or, de leurs origines ou de la capacité de production qu'après vérification par l'entreprise.",
      ],
    },
    image: "/golden-crystals.jpg",
    imageAlt: {
      en: "Golden crystalline mineral texture",
      fr: "Texture cristalline dorée de minerai",
    },
    related: ["diamonds", "copper"],
  },
  {
    slug: "diamonds",
    name: { en: "Diamonds", fr: "Diamants" },
    shortStatement: {
      en: "Mineral resources serving both industrial applications and the gem market.",
      fr: "Des ressources minérales servant à la fois aux applications industrielles et au marché des gemmes.",
    },
    applications: {
      en: [
        "Cutting and drilling tools",
        "Abrasive materials",
        "Precision industrial equipment",
        "Jewellery and gemstones",
      ],
      fr: [
        "Outils de coupe et de forage",
        "Matériaux abrasifs",
        "Équipement industriel de précision",
        "Joaillerie et pierres précieuses",
      ],
    },
    pageHeading: {
      en: "Natural strength, precision and enduring value.",
      fr: "Force naturelle, précision et valeur durable.",
    },
    pageCopy: {
      en: [
        "Diamonds are among the hardest known natural materials, making them essential for cutting, grinding and drilling tools used in mining, construction and manufacturing. Gem-quality diamonds also hold significant cultural and commercial value.",
        "Kamao does not claim Kimberley Process compliance unless the company supplies verifiable documentation.",
      ],
      fr: [
        "Les diamants figurent parmi les matériaux naturels les plus durs connus, ce qui les rend essentiels pour les outils de coupe, de meulage et de forage utilisés dans l'exploitation minière, la construction et la fabrication. Les diamants de qualité gemme ont également une valeur culturelle et commerciale significative.",
        "Kamao ne revendique pas la conformité au Processus de Kimberley tant que l'entreprise n'a pas fourni de documentation vérifiable.",
      ],
    },
    image: "/pyrite-crystal-cluster.jpg",
    imageAlt: {
      en: "Crystalline mineral structure",
      fr: "Structure minérale cristalline",
    },
    related: ["gold", "tin"],
  },
  {
    slug: "tin",
    name: { en: "Tin", fr: "Étain" },
    shortStatement: {
      en: "An important metal used in electronics manufacturing, protective coatings and industrial products.",
      fr: "Un métal important utilisé dans la fabrication électronique, les revêtements protecteurs et les produits industriels.",
    },
    applications: {
      en: ["Solder", "Electronics", "Metal coatings", "Alloys", "Packaging", "Chemical applications"],
      fr: [
        "Soudure",
        "Électronique",
        "Revêtements métalliques",
        "Alliages",
        "Emballage",
        "Applications chimiques",
      ],
    },
    pageHeading: {
      en: "Tin supporting electronics and modern manufacturing.",
      fr: "L'étain au service de l'électronique et de la fabrication moderne.",
    },
    pageCopy: {
      en: [
        "Tin is a versatile metal with a low melting point, making it ideal for solder used in electronics assembly. It is also used in protective coatings, alloys such as bronze, and various industrial and packaging applications.",
        "As electronics manufacturing grows, responsible tin sourcing and supply-chain documentation remain priorities for producers and buyers.",
      ],
      fr: [
        "L'étain est un métal polyvalent avec un point de fusion bas, ce qui le rend idéal pour la soudure utilisée dans l'assemblage électronique. Il est également utilisé dans les revêtements protecteurs, les alliages tels que le bronze, et diverses applications industrielles et d'emballage.",
        "À mesure que la fabrication électronique se développe, l'approvisionnement responsable en étain et la documentation de la chaîne d'approvisionnement restent des priorités pour les producteurs et les acheteurs.",
      ],
    },
    image: "/pyrite-crystal-cluster.jpg",
    imageAlt: {
      en: "Metallic mineral specimen",
      fr: "Échantillon de minerai métallique",
    },
    related: ["coltan-tantalum", "tungsten"],
  },
  {
    slug: "tungsten",
    name: { en: "Tungsten", fr: "Tungstène" },
    shortStatement: {
      en: "A high-performance material valued for hardness, heat resistance and demanding industrial applications.",
      fr: "Un matériau de haute performance valorisé pour sa dureté, sa résistance à la chaleur et ses applications industrielles exigeantes.",
    },
    applications: {
      en: [
        "Cutting tools",
        "Mining equipment",
        "Industrial machinery",
        "Aerospace",
        "Electronics",
        "Specialised alloys",
      ],
      fr: [
        "Outils de coupe",
        "Équipement minier",
        "Machinerie industrielle",
        "Aérospatiale",
        "Électronique",
        "Alliages spécialisés",
      ],
    },
    pageHeading: {
      en: "Performance in demanding environments.",
      fr: "Des performances dans des environnements exigeants.",
    },
    pageCopy: {
      en: [
        "Tungsten has the highest melting point of all metals and exceptional hardness, making it critical for cutting tools, drill bits, aerospace components and high-temperature applications.",
        "Responsible tungsten sourcing supports reliable supply chains for mining, manufacturing and advanced technology sectors.",
      ],
      fr: [
        "Le tungstène a le point de fusion le plus élevé de tous les métaux et une dureté exceptionnelle, ce qui le rend essentiel pour les outils de coupe, les forets, les composants aérospatiaux et les applications à haute température.",
        "L'approvisionnement responsable en tungstène soutient des chaînes d'approvisionnement fiables pour les secteurs minier, manufacturier et des technologies avancées.",
      ],
    },
    image: "/pyrite-crystal-cluster.jpg",
    imageAlt: {
      en: "Dense metallic mineral specimen representing tungsten ore",
      fr: "Échantillon de minerai métallique dense représentant le tungstène",
    },
    related: ["tin", "coltan-tantalum"],
  },
  {
    slug: "lithium",
    name: { en: "Lithium", fr: "Lithium" },
    shortStatement: {
      en: "A strategic battery material supporting electric mobility and energy storage.",
      fr: "Un matériau stratégique pour les batteries soutenant la mobilité électrique et le stockage d'énergie.",
    },
    applications: {
      en: [
        "Electric vehicles",
        "Stationary energy storage",
        "Consumer electronics",
        "Industrial batteries",
        "Renewable-energy integration",
      ],
      fr: [
        "Véhicules électriques",
        "Stockage d'énergie stationnaire",
        "Électronique grand public",
        "Batteries industrielles",
        "Intégration des énergies renouvelables",
      ],
    },
    pageHeading: {
      en: "Lithium and the next generation of energy storage.",
      fr: "Le lithium et la prochaine génération de stockage d'énergie.",
    },
    pageCopy: {
      en: [
        "Lithium is a key ingredient in many rechargeable battery chemistries used for electric vehicles, grid storage and consumer electronics. Global demand is rising as economies transition toward cleaner energy systems.",
        "This article discusses the wider DRC mining sector and does not claim Kamao ownership of the Manono deposit or any other lithium concession unless verified concession information is provided.",
      ],
      fr: [
        "Le lithium est un ingrédient clé dans de nombreuses chimies de batteries rechargeables utilisées pour les véhicules électriques, le stockage réseau et l'électronique grand public. La demande mondiale augmente à mesure que les économies transitionnent vers des systèmes énergétiques plus propres.",
        "Cet article traite du secteur minier plus large de la RDC et ne revendique pas la propriété par Kamao du gisement de Manono ou de toute autre concession de lithium, sauf si des informations de concession vérifiées sont fournies.",
      ],
    },
    image: "/azurite-mineral-specimen.jpg",
    imageAlt: {
      en: "Lithium-bearing mineral sample",
      fr: "Échantillon de minerai contenant du lithium",
    },
    related: ["cobalt", "copper"],
  },
];

export function getMineralBySlug(slug: string): Mineral | undefined {
  return minerals.find((m) => m.slug === slug);
}

export function getPublishedMinerals(): Mineral[] {
  return minerals;
}
