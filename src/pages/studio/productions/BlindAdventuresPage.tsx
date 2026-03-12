import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StudioHeader } from '../../../components/studio/StudioHeader';

const sections = [
  {
    label: 'The Series',
    body: [
      'From frozen racecourses and deep boreal forest trails to bear country, mountain terrain, and remote historical landscapes, Blind Adventures captures the reality of exploration when every step requires trust, preparation, and resolve.',
      'At the center of the series is Ron Walsh — a blind adventurer whose philosophy is simple: the larger the obstacle, the greater the adventure. Alongside guides, collaborators, and returning cast members including Ashlyn George, the series reveals not only the intensity of the physical journeys, but the deeper lessons they uncover about fear, teamwork, endurance, and hope.',
    ],
  },
  {
    label: 'Release + Reach',
    body: [
      'Blind Adventures has been released through WPBS/PBS and continues to build audience reach across public broadcast and streaming platforms. The project has already established the visual and emotional DNA of the series, and now stands ready for its next chapter.',
    ],
  },
  {
    label: 'Season 3 Opportunity',
    body: [
      'We are currently seeking aligned funding and production partners for Season 3.',
      'The next chapter expands the scale of the adventure, the cinematic quality of the field production, and the opportunity for mission-aligned sponsors, underwriters, and creative collaborators to become part of a series built around courage, exploration, and the human spirit.',
    ],
  },
];

const details = [
  { label: 'Network', value: 'WPBS/PBS' },
  { label: 'Streaming', value: 'PBS Passport + Hulu' },
  { label: 'Status', value: 'Released — currently seeking Season 3 funding partners' },
];

export function BlindAdventuresPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      <main className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">

          {/* Back link */}
          <Link
            to="/studio/productions"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-300 text-sm transition-colors mb-16 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            All Productions
          </Link>

          {/* Hero block */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-24">
            {/* Poster */}
            <div className="w-full md:w-[240px] flex-shrink-0">
              <div className="relative w-full md:w-[240px] aspect-[2/3] rounded-sm overflow-hidden border border-zinc-800 bg-zinc-900">
                <img
                  src="/blind-adventures-detail.jpg"
                  alt="Blind Adventures"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Title + intro */}
            <div className="flex-1 flex flex-col justify-end">
              <span className="text-xs tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm font-light text-emerald-400 border-emerald-800/50 bg-emerald-950/30 self-start mb-6">
                Released
              </span>
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">02</p>
              <h1 className="text-5xl md:text-6xl text-zinc-100 font-light mb-6 leading-tight">
                Blind Adventures
              </h1>
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                A released adventure documentary series following blind explorer Ron Walsh through some of the world's most demanding wilderness environments.
              </p>
              <p className="text-base text-zinc-300 font-light leading-relaxed">
                Blind Adventures is a cinematic adventure documentary series that follows Ron Walsh as he takes on extraordinary physical and environmental challenges in remote wilderness settings. Already released through the PBS ecosystem, the series combines breathtaking landscapes, real endurance, and a powerful message about resilience, courage, and what it means to move through the world beyond limitation.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-0">
            {sections.map(({ label, body }) => (
              <div key={label} className="py-16 border-t border-zinc-900">
                <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">{label}</p>
                <div className="flex flex-col gap-5 max-w-[680px]">
                  {body.map((para, i) => (
                    <p key={i} className="text-base text-zinc-400 font-light leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Metadata */}
          <div className="py-16 border-t border-zinc-900">
            <div className="flex flex-col gap-2 pl-4 border-l border-zinc-800">
              {details.map(({ label, value }) => (
                <p key={label} className="text-sm text-zinc-500 font-light">
                  <span className="text-zinc-600">{label}: </span>{value}
                </p>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-8 border-t border-zinc-900 flex flex-wrap gap-8 items-center">
            <Link
              to="/collaborate"
              className="text-sm text-zinc-100 hover:text-white transition-colors tracking-wide border border-zinc-700 hover:border-zinc-400 px-6 py-3 rounded-sm"
            >
              Explore Partnership Opportunities →
            </Link>
            <Link
              to="/collaborate"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              Support Season 3 →
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
