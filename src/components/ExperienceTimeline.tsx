import React from 'react';
import { EXPERIENCES, EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Leadership & Work Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                EXPERIENCES
              </h2>
            </div>

            {/* Timeline Line */}
            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative space-y-2 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-blue-600 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {exp.role}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium">
                    {exp.organization}
                  </p>

                  <ul className="pt-1 space-y-1.5">
                    {exp.contributions.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Formal Education */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                ACADEMIC BACKGROUND
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-slate-300 transition-colors space-y-3 shadow-xs"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-600 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-slate-700">
                      {edu.degree}
                    </p>
                  </div>

                  {edu.notes && (
                    <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-200/80">
                      {edu.notes}
                    </p>
                  )}
                </div>
              ))}

              {/* Academic Highlights Summary Callout */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-800">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Academic Commitment</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maintaining strong academic performance in Computer Science at BINUS while actively conducting open-source machine learning research and leading campus programs.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
