import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, BrainCircuit, Database, Globe, Award, Sparkles } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Machine Learning & AI Engineering': <BrainCircuit className="w-5 h-5 text-blue-600" />,
  'Data Analysis & Preprocessing': <Database className="w-5 h-5 text-cyan-600" />,
  'Programming & Core Languages': <Terminal className="w-5 h-5 text-indigo-600" />,
  'Web Application Development': <Globe className="w-5 h-5 text-emerald-600" />,
  'Leadership & Project Execution': <Award className="w-5 h-5 text-amber-600" />,
  'Analytical & Communication': <Sparkles className="w-5 h-5 text-purple-600" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            SKILLS
          </h2>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-slate-300 transition-all space-y-4 shadow-2xs hover:shadow-md"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-blue-600 shadow-2xs">
                  {CATEGORY_ICONS[cat.category] || <Terminal className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-heading">
                    {cat.category}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed min-h-[32px]">
                {cat.description}
              </p>

              {/* Tag Cloud */}
              <div className="pt-3 border-t border-slate-200/70">
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {cat.skills.join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
