import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function StudioHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-900">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden md:inline">Lobby</span>
        </Link>

        <span className="text-xs tracking-[0.2em] text-zinc-600 uppercase hidden md:inline">
          Production Studio
        </span>
      </div>
    </header>
  );
}
