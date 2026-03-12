// src/data/productions.ts
// Single source of truth for all film/production data.

export type ProductionStatus = 'Released' | 'In Development' | 'In Production';

export interface ProductionDetail {
  label: string;
  value: string;
}

export interface ProductionSection {
  heading: string;
  paragraphs: string[];
}

export interface Production {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  teaser: string;
  synopsis: string;
  sections: ProductionSection[];
  status: ProductionStatus;
  statusColor: string;
  poster: string;
  posterDetail: string;
  posterPosition: string;
  locations: string[];
  details: ProductionDetail[];
  cta: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

const blindAmbition: Production = {
  slug: 'blind-ambition',
  index: '01',
  title: 'Blind Ambition',
  subtitle: 'Adventure Documentary Series',
  teaser:
    'An international adventure documentary series following Chad E. Foster as he takes on extraordinary challenges across the world.',
  synopsis:
    'Blind Ambition is a cinematic documentary series in development, following blind entrepreneur, athlete, and global speaker Chad E. Foster through a collection of high-stakes adventures designed to test courage, resilience, and the limits of human possibility.',
  sections: [
    {
      heading: 'The Journey',
      paragraphs: [
        'From the dunes of Dubai to the streets of Rome, the skyline of Paris, and the ascent of Kilimanjaro, Blind Ambition places Chad inside environments that demand trust, adaptability, and relentless determination.',
        'The series is not simply about spectacle. It is about perspective... how adversity can become fuel, how challenge can become transformation, and how a life without sight can still be lived with extraordinary vision.',
      ],
    },
    {
      heading: 'Series Vision',
      paragraphs: [
        'Each episode blends cinematic action, cultural immersion, and deeply human storytelling. Whether skydiving, climbing, training, or navigating unfamiliar terrain, Chad brings a rare mix of courage, humor, and authority to every environment he enters.',
        'Blind Ambition is designed as both an adventure series and a global story of human resilience.',
      ],
    },
    {
      heading: 'Current Opportunity',
      paragraphs: [
        'We are currently seeking development partners, co-producers, and strategic sponsors to help bring the first season of Blind Ambition to life.',
        'This is an opportunity to support a cinematic international series built around courage, possibility, and the power of reimagining what limits really are.',
      ],
    },
  ],
  status: 'In Development',
  statusColor: 'text-amber-400 border-amber-800/50 bg-amber-950/30',
  poster: '/blind-ambition-cover.jpg',
  posterDetail: '/blind-ambition-detail.jpg',
  posterPosition: 'center center',
  locations: ['Rome', 'Paris', 'Dubai', 'Kilimanjaro'],
  details: [
    { label: 'Locations', value: 'Rome ... Paris ... Dubai ... Kilimanjaro' },
    { label: 'Format', value: 'Documentary Series' },
    { label: 'Status', value: 'In Development' },
    { label: 'Seeking', value: 'Production partners + aligned sponsors' },
  ],
  cta: { label: 'Express Interest', href: '/collaborate' },
  ctaSecondary: { label: 'Request the Pitch Deck', href: '/collaborate' },
};

const blindAdventures: Production = {
  slug: 'blind-adventures',
  index: '02',
  title: 'Blind Adventures',
  subtitle: 'Adventure Documentary Series',
  teaser:
    'A released adventure documentary series following blind explorer Ron Walsh through some of the world\'s most demanding wilderness environments.',
  synopsis:
    'Blind Adventures is a cinematic adventure documentary series that follows Ron Walsh as he takes on extraordinary physical and environmental challenges in remote wilderness settings. Already released through the PBS ecosystem, the series combines breathtaking landscapes, real endurance, and a powerful message about resilience, courage, and what it means to move through the world beyond limitation.',
  sections: [
    {
      heading: 'The Series',
      paragraphs: [
        'From frozen racecourses and deep boreal forest trails to bear country, mountain terrain, and remote historical landscapes, Blind Adventures captures the reality of exploration when every step requires trust, preparation, and resolve.',
        'At the center of the series is Ron Walsh... a blind adventurer whose philosophy is simple: the larger the obstacle, the greater the adventure. Alongside guides, collaborators, and returning cast members including Ashlyn George, the series reveals not only the intensity of the physical journeys, but the deeper lessons they uncover about fear, teamwork, endurance, and hope.',
      ],
    },
    {
      heading: 'Release + Reach',
      paragraphs: [
        'Blind Adventures has been released through WPBS/PBS and continues to build audience reach across public broadcast and streaming platforms. The project has already established the visual and emotional DNA of the series, and now stands ready for its next chapter.',
      ],
    },
    {
      heading: 'Season 3 Opportunity',
      paragraphs: [
        'We are currently seeking aligned funding and production partners for Season 3.',
        'The next chapter expands the scale of the adventure, the cinematic quality of the field production, and the opportunity for mission-aligned sponsors, underwriters, and creative collaborators to become part of a series built around courage, exploration, and the human spirit.',
      ],
    },
  ],
  status: 'Released',
  statusColor: 'text-emerald-400 border-emerald-800/50 bg-emerald-950/30',
  poster: '/blind-adventures-cover.jpg',
  posterDetail: '/blind-adventures-detail.jpg',
  posterPosition: 'center center',
  locations: [],
  details: [
    { label: 'Network', value: 'WPBS/PBS' },
    { label: 'Streaming', value: 'PBS Passport + Hulu' },
    { label: 'Status', value: 'Released ... currently seeking Season 3 funding partners' },
  ],
  cta: { label: 'Explore Partnership Opportunities', href: '/collaborate' },
  ctaSecondary: { label: 'Support Season 3', href: '/collaborate' },
};

const thirst: Production = {
  slug: 'thirst',
  index: '03',
  title: 'Thirst',
  subtitle: 'Feature Documentary',
  teaser:
    "A feature documentary investigating the hidden systems controlling the world's most essential resource — water.",
  synopsis:
    "What begins as one man's search for clean water expands into a larger story about infrastructure, power, contamination, and the fight to reclaim water as a living resource rather than a commodity.",
  sections: [
    {
      heading: 'Synopsis',
      paragraphs: [
        'Thirst is a feature documentary following Glen Kerby as a personal search for truth unfolds into a wider investigation of the global water crisis. From aging pipes and poisoned communities to indigenous voices reclaiming sacred sources, the film reveals how water sits at the intersection of health, environment, freedom, and survival.',
        'Shot across North America with expert voices, frontline communities, and cinematic landscapes, Thirst asks a deeper question beneath the crisis itself... who controls the source of life?',
      ],
    },
    {
      heading: 'Why This Film Matters',
      paragraphs: [
        'This is not a film about filters alone. It is a film about sovereignty, access, memory, and the invisible systems shaping the future of human health.',
        'Thirst is designed as both a documentary and an impact project... one that invites audiences, communities, and partners into a larger conversation about truth, responsibility, and the sacred right to clean water.',
      ],
    },
    {
      heading: 'Get Involved',
      paragraphs: [
        'We are currently seeking community donations, grant funding partners, and aligned co-producers or impact investors to help complete the film and expand its reach into communities that need it most.',
      ],
    },
  ],
  status: 'In Production',
  statusColor: 'text-sky-400 border-sky-800/50 bg-sky-950/30',
  poster: '/thirst-cover.jpg',
  posterDetail: '/thirst-detail.jpg',
  posterPosition: 'center center',
  locations: [],
  details: [
    { label: 'Format', value: 'Feature Documentary' },
    { label: 'Status', value: 'In Production' },
    { label: 'Seeking', value: 'Donations ... grant partners ... co-producers ... impact investors' },
  ],
  cta: { label: 'Support the Film', href: '/collaborate' },
  ctaSecondary: { label: 'Book a Call with Glen', href: '/collaborate' },
};

export const productions: Production[] = [
  blindAmbition,
  blindAdventures,
  thirst,
];

export function getProductionBySlug(slug: string): Production | undefined {
  return productions.find((p) => p.slug === slug);
}
