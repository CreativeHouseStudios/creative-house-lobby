import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const collections = [
  {
    title: 'Stories of Orientation',
    description: 'Documentary shorts, survivor narratives, and first-person essays',
    items: [
      { title: 'Finding Ground', description: 'A documentary about recovery' },
      { title: 'Quiet Voices', description: 'Stories of resilience' },
      { title: 'The Long Path', description: 'Essays on healing' },
    ],
  },
  {
    title: 'Music for Stillness',
    description: 'Instrumental, ambient, and grounding soundscapes',
    items: [
      { title: 'Morning Light', description: 'Gentle acoustic meditation' },
      { title: 'Breath and Space', description: 'Ambient soundscape' },
      { title: 'River Song', description: 'Nature and strings' },
    ],
  },
  {
    title: 'Education Without Agenda',
    description: 'Explainers, conversations, and context without persuasion',
    items: [
      { title: 'Understanding Water Systems', description: 'Ecology and infrastructure' },
      { title: 'Conversations on Care', description: 'Healthcare perspectives' },
      { title: 'Context Matters', description: 'Critical thinking toolkit' },
    ],
  },
];

const channels = [
  {
    title: 'Advo-Cassie Stories',
    description: 'Documentation and clarity for complex situations',
    path: '/movements/advo-cassie',
  },
  {
    title: 'The Simple Plan Stories',
    description: 'Recovery narratives and grounding music',
    path: '/movements/simple-plan',
  },
  {
    title: 'I Drink Living Water Stories',
    description: 'Water, health, and ecological understanding',
    path: '/movements/idlw',
  },
];

export function StoryLibrary() {
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
          <source src="/04-Stories.mp4" type="video/mp4" />
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
        <section className="py-32 px-6 md:px-12 max-w-[900px] mx-auto">
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-light mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the Lobby
            </Link>

            <h1 className="text-5xl md:text-6xl mb-6 text-zinc-50 font-light leading-tight">
              Stories that help us remember what matters.
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-[700px] mx-auto">
              Films, music, and written works curated by Creative House Studios.<br />
              Created with care. Shared with permission. Offered without pressure.
            </p>
          </div>
        </section>

        {/* ── HOW TO EXPLORE ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-[600px] mx-auto">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-sm p-8 md:p-10">
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed text-center">
                There is no right order here.<br /><br />
                Some people watch.<br />
                Some listen.<br />
                Some read.<br /><br />
                You can move slowly, or not at all.
              </p>
            </div>
          </div>
        </section>

        {/* ── FEATURED COLLECTIONS ─────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12 space-y-20">
          {collections.map((collection) => (
            <div key={collection.title} className="max-w-[1400px] mx-auto">
              <div className="mb-8 border-t border-zinc-900 pt-16">
                <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">Collection</p>
                <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-2">
                  {collection.title}
                </h2>
                <p className="text-base text-zinc-500 font-light">
                  {collection.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {collection.items.map((item) => (
                  <div
                    key={item.title}
                    className="group backdrop-blur-md bg-white/[0.04] border border-zinc-800 rounded-sm p-8 hover:border-zinc-600 hover:bg-white/[0.07] transition-all duration-300"
                  >
                    <div className="mb-4">
                      <div className="w-8 h-px bg-zinc-700 group-hover:bg-zinc-500 transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg text-zinc-200 font-light mb-2 group-hover:text-zinc-50 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── PROJECT CHANNELS ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12 border-t border-zinc-900 pt-16">
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">Story Universes</p>
              <h2 className="text-3xl md:text-4xl text-zinc-100 font-light mb-4">
                Project Channels
              </h2>
              <p className="text-lg text-zinc-500 font-light">
                Some stories live inside specific worlds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {channels.map((channel) => (
                <Link
                  key={channel.title}
                  to={channel.path}
                  className="group backdrop-blur-md bg-white/[0.04] border border-zinc-800 rounded-sm p-8 hover:border-zinc-600 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="text-xl text-zinc-100 font-light mb-3 group-hover:text-white transition-colors duration-300">
                    {channel.title}
                  </h3>
                  <p className="text-base text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                    {channel.description}
                  </p>
                  <div className="mt-6 text-xs tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 uppercase">
                    Enter →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER NOTE ──────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-[700px] mx-auto text-center border-t border-zinc-900 pt-16">
            <p className="text-base text-zinc-500 font-light leading-relaxed">
              Creative House Studios curates work that prioritizes dignity, context, and care.<br /><br />
              Not everything here is easy.<br />
              Everything here is intentional.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
