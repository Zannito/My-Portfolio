import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, Trophy, FileCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            CERTIFICATIONS &amp; AWARDS
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    {cert.type === 'certification' && <ShieldCheck className="w-5 h-5 text-blue-600" />}
                    {cert.type === 'competition' && <Trophy className="w-5 h-5 text-amber-500" />}
                    {cert.type === 'award' && <Award className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {cert.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base font-heading">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {cert.issuer}
                  </p>
                </div>

                {cert.credentialId && (
                  <div className="pt-2 text-xs font-mono text-slate-500">
                    <span>Credential ID: </span>
                    <span className="text-blue-700 font-semibold break-all">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {cert.link ? (
                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>View Certificate (Google Drive)</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Verified Training Credential</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
