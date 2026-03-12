import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StudioHeader } from '../../../components/studio/StudioHeader';

const sections = [
  {
    label: 'Synopsis',
    body: [
      'Thirst is a feature documentary following Glen Kerby as a personal search for truth unfolds into a wider investigation of the global water crisis. From aging pipes and poisoned communities to indigenous voices reclaiming sacred sources, the film reveals how water sits at the intersection of health, environment, freedom, and survival.',
      'Shot across North America with expert voices, frontline communities, and cinematic landscapes, Thirst asks a deeper question beneath the crisis itself — who controls the source of life?',
    ],
  },
  {
    label: 'Why This Film Matters',
    body: [
      'This is not a film about filters alone. It is a film about sovereignty, access, memory, and the invisible systems shaping the future of human health.',
      'Thirst is designed as both a documentary and an impact project — one that invites audiences, communities, and partners into a larger conversation about truth, responsibility, and the sacred right to clean water.',
    ],
  },
  {
    label: 'Get Involved',
    body: [
      'We are currently seeking community donations, grant funding partners, and aligned co-producers or impact investors to help complete the film and expand its reach into communities that need it most.',
    ],
  },
];

const details = [
  { label: 'Format', value: 'Feature Documentary' },
  { label: 'Status', value: 'In Production' },
  { label: 'Seeking', value: 'Donations · grant partners · co-producers · impact investors' },
];

export function ThirstPage() {
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
                  src="/thirst-detail.jpg"
                  alt="Thirst"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Title + intro */}
            <div className="flex-1 flex flex-col justify-end">
              <span className="text-xs tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm font-light text-sky-400 border-sky-800/50 bg-sky-950/30 self-start mb-6">
                In Production
              </span>
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">03</p>
              <h1 className="text-5xl md:text-6xl text-zinc-100 font-light mb-6 leading-tight">
                Thirst
              </h1>
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                A feature documentary investigating the hidden systems controlling the world's most essential resource — water.
              </p>
              <p className="text-base text-zinc-300 font-light leading-relaxed">
                What begins as one man's search for clean water expands into a larger story about infrastructure, power, contamination, and the fight to reclaim water as a living resource rather than a commodity.
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
              Support the Film →
            </Link>
            <Link
              to="/collaborate"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              Book a Call with Glen →
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
