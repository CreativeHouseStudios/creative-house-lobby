import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function CreatorNetwork() {
  return (
    <div className="relative min-h-screen pt-24">
      {/* ── FIXED VIDEO BACKGROUND ─────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden motion-reduce:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.85)' }}
        >
          <source src="/05-Collaborate.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(9, 9, 11, 0.3) 100%)' }}
        />
      </div>

      <div className="motion-reduce:block hidden fixed inset-0 bg-zinc-950" />

      <div className="relative">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/30 border border-zinc-700/50 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-zinc-400 rounded-full" />
              <span className="text-sm text-zinc-300 font-light">Voices Network — Open for Introductions</span>
            </div>

            <h1 className="text-6xl md:text-7xl mb-6 text-zinc-50 font-light">
              For Voices Doing Good
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              If you create films, music, or written work that helps people, you may belong here.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the Lobby
            </Link>
          </div>
        </section>

        {/* ── SECTION 1: WHAT THIS IS ──────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-sm p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8">
              What This Is
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                Creative House Studios actively curates and publishes creative work from people with a voice for good.
              </p>
              <p>
                We are building a social broadcast channel for films, stories, music, and books that carry meaning, context, and care. Some work lives here first. Some arrives through relationship. All of it is handled with intention.
              </p>
              <p className="text-zinc-400">
                We curate slowly and thoughtfully. This takes time, and we will not rush it.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WHO WE MAY WORK WITH ─────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8">
            Who We May Work With
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
            <p>If you are a filmmaker, writer, or musician:</p>
            <p>You may create work that is thoughtful, complex, or difficult to place in existing platforms.</p>
            <p>You may care more about who sees your work than how many people see it.</p>
            <p>You may value stewardship over virality.</p>
          </div>

          <div className="mt-10 pl-6 border-l-2 border-zinc-800 space-y-4">
            <p className="text-base text-zinc-400 font-light">Documentary films and narrative work</p>
            <p className="text-base text-zinc-400 font-light">Written essays and survivor narratives</p>
            <p className="text-base text-zinc-400 font-light">Music for grounding, regulation, or reflection</p>
          </div>
        </section>

        {/* ── SECTION 3: OUR APPROACH ──────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8">
            Our Approach
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
            <p>We curate slowly and thoughtfully.</p>
            <p>This means:</p>
          </div>

          <div className="mt-8 pl-6 border-l-2 border-zinc-800 space-y-4 mb-10">
            <p className="text-base text-zinc-400 font-light">We do not promise publication or outcomes</p>
            <p className="text-base text-zinc-400 font-light">We maintain editorial independence</p>
            <p className="text-base text-zinc-400 font-light">We prioritize dignity and context over reach</p>
          </div>

          <div className="space-y-4 text-lg text-zinc-300 font-light leading-relaxed">
            <p className="text-zinc-400">
              Over time, as communities grow, some creators may choose to share their work through Creative House.
            </p>
            <p>This is not a submission portal.</p>
            <p className="text-zinc-100">It is an invitation to introduce yourself.</p>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="text-center">
            <Link
              to="/voices-intro"
              className="inline-block px-10 py-4 bg-zinc-100 text-zinc-950 rounded-sm hover:bg-white transition-colors text-lg font-light"
            >
              Start a Conversation
            </Link>
            <p className="mt-6 text-sm text-zinc-500 font-light">
              No pitches. No promises. Just an introduction.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
