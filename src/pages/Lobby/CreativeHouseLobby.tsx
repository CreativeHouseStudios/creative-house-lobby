import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Globe, Film, Mic, X } from 'lucide-react';

// ── 3 DOORS (mirrors IDLW "Follow the Water" currents) ──────────────────────
const doors = [
  {
    id: 1,
    title: 'Story Universes',
    description: 'Enter the worlds we are building — movements, causes, and living story ecosystems.',
    icon: Globe,
    path: '/movements',
  },
  {
    id: 2,
    title: 'Production Studio',
    description: 'Explore films, documentary projects, and the production slate emerging from Creative House.',
    icon: Film,
    path: '/studio',           // /production → /studio until dedicated route exists
  },
  {
    id: 3,
    title: 'Voices Network',
    description: 'For creators, researchers, and storytellers who want to build with us.',
    icon: Mic,
    path: '/voices',
  },
];

// ── 3 NETWORK ANCHOR POINTS (mirrors IDLW CredibilityConstellation) ─────────
const networkPoints = [
  {
    id: 1,
    label: 'I Drink Living Water',
    sublabel: 'Water · Health · Environment',
    cx: 180,
    cy: 160,
    slug: 'idlw',
  },
  {
    id: 2,
    label: 'The Simple Plan',
    sublabel: 'Political Reform · Credibility',
    cx: 215,
    cy: 200,
    slug: 'simple-plan',
  },
  {
    id: 3,
    label: 'Advo-Cassie',
    sublabel: 'Justice · Advocacy',
    cx: 155,
    cy: 230,
    slug: 'advo-cassie',
  },
];

