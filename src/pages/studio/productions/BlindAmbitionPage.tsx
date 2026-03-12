import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StudioHeader } from '../../../components/studio/StudioHeader';

const sections = [
  {
    label: 'The Journey',
    body: [
      'From the dunes of Dubai to the streets of Rome, the skyline of Paris, and the ascent of Kilimanjaro, Blind Ambition places Chad inside environments that demand trust, adaptability, and relentless determination.',
      'The series is not simply about spectacle. It is about perspective — how adversity can become fuel, how challenge can become transformation, and how a life without sight can still be lived with extraordinary vision.',
    ],
  },
  {
    label: 'Series Vision',
    body: [
      'Each episode blends cinematic action, cultural immersion, and deeply human storytelling. Whether skydiving, climbing, training, or navigating unfamiliar terrain, Chad brings a rare mix of courage, humor, and authority to every environment he enters.',
      'Blind Ambition is designed as both an adventure series and a global story of human resilience.',
    ],
  },
  {
    label: 'Current Opportunity',
    body: [
      'We are currently seeking development partners, co-producers, and strategic sponsors to help bring the first season of Blind Ambition to life.',
      'This is an opportunity to support a cinematic international series built around courage, possibility, and the power of reimagining what limits really are.',
    ],
  },
];

const details = [
  { label: 'Locations', value: 'Rome · Paris · Dubai · Kilimanjaro' },
  { label: 'Format', value: 'Documentary Series' },
  { label: 'Status', value: 'In Development' },
  { label: 'Seeking', value: 'Production partners + aligned sponsors' },
];

export function BlindAmbitionPage() {
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
                  src="/blind-ambition-detail.jpg"
                  alt="Blind Ambition"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Title + intro */}
            <div className="flex-1 flex flex-col justify-end">
              <span className="text-xs tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm font-light text-amber-400 border-amber-800/50 bg-amber-950/30 self-start mb-6">
                In Development
              </span>
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">01</p>
              <h1 className="text-5xl md:text-6xl text-zinc-100 font-light mb-6 leading-tight">
                Blind Ambition
              </h1>
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                An international adventure documentary series following Chad E. Foster as he takes on extraordinary challenges across the world.
              </p>
              <p className="text-base text-zinc-300 font-light leading-relaxed">
                Blind Ambition is a cinematic documentary series in development, following blind entrepreneur, athlete, and global speaker Chad E. Foster through a collection of high-stakes adventures designed to test courage, resilience, and the limits of human possibility.
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
              Express Interest →
            </Link>
            <Link
              to="/collaborate"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              Request the Pitch Deck →
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
