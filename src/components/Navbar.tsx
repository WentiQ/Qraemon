import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { QraemonLogo } from './QraemonLogo';

interface NavbarProps {
  onOpenContact: (mode?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Approach', href: '#approach' },
    { label: 'Products', href: '#products' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Validation', href: '#validation' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F3F1EA]/90 backdrop-blur-md border-b border-[#D8D2C2]/60">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single wordmark lockup */}
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-[#15120E] whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm py-1"
        >
          <QraemonLogo size={28} />
          <span className="font-extrabold tracking-widest text-[19px]">QRAEMON</span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#443E37]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#15120E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FFB800] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenContact('pilot')}
            className="flex items-center gap-2 px-4.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#15120E] bg-[#FFB800] hover:bg-[#e6a600] active:translate-y-0.5 rounded-sm transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15120E] whitespace-nowrap shrink-0"
          >
            <span>Discuss a Pilot</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 text-[#15120E] hover:bg-[#E8E4D9] rounded transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D8D2C2] bg-[#F3F1EA] px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-[15px] font-medium text-[#15120E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#E8E4D9] hover:text-[#FFB800] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('pilot');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#15120E] bg-[#FFB800] hover:bg-[#e6a600] rounded-sm transition-colors"
            >
              <span>Discuss a Pilot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
