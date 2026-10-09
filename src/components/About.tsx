import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-100 bg-slate-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            ABOUT ME
          </h2>
        </div>

        {/* Combined Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Clean Portrait Photo Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-3 border border-slate-200/80 shadow-xs">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src={PERSONAL_INFO.avatar} 
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <p className="font-bold text-lg leading-tight font-heading">
                    {PERSONAL_INFO.fullName}
                  </p>
                  <p className="text-xs text-slate-200 mt-1">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="text-[11px] text-slate-300 font-mono mt-0.5">
                    {PERSONAL_INFO.institution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Combined Comprehensive Article */}
          <div className="lg:col-span-7">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong>Computer Science undergraduate at BINUS University @Kemanggisan</strong> (Cohort 2024–2028), deeply passionate about Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing.
              </p>
              
              <p>
                My technical engineering work combines rigorous statistical modeling with production-ready software development. Through hands-on research and applied machine learning projects, I design and deploy end-to-end intelligent systems: from cybersecurity malware detection using the large-scale EMBER dataset (achieving <strong>95% accuracy</strong> via tuned XGBoost classifiers), to edge-ready driver drowsiness monitoring using <strong>MobileNetV2 with Grad-CAM explainability</strong>, and digital slang/typo normalization combining character n-grams and Logistic Regression (<strong>90.33% accuracy, 93.35% precision</strong>).
              </p>

              <p>
                Beyond computational engineering, I bring extensive organizational leadership and program management experience from <strong>MT Al-Khawarizmi at BINUS @Kemanggisan</strong>. Having served across 4 strategic leadership appointments—including Program Treasurer for the Ramadan Festival and PMB &amp; Expo, as well as Division Coordinator for Logistics and Public Relations—I have managed allocated financial budgets, coordinated multi-tiered volunteer operations, and facilitated cross-functional stakeholder communications.
              </p>

              <p>
                I approach every challenge with an analytical mindset, clean code principles, and an eagerness to create technology solutions that generate measurable, real-world impact.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
