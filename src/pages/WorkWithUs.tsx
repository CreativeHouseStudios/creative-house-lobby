import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function WorkWithUs() {
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
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-light mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the Lobby
            </Link>

            <h1 className="text-6xl md:text-7xl mb-6 text-zinc-50 font-light">
              For Voices Doing Good
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              If you're creating work that helps people orient, heal, or understand, you're not alone.
            </p>
          </div>
        </section>

        {/* ── WHAT THIS IS ─────────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-sm p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8">
              What This Is
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                Creative House Studios is a curatorial studio.
              </p>
              <p>
                We work with filmmakers, writers, musicians, and sponsors who care more about impact than attention.
              </p>
              <p className="text-zinc-400">
                We don't rush work to market.<br />
                We don't strip stories of nuance.<br />
                And we don't publish anything we wouldn't stand behind long-term.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOR CREATORS ─────────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8">
            For Creators
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
            <p>Creative House supports work that doesn't fit neatly inside algorithms or trends.</p>
          </div>

          <div className="mt-10 pl-6 border-l-2 border-zinc-800 space-y-4 mb-10">
            <p className="text-base text-zinc-400 font-light">Original films and documentaries</p>
            <p className="text-base text-zinc-400 font-light">Written works and essays</p>
            <p className="text-base text-zinc-400 font-light">Music created for grounding or reflection</p>
          </div>

          <div className="space-y-2 text-lg text-zinc-300 font-light">
            <p>Submission does not guarantee publication.</p>
            <p className="text-zinc-100">Careful review does.</p>
          </div>
        </section>

        {/* ── FOR SPONSORS & FOUNDATIONS ───────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-8">
            For Sponsors &amp; Foundations
          </h2>

          <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed mb-10">
            <p>Some projects are meant to stay free.</p>
            <p className="text-zinc-400">Sponsors help make that possible quietly.</p>
          </div>

          <div className="pl-6 border-l-2 border-zinc-800 space-y-4 mb-10">
            <p className="text-base text-zinc-400 font-light">Support access without advertising pressure</p>
            <p className="text-base text-zinc-400 font-light">Fund stories and tools that remain open to the public</p>
            <p className="text-base text-zinc-400 font-light">Trust Creative House to curate with integrity</p>
          </div>

          <p className="text-lg text-zinc-300 font-light">
            Sponsorship is stewardship, not branding placement.
          </p>
        </section>

        {/* ── SHARED VALUES ─────────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-10">
            Shared Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Dignity over virality',
              'Context over outrage',
              'Steadiness over urgency',
              'Human pace over platform metrics',
            ].map((value) => (
              <div
                key={value}
                className="backdrop-blur-md bg-white/[0.04] border border-zinc-800 rounded-sm p-6"
              >
                <p className="text-base text-zinc-300 font-light">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 max-w-[900px] mx-auto border-t border-zinc-900">
          <div className="text-center">
            <a
              href="mailto:creativehousestudios.sk@gmail.com"
              className="inline-block px-10 py-4 bg-zinc-100 text-zinc-950 rounded-sm hover:bg-white transition-colors text-lg font-light"
            >
              Start a Conversation
            </a>
            <p className="mt-4 text-sm text-zinc-500 font-light">
              creativehousestudios.sk@gmail.com
            </p>
            <p className="mt-6 text-sm text-zinc-500 font-light">
              No forms. No pitches. Just an introduction.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
