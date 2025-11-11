import { useState } from 'react'
import { Menu, X, Coffee } from 'lucide-react'

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'Tentang' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white"><Coffee size={18} /></span>
            <span className="text-xl font-semibold tracking-tight">Caffora</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-neutral-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 transition-colors">
              Reservasi
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 text-neutral-700"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 border-t border-neutral-200 pt-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 bg-neutral-900 text-white text-center">
                Reservasi
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
