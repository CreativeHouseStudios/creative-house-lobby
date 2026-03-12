import { Link } from 'react-router-dom';
import { StudioHeader } from '../components/studio/StudioHeader';

const movements = [
  {
    title: 'I Drink Living Water',
    description: 'Water, health, ecology, innovation',
    slug: 'idlw',
    video: '/001-IDLW.mp4',
  },
  {
    title: 'The Simple Plan',
    description: 'Recovery stories and healing music',
    slug: 'simple-plan',
    video: '/02-TheSimplePlan.mp4',
  },
  {
    title: 'Advo-Cassie',
    description: 'Stories and systems for people navigating coercive separation',
    slug: 'advo-cassie',
    video: '/03-Advo-Cassie.mp4',
  },
];

export function MovementIndex() {
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
              Creative House Projects
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              Story universes built for movements that deserve to be seen, trusted, and shared.
            </p>
          </div>
        </section>

        {/* ── MOVEMENT CARDS ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase">Story Universes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {movements.map((m) => (
                <Link
                  key={m.slug}
                  to={`/movements/${m.slug}`}
                  className="group relative overflow-hidden rounded-sm aspect-[3/4] md:aspect-[2/3] block"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={m.video} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl text-white font-light mb-1 leading-snug">
                      {m.title}
                    </h2>
                    <p className="text-sm text-white/60 font-light mb-4 leading-relaxed">
                      {m.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/80 group-hover:text-white group-hover:gap-3 transition-all duration-300 font-light">
                      Explore
                      <span className="text-base leading-none">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTEXT NOTE ────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl text-zinc-300 font-light mb-4">What is a Creative House Project?</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Each project is a fully-realized storytelling ecosystem — built on the Creative House Credibility Spine, delivered through a dedicated Lobby Engine, and amplified through automated distribution systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-zinc-300 font-light mb-4">Proposing a Project</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Creative House builds project universes for movements, causes, and investigations that have credibility behind them. If you have a story,{' '}
                <Link to="/collaborate" className="text-zinc-300 hover:text-zinc-100 transition-colors">
                  start a conversation
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="py-12 px-6 md:px-12 border-t border-zinc-900">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <p className="text-zinc-700 text-sm">© {new Date().getFullYear()} Creative House Studios</p>
            <Link to="/" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-300 text-sm transition-colors">
              ← Back to Lobby
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
