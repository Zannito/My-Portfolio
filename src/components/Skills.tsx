import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, BrainCircuit, Database, Globe, Award, Sparkles, Search } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Machine Learning & AI Engineering': <BrainCircuit className="w-5 h-5 text-blue-600" />,
  'Data Analysis & Preprocessing': <Database className="w-5 h-5 text-cyan-600" />,
  'Programming & Core Languages': <Terminal className="w-5 h-5 text-indigo-600" />,
  'Web Application Development': <Globe className="w-5 h-5 text-emerald-600" />,
  'Leadership & Project Execution': <Award className="w-5 h-5 text-amber-600" />,
  'Analytical & Communication': <Sparkles className="w-5 h-5 text-purple-600" />,
};

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    if (!searchQuery.trim()) return cat;
    const q = searchQuery.toLowerCase();
    const matchingSkills = cat.skills.filter(s => s.toLowerCase().includes(q));
    const matchesCategory = cat.category.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
    
    if (matchesCategory) return cat;
    if (matchingSkills.length > 0) {
      return { ...cat, skills: matchingSkills };
    }
    return null;
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header with Search Input */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider mb-2">
              <span>Competencies &amp; Expertise</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Technical &amp; Engineering Skills
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Categorized across machine learning, deep learning frameworks, software development, and leadership.
            </p>
          </div>

          {/* Interactive Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., PyTorch, XGBoost)..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-900"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 hover:border-slate-300 hover:bg-white transition-all flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    {CATEGORY_ICONS[cat.category] || <Sparkles className="w-5 h-5 text-blue-600" />}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-heading">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Zero-Pill Unboxed Clean Text with Typographic Separators */}
              <div className="pt-3 border-t border-slate-200/80">
                <p className="text-xs font-medium text-slate-700 leading-relaxed">
                  {cat.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                      {sIdx < cat.skills.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300 mx-1.5">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="py-12 text-center text-slate-500 text-sm">
            No skills found matching &quot;{searchQuery}&quot;. Please try another keyword.
          </div>
        )}

      </div>
    </section>
  );
};
