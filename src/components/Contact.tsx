import React, { useState } from 'react';
import { Mail, Phone, Check, Copy, MessageSquare, Github, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Contact Information & Channels */}
        <div className="space-y-8 text-center max-w-2xl mx-auto">
          <div>
            <div className="text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider mb-2">
              <span>Contact</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Open to discussions regarding machine learning engineering, internship opportunities, software development, or research collaborations.
            </p>
          </div>

          {/* Direct Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            
            {/* Email Card with Copy Affordance */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-blue-100/60 text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Primary Email</p>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-2xs"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-100/60 text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">WhatsApp / Phone</p>
                  <p className="text-sm font-semibold text-slate-900">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/6281282613740"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat WA</span>
              </a>
            </div>

          </div>

          {/* Social Accounts */}
          <div className="pt-2 flex flex-col items-center">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Professional Channels
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 transition-colors shadow-2xs"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-blue-600 transition-colors shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-pink-600 transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
