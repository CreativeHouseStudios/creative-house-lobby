import { Link } from 'react-router-dom';
import { StudioHeader } from '../../components/studio/StudioHeader';
import { productions } from '../../data/productions';

export function ProductionsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      <main className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">

          {/* Page header */}
          <div className="mb-24">
            <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-4">Creative House Studios</p>
            <h1 className="text-5xl md:text-7xl text-zinc-100 font-light mb-6">Productions</h1>
            <p className="text-lg text-zinc-500 font-light leading-relaxed">
              Films and documentaries produced or in development by Creative House Studios.
            </p>
          </div>

          {/* Stacked production sections */}
          <div className="flex flex-col gap-0">
            {productions.map((p) => (
              <div key={p.index} className="py-16 border-t border-zinc-900">
                <div className="flex flex-col md:flex-row gap-10 md:gap-14">

                  {/* Poster — stacks above copy on mobile */}
                  <div className="w-full md:w-[220px] flex-shrink-0">
                    <div className="relative w-full md:w-[220px] aspect-[2/3] rounded-sm overflow-hidden border border-zinc-800 bg-zinc-900">
                      {p.poster ? (
                        <img
                          src={p.poster}
                          alt={p.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: p.posterPosition }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-zinc-700 rounded-sm m-2">
                          <div className="w-8 h-px bg-zinc-700" />
                          <p className="text-xs text-zinc-600 tracking-widest uppercase text-center px-4">Poster</p>
                          <div className="w-8 h-px bg-zinc-700" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-6 mb-8 flex-wrap">
                      <div>
                        <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">{p.index}</p>
                        <h2 className="text-3xl md:text-4xl text-zinc-100 font-light leading-tight">{p.title}</h2>
                      </div>
                      <span className={`text-xs tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm font-light ${p.statusColor}`}>
                        {p.status}
                      </span>
                    </div>

                    <p className="text-base text-zinc-400 font-light leading-relaxed mb-6">
                      {p.synopsis}
                    </p>

                    {p.body.length > 0 && (
                      <div className="flex flex-col gap-4 mb-8">
                        {p.body.map((para, i) => (
                          <p key={i} className="text-sm text-zinc-500 font-light leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    )}

                    {p.details.length > 0 && (
                      <div className="flex flex-col gap-2 mb-8 pl-4 border-l border-zinc-800">
                        {p.details.map(({ label, value }) => (
                          <p key={label} className="text-sm text-zinc-500 font-light">
                            <span className="text-zinc-600">{label}: </span>{value}
                          </p>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/productions/${p.slug}`}
                      className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
                    >
                      View Film →
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="pt-16 border-t border-zinc-900">
            <p className="text-sm text-zinc-600 font-light leading-relaxed max-w-xl">
              Creative House Studios develops films that work in tandem with its story amplification infrastructure — ensuring each production reaches the audience it was made for.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                to="/movements"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
              >
                View Story Universes →
              </Link>
              <Link
                to="/collaborate"
                className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors tracking-wide"
              >
                Collaborate with us →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
