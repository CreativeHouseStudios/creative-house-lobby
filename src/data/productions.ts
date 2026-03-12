// src/data/productions.ts
// Single source of truth for all film/production data.

export type ProductionStatus = 'Released' | 'In Development' | 'In Production';

export interface ProductionDetail {
  label: string;
  value: string;
}

export interface Production {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  teaser: string;
  synopsis: string;
  body: string[];
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
    'An international adventure documentary series following blind entrepreneur and athlete Chad E. Foster as he takes on extraordinary challenges across the world.',
  synopsis:
    'Blind Ambition is a six-episode cinematic series exploring human resilience through extreme environments, cultural encounters, and personal transformation. Hosted by international speaker and business leader Chad E. Foster, the series travels to iconic global destinations where physical challenge meets profound personal insight.',
  body: [
    'From climbing historic landmarks to navigating unfamiliar terrain and pushing the limits of endurance, each episode blends breathtaking adventure with a deeper message: our lives are not defined by what we see, but by what we believe is possible.',
  ],
  status: 'In Development',
  statusColor: 'text-amber-400 border-amber-800/50 bg-amber-950/30',
  poster: '/blind-ambition-cover.jpg',
  posterDetail: '/blind-ambition-detail.jpg',
  posterPosition: 'center center',
  locations: ['Rome', 'Paris', 'Dubai', 'Kilimanjaro'],
  details: [
    { label: 'Locations', value: 'Rome · Paris · Dubai · Kilimanjaro' },
    { label: 'Format', value: 'Documentary Series' },
    { label: 'Status', value: 'In Development — seeking production partners' },
  ],
  cta: { label: 'Express Interest', href: '/collaborate' },
};

const blindAdventures: Production = {
  slug: 'blind-adventures',
  index: '02',
  title: 'Blind Adventures',
  subtitle: 'Adventure Documentary Series',
  teaser:
    'A wilderness adventure documentary series following blind explorer Ron Walsh as he navigates some of the most remote and demanding landscapes on earth.',
  synopsis:
    'Blind Adventures captures the raw experience of exploration beyond sight — from deep boreal forests and frozen wilderness trails to high-risk endurance challenges. Each journey reveals the resilience, teamwork, and mental strength required to overcome obstacles that most would never attempt.',
  body: [
    'More than an adventure series, the project explores the deeper relationship between courage, perception, and the human spirit in the wild.',
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
    { label: 'Status', value: 'Released — additional seasons in development' },
  ],
  cta: { label: 'Express Interest', href: '/collaborate' },
};

const thirst: Production = {
  slug: 'thirst',
  index: '03',
  title: 'Thirst',
  subtitle: 'Feature Documentary',
  teaser:
    "A feature documentary investigating the hidden systems controlling the world's most essential resource — water.",
  synopsis:
    "Thirst follows filmmaker Glen Kerby as a personal search for clean water unfolds into a global story of infrastructure decay, environmental injustice, and the fight to reclaim water as a living resource rather than a commodity.",
  body: [
    'Filmed across North America and featuring scientists, Indigenous leaders, and frontline communities, the film explores the deeper question beneath the water crisis:',
    'Who controls the source of life?',
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
    { label: 'Seeking', value: 'Donations · grant partners · co-producers · impact investors' },
  ],
  cta: { label: 'Express Interest', href: '/collaborate' },
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