export function CreativeHouseLobby() {
  const navigate = useNavigate();
  const doorsRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToDoors = () => {
    doorsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const enterLobby = () => {
    closeModal();
    setTimeout(() => doorsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">

      {/* ── SECTION 1: CINEMATIC ARRIVAL ────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/00-Hero-cover.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none text-white mb-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Creative House Studios
          </h1>

          <div className="flex justify-center my-8">
            <div className="w-48 md:w-64 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-white font-light max-w-4xl mx-auto leading-relaxed mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            A network of story worlds, films, and voices for good.
          </p>

          <p className="text-base md:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            We build the infrastructure behind movements that deserve to be seen, trusted, and shared.
          </p>

          <button
            onClick={openModal}
            className="px-10 py-3 bg-white/10 backdrop-blur-sm border border-white/60 rounded-sm text-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 text-base font-light shadow-lg"
          >
            A Message from Us
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── SECTION 2: CHOOSE YOUR PATH (mirrors "Follow the Water") ─────── */}
      <section
        ref={doorsRef}
        className="relative py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        {/* Hallway glow — warm amber light pooling behind the cards */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 62%, rgba(212,162,76,0.09) 0%, rgba(212,162,76,0.04) 35%, transparent 70%)',
          }}
        />
        {/* Subtle vignette to deepen the edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Top accent */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9972A]/40 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 drop-shadow-lg">
              Choose Your Path
            </h2>
            <p className="text-xl text-white/90 font-light">
              Each door leads somewhere different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {doors.map((door, index) => {
              const Icon = door.icon;
              return (
                <button
                  key={door.id}
                  onClick={() => navigate(door.path)}
                  className="group relative backdrop-blur-md bg-white/[0.08] p-8 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] hover:shadow-[0_8px_48px_0_rgba(201,151,42,0.25)] transition-all duration-500 hover:-translate-y-2 text-left overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Ripple on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#C9972A]/10 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-700" />
                  </div>

                  {/* Top accent glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9972A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-[#C9972A]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon
                      className="relative w-12 h-12 text-[#C9972A] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-[#C9972A]">
                    {door.title}
                  </h3>
                  <p className="relative text-sm text-white/80 font-light leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                    {door.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#1C1410] via-[#C9972A] to-[#1C1410] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9972A]/40 to-transparent" />
      </section>

      {/* ── SECTION 3: FEATURED SPOTLIGHT (mirrors "Watershed Wednesdays") ─ */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          style={{ filter: 'saturate(0.5) brightness(0.5)' }}
        >
          <source src="/credibility-spine-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,151,42,0.06),transparent_65%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-[#C9972A] mb-4">
            NOW DEVELOPING
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Creative House Productions
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed mb-4 max-w-2xl mx-auto">
            Films, documentaries, and story-driven media now taking shape across the Creative House network.
          </p>

          <div className="mt-8 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/studio"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/40 rounded-sm text-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 text-base font-light"
            >
              Enter Production Studio
            </Link>
            <Link
              to="/movements"
              className="text-[#C9972A] hover:text-white transition-colors duration-300 text-sm font-light underline underline-offset-4"
            >
              View Current Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PROOF IN THE NETWORK (mirrors CredibilityConstellation) */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Real Stories in Motion
            </h2>
            <p className="text-xl text-[#C9972A]/80 font-light mb-3">
              Real places. Real projects. Real momentum.
            </p>
            <p className="text-sm text-white/30">
              {networkPoints.length} active story universes
            </p>
          </div>

          {/* SVG network map — same structural pattern as IDLW CredibilityConstellation */}
          <div className="relative max-w-5xl mx-auto">
            <svg viewBox="0 0 1000 500" className="w-full h-auto">
              {/* Simplified world map silhouette */}
              <g opacity="0.12" stroke="#C9972A" strokeWidth="1" fill="none">
                <path d="M 100 150 Q 120 100 180 120 L 220 130 Q 240 140 250 180 L 230 250 Q 200 280 180 270 L 140 260 Q 110 240 100 200 Z" />
                <path d="M 220 300 Q 240 290 260 310 L 270 380 Q 260 420 240 410 L 220 400 Q 210 360 220 300 Z" />
                <path d="M 450 120 Q 480 110 510 130 L 530 150 Q 520 180 500 170 L 460 165 Q 440 150 450 120 Z" />
                <path d="M 480 200 Q 510 190 540 210 L 550 280 Q 540 340 510 350 L 480 340 Q 470 280 480 200 Z" />
                <path d="M 600 100 Q 680 90 750 120 L 780 180 Q 770 220 740 210 L 650 200 Q 610 170 600 100 Z" />
                <path d="M 780 350 Q 820 340 850 360 L 860 400 Q 840 420 820 410 L 790 400 Q 775 380 780 350 Z" />
              </g>

              {/* Dashed connection lines between anchor points */}
              {networkPoints.map((point, i) =>
                networkPoints.slice(i + 1).map((other) => (
                  <line
                    key={`${point.id}-${other.id}`}
                    x1={point.cx}
                    y1={point.cy}
                    x2={other.cx}
                    y2={other.cy}
                    stroke="#C9972A"
                    strokeWidth="0.5"
                    opacity="0.25"
                    strokeDasharray="4 4"
                  />
                ))
              )}

              {/* Anchor points */}
              {networkPoints.map((point) => (
                <g
                  key={point.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/movements/${point.slug}`)}
                >
                  <circle cx={point.cx} cy={point.cy} r="22" fill="#C9972A" opacity="0.08" />
                  <circle cx={point.cx} cy={point.cy} r="12" fill="#C9972A" opacity="0.15" />
                  <circle cx={point.cx} cy={point.cy} r="6"  fill="#C9972A" opacity="0.90" />
                  <circle
                    cx={point.cx}
                    cy={point.cy}
                    r="14"
                    fill="none"
                    stroke="#C9972A"
                    strokeWidth="1.5"
                    opacity="0.5"
                    className="animate-ping"
                  />
                  <text
                    x={point.cx}
                    y={point.cy - 28}
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontFamily="Inter, sans-serif"
                    opacity="0.85"
                  >
                    {point.label}
                  </text>
                  <text
                    x={point.cx}
                    y={point.cy - 16}
                    textAnchor="middle"
                    fill="#C9972A"
                    fontSize="8"
                    fontFamily="Inter, sans-serif"
                    opacity="0.6"
                  >
                    {point.sublabel}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FOOTER (mirrors IDLW footer) ─────────────────────── */}
      <footer className="py-16 px-6 bg-[#000000] border-t border-[#C9972A]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="mb-4">
              <Film className="w-8 h-8 text-[#C9972A] opacity-50 mx-auto" strokeWidth={1.5} />
            </div>
            <p className="text-white font-semibold mb-2 text-lg">Creative House Studios</p>
            <p className="text-gray-400 text-sm font-light">
              Stewarding story worlds, productions, and voices for good.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-[#C9972A]/10">
            <Link to="/movements" className="text-[#C9972A]/70 hover:text-[#C9972A] text-sm font-light transition-colors duration-300">
              Movements
            </Link>
            <span className="text-[#C9972A]/20">•</span>
            <Link to="/studio" className="text-[#C9972A]/70 hover:text-[#C9972A] text-sm font-light transition-colors duration-300">
              Production
            </Link>
            <span className="text-[#C9972A]/20">•</span>
            <Link to="/voices" className="text-[#C9972A]/70 hover:text-[#C9972A] text-sm font-light transition-colors duration-300">
              Voices
            </Link>
            <span className="text-[#C9972A]/20">•</span>
            <Link to="/collaborate" className="text-[#C9972A]/70 hover:text-[#C9972A] text-sm font-light transition-colors duration-300">
              Collaborate
            </Link>
          </div>
        </div>
      </footer>

      {/* ── MESSAGE MODAL ────────────────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ animation: 'fadeIn 0.3s ease' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Panel */}
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-sm shadow-2xl overflow-hidden">

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 text-zinc-500 hover:text-zinc-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-2">Creative House Studios</p>
              <h2 className="text-2xl md:text-3xl text-zinc-100 font-light mb-8">A Message from Us</h2>

              {/* Two video cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                {/* Card 1 — Shelly */}
                <div className="backdrop-blur-md bg-white/[0.04] border border-zinc-800 rounded-sm overflow-hidden">
                  <div className="relative aspect-[9/16] bg-zinc-900">
                    <iframe
                      src="https://app.heygen.com/embeds/bc5367baad4944438910d6094117815a"
                      title="CHS-Lobby Welcome-SF"
                      className="absolute inset-0 w-full h-full"
                      allow="encrypted-media; fullscreen"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-zinc-200 font-light mb-1">Shelly Frank</p>
                    <p className="text-xs text-zinc-500 font-light">Why Creative House Exists</p>
                  </div>
                </div>

                {/* Card 2 — Glen */}
                <div className="backdrop-blur-md bg-white/[0.04] border border-zinc-800 rounded-sm overflow-hidden">
                  <div className="relative aspect-[9/16] bg-zinc-900">
                    <iframe
                      src="https://app.heygen.com/embeds/2075a87b0313460cab6bd67ad356f21d"
                      title="CHS-Lobby Welcome-GK"
                      className="absolute inset-0 w-full h-full"
                      allow="encrypted-media; fullscreen"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-zinc-200 font-light mb-1">Glen Kerby</p>
                    <p className="text-xs text-zinc-500 font-light">Why These Stories Matter</p>
                  </div>
                </div>

              </div>

              {/* Enter lobby CTA */}
              <div className="text-center">
                <button
                  onClick={enterLobby}
                  className="px-10 py-3 bg-zinc-100 text-zinc-950 rounded-sm hover:bg-white transition-colors text-base font-light"
                >
                  Enter the Lobby
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

    </div>
  );
}
