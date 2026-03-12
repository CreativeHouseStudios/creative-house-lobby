import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StudioHeader } from '../../components/studio/StudioHeader';
import { productions } from '../../data/productions';

export function StudioLandingPage() {
  return (
    <div className="relative min-h-screen">
      <StudioHeader />

      {/* ── FIXED VIDEO BACKGROUND ─────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden motion-reduce:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.6) brightness(0.7)' }}
        >
          <source src="/00-Hero-cover.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(9, 9, 11, 0.4) 100%)' }}
        />
      </div>

      <div className="motion-reduce:block hidden fixed inset-0 bg-zinc-950" />

      <div className="relative">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="pt-48 pb-32 px-6 md:px-12 max-w-[1000px] mx-auto">
          <div className="text-center">
            <p className="text-xs tracking-[0.4em] text-zinc-500 uppercase mb-8">
              Creative House Studios
            </p>
            <h1 className="text-6xl md:text-7xl mb-6 text-zinc-50 font-light leading-tight">
              Creative House Productions
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              Stories that move people.<br />
              Systems that move culture.
            </p>
          </div>
        </section>

        {/* ── CURRENT SLATE ────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase">Current Slate</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productions.map((prod) => (
                <Link
                  key={prod.slug}
                  to={`/productions/${prod.slug}`}
                  className="group backdrop-blur-md bg-white/[0.04] border border-zinc-800 rounded-sm p-8 hover:border-zinc-600 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between min-h-[340px] cursor-pointer"
                >
                  {/* Status badge */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-8 h-px bg-zinc-700 group-hover:bg-zinc-500 transition-colors duration-300 mt-3" />
                    <span className={`text-xs tracking-widest uppercase px-3 py-1 border rounded-sm font-light ${prod.statusColor}`}>
                      {prod.status}
                    </span>
                  </div>

                  {/* Title block */}
                  <div className="flex-1">
                    <h3 className="text-2xl text-zinc-100 font-light mb-1 group-hover:text-white transition-colors duration-300">
                      {prod.title}
                    </h3>
                    <p className="text-xs tracking-[0.2em] text-zinc-600 uppercase mb-5 font-light">
                      {prod.subtitle}
                    </p>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {prod.teaser}
                    </p>
                  </div>

                  {/* Locations */}
                  {prod.locations.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-3">
                      {prod.locations.map((loc) => (
                        <span key={loc} className="text-xs text-zinc-600 tracking-widest uppercase font-light">
                          {loc}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIEW ALL ─────────────────────────────────────────────────────── */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <Link
              to="/studio/productions"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              View all Productions →
            </Link>
          </div>
        </section>

        {/* ── THE STUDIO ───────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

              {/* Left: capabilities */}
              <div>
                <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">The Studio</p>
                <p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">
                  Creative House Productions combines:
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Documentary filmmaking',
                    'AI-assisted production workflows',
                    'Lightweight global production crews',
                    'Digital distribution infrastructure',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                      <span className="w-4 h-px bg-zinc-700 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: leadership */}
              <div>
                <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">Leadership</p>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-base text-zinc-100 font-light">Glen Kerby</p>
                    <p className="text-xs tracking-[0.2em] text-zinc-600 uppercase mt-1 font-light">Director · Producer</p>
                  </div>
                  <div>
                    <p className="text-base text-zinc-100 font-light">Shelly Frank</p>
                    <p className="text-xs tracking-[0.2em] text-zinc-600 uppercase mt-1 font-light">Executive Producer · Systems Architect</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="py-12 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <p className="text-zinc-700 text-sm">© {new Date().getFullYear()} Creative House Studios</p>
            <Link to="/" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-300 text-sm transition-colors">
              <ArrowLeft className="w-3 h-3" />
              Back to Lobby
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
