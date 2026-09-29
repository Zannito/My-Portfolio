import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:py-20 border-b border-slate-200/80 bg-white overflow-hidden">
      {/* Subtle ambient lighting for light theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline and Bio */}
          <div className="sm:col-span-7 lg:col-span-7 space-y-5 lg:space-y-6">
            
            {/* Zero-pill metadata kicker (Depok removed as requested) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-600">
              <span>{PERSONAL_INFO.institution}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Computer Science Undergraduate</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance font-heading">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700">
                Machine Learning Engineer &amp; Software Developer
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl text-balance">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Interactive Action: Clean primary CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-blue-500/10"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Channels with direct links */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-slate-900 flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-slate-900 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={PERSONAL_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-slate-900 flex items-center gap-1.5 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>{PERSONAL_INFO.instagramHandle}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Portrait Card */}
          <div className="sm:col-span-5 lg:col-span-5 flex justify-center sm:justify-end">
            <div className="w-full max-w-[280px] sm:max-w-xs lg:max-w-sm rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/40 relative group">
              
              {/* Photo Container */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60">
                <img 
                  src={PERSONAL_INFO.avatar} 
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Subtle scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-white font-bold text-lg leading-tight font-heading">
                    {PERSONAL_INFO.fullName}
                  </p>
                  <p className="text-xs text-slate-200 mt-1">
                    {PERSONAL_INFO.title}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
