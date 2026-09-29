import React from 'react';
import { Cpu, Users, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-200/80 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider">
            <span>About Me</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Professional Profile</span>
          </div>
        </div>

        {/* Narrative & Insight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Extended Bio in English */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base leading-relaxed">
            <p>
              I am a Bachelor of <strong>Computer Science undergraduate at BINUS University @Kemanggisan</strong> (Cohort 2024–2028) with a strong passion for <strong>Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing (NLP)</strong>.
            </p>
            <p>
              Through real-world research and hands-on projects, I specialize in building end-to-end intelligent systems: from cybersecurity malware classification using the large-scale EMBER dataset (achieving 95% accuracy with XGBoost), to real-time driver fatigue monitoring with resource-efficient MobileNetV2 and Grad-CAM explainability, and NLP normalization with character-level n-grams and Logistic Regression.
            </p>
            <p>
              Alongside technical engineering, I bring proven leadership and cross-functional execution experience from <strong>MT Al-Khawarizmi at BINUS University</strong>. Serving as program treasurer and division coordinator, I have directed financial planning, resource allocation, event logistics, and stakeholder communications.
            </p>

            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <div><strong className="text-slate-800">Campus:</strong> BINUS Kemanggisan, West Jakarta</div>
              <div><strong className="text-slate-800">Status:</strong> Open for Internship &amp; AI Engineering Roles</div>
            </div>
          </div>

          {/* Core Pillars Bento */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-blue-400 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">AI &amp; Data-Driven Mindset</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Applying rigorous statistical modeling, precision evaluation metrics (Accuracy, Precision, Recall, F1), and model interpretability via Grad-CAM heatmaps.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-emerald-400 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">Proven Organizational Leadership</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                4 strategic leadership roles at MT Al-Khawarizmi BINUS: Treasurer of PMB &amp; Expo, Treasurer of Ramadan Festival, Logistics Coordinator, and Public Relations Coordinator.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">Continuous Learning &amp; Rigor</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified in Microsoft AI-900T00-A and Participant in the International Collegiate Programming Contest (ICPC) 2025.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
