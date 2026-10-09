import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-slate-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Headline & Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-heading">
            {PERSONAL_INFO.fullName}
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-slate-600 tracking-tight">
            Welcome to my personal website!
          </p>
        </div>

        {/* Short Punchy Intro */}
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Specializing in Deep Learning, Computer Vision, and scalable software pipelines. 
          Bridging technical precision with demonstrated organizational leadership.
        </p>

        {/* The 3 Direct Navigation Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          {/* Button 1: Projects */}
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md"
          >
            Projects
          </a>

          {/* Button 2: Skills */}
          <a
            href="#skills"
            className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 text-xs sm:text-sm font-semibold border border-slate-200/90 hover:border-slate-300 transition-all shadow-2xs"
          >
            Skills
          </a>

          {/* Button 3: Experience */}
          <a
            href="#experience"
            className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 text-xs sm:text-sm font-semibold border border-slate-200/90 hover:border-slate-300 transition-all shadow-2xs"
          >
            Experience
          </a>
        </div>

        {/* Subtle Quick Scroll Indicator to Profile & About */}
        <div className="pt-4">
          <a
            href="#about"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            <span>View Profile &amp; Bio</span>
            <ArrowDown className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
