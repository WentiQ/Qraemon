import { QraemonLogo } from './QraemonLogo';
import { ArrowUp, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#15120E] py-14 text-xs text-[#D8D2C2]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <QraemonLogo size={26} />
              <span className="font-extrabold text-base tracking-widest text-[#F3F1EA]">
                QRAEMON
              </span>
            </div>
            
            <p className="text-xs text-[#D8D2C2] leading-relaxed max-w-sm">
              The persistent experience layer for physical AI. Helping deployed machines use accumulated operational experience to make better future decisions.
            </p>

            <div className="pt-1 text-[11px] text-[#B9B2A5]">
              Software Runtime · Embedded Architecture · Physical Intelligence
            </div>
          </div>

          {/* In-page navigation links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F3F1EA] font-bold block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              <a href="#problem" className="hover:text-[#FFB800] transition-colors">The Problem</a>
              <a href="#approach" className="hover:text-[#FFB800] transition-colors">Cognitive Loop</a>
              <a href="#products" className="hover:text-[#FFB800] transition-colors">Software & Embedded</a>
              <a href="#architecture" className="hover:text-[#FFB800] transition-colors">Safety Boundary</a>
              <a href="#validation" className="hover:text-[#FFB800] transition-colors">Validation Principles</a>
              <a href="#roadmap" className="hover:text-[#FFB800] transition-colors">R&D Roadmap</a>
              <a href="#team" className="hover:text-[#FFB800] transition-colors">Founders</a>
              <a href="#contact" className="hover:text-[#FFB800] transition-colors">Pilot Inquiries</a>
            </div>
          </div>

          {/* Contact & Scientific Foundation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F3F1EA] font-bold block mb-3">
              Direct Contact
            </span>
            <p className="text-[11px] text-[#B9B2A5] leading-relaxed">
              Founding Office & Lab Validation:
            </p>
            <a
              href="mailto:dineshpolavarapu66@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#F3F1EA] hover:text-[#FFB800] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>dineshpolavarapu66@gmail.com</span>
            </a>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#B9B2A5] hover:text-[#FFB800] transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#B9B2A5]">
          <p className="max-w-2xl leading-relaxed">
            <strong>Research Notice:</strong> QRAEMON is in early-stage research and development. Technical architectures, benchmark hypotheses, and deployment specifications represent engineering directions under active validation.
          </p>
          <div className="whitespace-nowrap shrink-0">
            © 2026 QRAEMON. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
