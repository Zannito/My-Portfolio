import React, { useState } from 'react';
import { Menu, X, Send, Home } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Home Logo */}
        <a 
          href="#" 
          aria-label="Home"
          title="Home"
          className="p-2 rounded-lg text-slate-800 hover:text-blue-600 hover:bg-slate-100 transition-colors flex items-center justify-center"
        >
          <Home className="w-5 h-5" />
        </a>

        {/* Zone 2: 4-6 clean text navigation links in English */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#certifications" className="hover:text-blue-600 transition-colors">Certifications</a>
        </nav>

        {/* Zone 3: CTA Action */}
        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-blue-500/10"
          >
            <span>Get in Touch</span>
            <Send className="w-3 h-3" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 px-6 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
          >
            Featured Projects
          </a>
          <a 
            href="#experience" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
          >
            Experience &amp; Education
          </a>
          <a 
            href="#certifications" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
          >
            Certifications &amp; Awards
          </a>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-3 bg-blue-600 text-white rounded-lg"
            >
              <span>Get in Touch</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
