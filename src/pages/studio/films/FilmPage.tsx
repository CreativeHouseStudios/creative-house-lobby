import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StudioHeader } from '../../../components/studio/StudioHeader';
import { getProductionBySlug } from '../../../data/productions';

export function FilmPage() {
  const { slug } = useParams<{ slug: string }>();
  const p = slug ? getProductionBySlug(slug) : undefined;

  if (!p) {
    return (
      <div className="bg-zinc-950 min-h-screen">
        <StudioHeader />
        <div className="pt-32 pb-32 px-6 md:px-12 max-w-[900px] mx-auto text-center">
          <h1 className="text-3xl text-zinc-100 font-light mb-6">Film not found</h1>
          <Link to="/studio" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            ← Back to Studio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <StudioHeader />

      <main className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">

          {/* Back link */}
          <Link
            to="/productions"
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
                  src={p.posterDetail || p.poster}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: p.posterPosition }}
                />
              </div>
            </div>

            {/* Title + intro */}
            <div className="flex-1 flex flex-col justify-end">
              <span className={`text-xs tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm font-light self-start mb-6 ${p.statusColor}`}>
                {p.status}
              </span>
              <p className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">{p.index}</p>
              <h1 className="text-5xl md:text-6xl text-zinc-100 font-light mb-6 leading-tight">
                {p.title}
              </h1>
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                {p.teaser}
              </p>
              <p className="text-base text-zinc-300 font-light leading-relaxed">
                {p.synopsis}
              </p>
            </div>
          </div>

          {/* Named sections */}
          {p.sections.map((section) => (
            <div key={section.heading} className="py-16 border-t border-zinc-900">
              <h2 className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">{section.heading}</h2>
              <div className="flex flex-col gap-5 max-w-[680px]">
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="text-base text-zinc-400 font-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Metadata */}
          {p.details.length > 0 && (
            <div className="py-16 border-t border-zinc-900">
              <div className="flex flex-col gap-2 pl-4 border-l border-zinc-800">
                {p.details.map(({ label, value }) => (
                  <p key={label} className="text-sm text-zinc-500 font-light">
                    <span className="text-zinc-600">{label}: </span>{value}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="pt-8 border-t border-zinc-900 flex flex-wrap gap-8 items-center">
            {p.cta.href.startsWith('/') ? (
              <Link
                to={p.cta.href}
                className="text-sm text-zinc-100 hover:text-white transition-colors tracking-wide border border-zinc-700 hover:border-zinc-400 px-6 py-3 rounded-sm"
              >
                {p.cta.label} →
              </Link>
            ) : (
              <a
                href={p.cta.href}
                className="text-sm text-zinc-100 hover:text-white transition-colors tracking-wide border border-zinc-700 hover:border-zinc-400 px-6 py-3 rounded-sm"
              >
                {p.cta.label} →
              </a>
            )}
            {p.ctaSecondary && (
              p.ctaSecondary.href.startsWith('/') ? (
                <Link
                  to={p.ctaSecondary.href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
                >
                  {p.ctaSecondary.label} →
                </Link>
              ) : (
                <a
                  href={p.ctaSecondary.href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
                >
                  {p.ctaSecondary.label} →
                </a>
              )
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
