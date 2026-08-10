'use client';

import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { site } from '@/lib/site';

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#ai', label: 'AI' },
  { href: '#self-host', label: 'Self-host' },
  { href: '#demo', label: 'Demo' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-950/80 backdrop-blur-md">
      <nav className="section flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-white">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white"
          >
            V
          </span>
          {site.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-surface-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.github}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-sm text-surface-100 transition-colors hover:bg-white/10"
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-surface-300 hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="section flex flex-col py-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-surface-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a href={site.github} className="py-2.5 text-sm text-surface-300 hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
