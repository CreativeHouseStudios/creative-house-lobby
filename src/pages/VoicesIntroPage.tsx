import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function VoicesIntroPage() {
  return (
    <div className="relative min-h-screen pt-24">
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
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(9, 9, 11, 0.3) 100%)' }}
        />
      </div>

      <div className="motion-reduce:block hidden fixed inset-0 bg-zinc-950" />

      <div className="relative">
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <Link
              to="/voices"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors mb-12 text-sm font-light"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Voices
            </Link>

            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-6xl text-zinc-50 font-light leading-tight">
                Introduction
              </h1>

              <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-sm p-12 md:p-16">
                <p className="text-2xl text-zinc-300 font-light leading-relaxed mb-6">
                  This will become the introduction form.
                </p>
                <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                  For now, we invite you to reach out directly.
                </p>

                <a
                  href="mailto:creativehousestudios.sk@gmail.com"
                  className="inline-block px-10 py-4 bg-zinc-100 text-zinc-950 rounded-sm hover:bg-white transition-colors text-lg font-light"
                >
                  Email Us
                </a>

                <p className="mt-8 text-sm text-zinc-500 font-light">
                  Please include a brief introduction to your work and why you're reaching out.
                </p>
              </div>

              <p className="text-base text-zinc-500 font-light">
                We review all introductions carefully.<br />
                Response times may vary as we build our systems thoughtfully.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
