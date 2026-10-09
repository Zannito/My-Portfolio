import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-28 md:py-32 bg-white text-slate-900 border-t border-slate-100 overflow-hidden"
    >
      {/* Subtle ambient lighting for clean white theme */}
      <div 
        aria-hidden="true" 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-pink-100/30 rounded-full blur-[130px] pointer-events-none -translate-x-1/3" 
      />
      <div 
        aria-hidden="true" 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-blue-100/30 rounded-full blur-[130px] pointer-events-none translate-x-1/3" 
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title & Subtitle Centered */}
        <div className="text-center mb-12 sm:mb-14 space-y-3">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading">
            My Contact
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Looking forward to work with you!
          </p>
        </div>

        {/* Contact Links List - Centered Container with Left Aligned Items */}
        <div className="w-fit mx-auto space-y-5 sm:space-y-6">
          
          {/* 1. Instagram */}
          <a
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group"
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg 
                className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
            <span className="font-medium tracking-wide">
              {PERSONAL_INFO.instagramHandle}
            </span>
          </a>

          {/* 2. LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group"
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg 
                className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.99 0-1.8.8-1.8 1.79 0 .99.81 1.8 1.8 1.8.99 0 1.8-.81 1.8-1.8 0-.99-.81-1.79-1.8-1.79m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
              </svg>
            </div>
            <span className="font-medium tracking-wide">
              linkedin.com/in/zannitoprawoko
            </span>
          </a>

          {/* 3. WhatsApp / Phone */}
          <a
            href="https://wa.me/6281282613740"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group"
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg 
                className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.3z"/>
              </svg>
            </div>
            <span className="font-medium tracking-wide">
              {PERSONAL_INFO.phone}
            </span>
          </a>

          {/* 4. Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group"
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg 
                className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <span className="font-medium tracking-wide">
              {PERSONAL_INFO.email}
            </span>
          </a>

          {/* 5. GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group"
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg 
                className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </div>
            <span className="font-medium tracking-wide">
              github.com/Zannito
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};
