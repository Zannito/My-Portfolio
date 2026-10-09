/**
 * Generates a clean, 100% self-contained standalone index.html file
 * with clean white light-theme styling, semantic HTML5, Tailwind CSS, Lucide icons,
 * and pure English language based on the original CV.
 */
export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pandya Zannito Prawoko — Machine Learning & Software Portfolio</title>
  <meta name="description" content="Professional portfolio of Pandya Zannito Prawoko: Computer Science Undergraduate at BINUS University specializing in Machine Learning, Deep Learning, Computer Vision, and NLP.">
  
  <!-- Google Fonts: Outfit (Heading) & Plus Jakarta Sans (Body) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
            heading: ['Outfit', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: #ffffff;
      color: #0f172a;
    }
    h1, h2, h3, h4, .font-heading {
      font-family: 'Outfit', sans-serif;
    }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f8fafc; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  </style>
</head>
<body class="bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">

  <!-- ==================== NAVIGATION BAR ==================== -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      
      <!-- Home Logo -->
      <a href="#" aria-label="Home" title="Home" class="p-2 rounded-lg text-slate-800 hover:text-blue-600 hover:bg-slate-100 transition-colors flex items-center justify-center">
        <i data-lucide="home" class="w-5 h-5"></i>
      </a>
      
      <!-- Right Corner: Navigation Links & Mobile Toggle -->
      <div class="flex items-center gap-4">
        <nav class="hidden md:flex items-center gap-3.5 text-xs sm:text-sm font-medium text-slate-600">
          <a href="#about" class="hover:text-blue-600 transition-colors">About</a>
          <a href="#skills" class="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" class="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#experience" class="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#certifications" class="hover:text-blue-600 transition-colors">Certifications</a>
          <a href="#contact" class="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        
        <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none" aria-label="Toggle Menu">
          <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu Drawer -->
    <div id="mobile-menu" class="hidden md:hidden border-b border-slate-200 bg-white/98 px-6 py-4 space-y-3 shadow-lg">
      <a href="#about" class="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1">About</a>
      <a href="#skills" class="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1">Skills</a>
      <a href="#projects" class="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1">Projects</a>
      <a href="#experience" class="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1">Experience</a>
      <a href="#certifications" class="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1">Certifications</a>
      <a href="#contact" class="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1">Contact</a>
    </div>
  </header>

  <main class="pt-20">
    <!-- ==================== HERO SECTION (MINIMALIST WITH 3 DIRECT BUTTONS) ==================== -->
    <section class="pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-slate-100 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">

        <div class="space-y-3">
          <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-heading">
            Pandya Zannito Prawoko
          </h1>
          <p class="text-lg sm:text-2xl font-medium text-slate-600 tracking-tight">
            Machine Learning Engineer &amp; Software Developer
          </p>
        </div>

        <p class="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Specializing in Deep Learning, Computer Vision, and scalable software pipelines. Bridging technical precision with demonstrated organizational leadership.
        </p>

        <!-- The 3 Direct Navigation Buttons (Clean Text) -->
        <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" class="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs">
            Projects
          </a>
          <a href="#skills" class="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200/90 transition-all shadow-2xs">
            Skills
          </a>
          <a href="#experience" class="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200/90 transition-all shadow-2xs">
            Experience
          </a>
        </div>

        <div class="pt-4">
          <a href="#about" class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors">
            <span>View Profile &amp; Bio</span>
            <i data-lucide="arrow-down" class="w-3 h-3"></i>
          </a>
        </div>

      </div>
    </section>

    <!-- ==================== PROFILE & ABOUT ME (COMBINED) ==================== -->
    <section id="about" class="py-20 border-b border-slate-100 bg-slate-50/40">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div class="mb-10">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            ABOUT ME
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Left Column: Portrait Card -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl bg-white p-3 border border-slate-200/80 shadow-xs">
              <div class="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                  alt="Pandya Zannito Prawoko"
                  class="w-full h-full object-cover"
                  onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\' viewBox=\\'0 0 400 400\\'><rect fill=\\'%23f1f5f9\\' width=\\'400\\' height=\\'400\\'/><text fill=\\'%2364748b\\' font-family=\\'sans-serif\\' font-size=\\'22\\' dy=\\'10.5\\' font-weight=\\'bold\\' x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\'>Pandya Zannito P.</text></svg>'"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-4 left-4 right-4 text-left text-white">
                  <p class="font-bold text-lg leading-tight font-heading">Pandya Zannito Prawoko</p>
                  <p class="text-xs text-slate-200 mt-1">Computer Science Undergraduate &amp; ML Engineer</p>
                  <p class="text-[11px] text-slate-300 font-mono mt-0.5">BINUS @Kemanggisan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Combined Article -->
          <div class="lg:col-span-7">
            <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
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

    <!-- ==================== SKILLS SECTION ==================== -->
    <section id="skills" class="py-20 border-b border-slate-200/80 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Technical &amp; Engineering Skills
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Category 1: Deep Learning & ML -->
          <div class="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-4 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <i data-lucide="cpu" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-slate-900 text-base font-heading">Machine Learning &amp; AI</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">Predictive modeling, deep learning (PyTorch &amp; TensorFlow), and computer vision.</p>
            <div class="pt-2 text-xs text-slate-700 leading-relaxed border-t border-slate-200/80">
              PyTorch · TensorFlow · Keras · CNN (Convolutional Neural Networks) · Deep Neural Networks (DNN) · MobileNetV2 · Transfer Learning · Grad-CAM · Computer Vision · Model Fine-Tuning &amp; Optimization · Scikit-learn · XGBoost · Random Forest
            </div>
          </div>

          <!-- Category 2 -->
          <div class="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-4 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <i data-lucide="bar-chart-2" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-slate-900 text-base font-heading">Data Analysis &amp; EDA</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">Raw data pipelines, feature engineering, and statistical exploratory analysis.</p>
            <div class="pt-2 text-xs text-slate-700 leading-relaxed border-t border-slate-200/80">
              Pandas · NumPy · Data Cleaning · Feature Engineering · Exploratory Data Analysis (EDA)
            </div>
          </div>

          <!-- Category 3 -->
          <div class="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-4 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <i data-lucide="terminal" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-slate-900 text-base font-heading">Programming Languages</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">Core computing, algorithms, object-oriented design, and database systems.</p>
            <div class="pt-2 text-xs text-slate-700 leading-relaxed border-t border-slate-200/80">
              Python · C · C++ · Java · JavaScript · MySQL · Algorithm Design
            </div>
          </div>

          <!-- Category 4 -->
          <div class="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-4 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <i data-lucide="globe" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-slate-900 text-base font-heading">Web Application Dev</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">End-to-end integration of AI inference models into responsive web interfaces.</p>
            <div class="pt-2 text-xs text-slate-700 leading-relaxed border-t border-slate-200/80">
              Flask · FastAPI · REST API Development · Database Integration · Cloud Deployment
            </div>
          </div>

          <!-- Category 5 -->
          <div class="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-4 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <i data-lucide="users" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-slate-900 text-base font-heading">Leadership &amp; Operations</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">Budget allocation, logistics operations, and cross-functional team coordination.</p>
            <div class="pt-2 text-xs text-slate-700 leading-relaxed border-t border-slate-200/80">
              Financial Planning &amp; Budgeting · Logistics Coordination · Event Operations · Team Collaboration
            </div>
          </div>

          <!-- Category 6 -->
          <div class="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-4 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <i data-lucide="sparkles" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-slate-900 text-base font-heading">Soft Skills &amp; Communication</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">Effective stakeholder presentation and fast adaptability to new technologies.</p>
            <div class="pt-2 text-xs text-slate-700 leading-relaxed border-t border-slate-200/80">
              Public Speaking · Technical Presentation · Bilingual Communication · Analytical Thinking
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==================== PROJECTS SECTION ==================== -->
    <section id="projects" class="py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="mb-10">
          <div class="text-sm sm:text-base font-bold text-blue-600 tracking-wider uppercase mb-2">
            Selected Projects
          </div>
          <p class="text-sm text-slate-600 mt-1">
            Featured research projects and production-grade applications.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Project 1 -->
          <div class="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 transition-colors shadow-xs">
            <div class="p-6 flex-1 space-y-3">
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                Malware Detection Using Machine Learning
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Cybersecurity-focused project utilizing the EMBER dataset and XGBoost algorithm to automatically classify malicious files with 95% accuracy. Integrated into a web app for instant risk scoring.
              </p>
            </div>
            <div class="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
              <a href="https://machinelearning-malware-detection-ember.onrender.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-semibold">
                <span>Live App Demo</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
              <div class="flex items-center gap-4 text-slate-600">
                <a href="https://github.com/Zannito/Machine-Learning---Malware-Detection-with-Ember-Dataset" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1 font-semibold">
                  <i data-lucide="github" class="w-3.5 h-3.5"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 transition-colors shadow-xs">
            <div class="p-6 flex-1 space-y-3">
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                Drowsiness Detection Using MobileNetV2
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Computer vision and deep learning project to detect driver fatigue in real time via geometric facial features (EAR/MAR) using MobileNetV2 for low-power edge devices and Grad-CAM for model transparency.
              </p>
            </div>
            <div class="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
              <a href="https://drowsiness-detection-with-mobilenetv2.onrender.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-semibold">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>Live Demo</span>
              </a>
              <div class="flex items-center gap-4 text-slate-600">
                <a href="https://github.com/Zannito/Drowsiness-Detection-with-MobileNetV2" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1 font-semibold">
                  <i data-lucide="github" class="w-3.5 h-3.5"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 transition-colors shadow-xs">
            <div class="p-6 flex-1 space-y-3">
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                Slang &amp; Typo Detection and Corrector
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                NLP system using TF-IDF character-level n-grams and Logistic Regression (90.33% accuracy, 93.35% precision) combined with dictionary normalization to translate digital slang into formal language.
              </p>
            </div>
            <div class="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end text-xs font-medium">
              <div class="flex items-center gap-4 text-slate-600">
                <a href="https://github.com/Zannito/Slang-Detection-Correction-using-Logistic-Regression" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1 font-semibold">
                  <i data-lucide="github" class="w-3.5 h-3.5"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 transition-colors shadow-xs">
            <div class="p-6 flex-1 space-y-3">
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                Virus Slayer: Pandemic Reborn
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Educational RPG game gamifying hygiene awareness and disease prevention with character progression, auto-battles, and a unique post-combat equipment decontamination mechanic.
              </p>
            </div>
            <div class="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end text-xs font-medium">
              <div class="flex items-center gap-4 text-slate-600">
                <a href="https://github.com/Zannito/Software-Engineer---RPG-Game" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1 font-semibold">
                  <i data-lucide="github" class="w-3.5 h-3.5"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==================== EXPERIENCE & EDUCATION ==================== -->
    <section id="experience" class="py-20 border-b border-slate-200/80 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Experience Timeline -->
          <div class="lg:col-span-7 space-y-8">
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
                Experiences
              </h2>
            </div>

            <div class="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200">
              
              <div class="relative pl-8 space-y-2">
                <div class="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white"></div>
                <div class="text-xs font-semibold text-blue-600">February 2026 · West Jakarta</div>
                <h3 class="text-base font-bold text-slate-900">Treasurer of Ramadan Festival</h3>
                <p class="text-xs text-slate-500">MT Al-Khawarizmi in Binus @Kemanggisan</p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Oversaw budgeting, financial administration, and expense management for the Ramadan Festival while also contributing to event planning and organizational decision-making. Worked closely with the committee to develop program concepts, establish operational workflows, and ensure successful execution.
                </p>
              </div>

              <div class="relative pl-8 space-y-2">
                <div class="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white"></div>
                <div class="text-xs font-semibold text-blue-600">September 2025 - November 2025 · West Jakarta</div>
                <h3 class="text-base font-bold text-slate-900">Public Relations Division Coordinator of KURMA</h3>
                <p class="text-xs text-slate-500">MT Al-Khawarizmi in Binus @Kemanggisan</p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Coordinated public relations activities by managing communications with volunteers, partners, and external stakeholders. Led promotional efforts, facilitated information dissemination, and maintained effective stakeholder engagement.
                </p>
              </div>

              <div class="relative pl-8 space-y-2">
                <div class="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white"></div>
                <div class="text-xs font-semibold text-blue-600">July 2025 - October 2025 · West Jakarta</div>
                <h3 class="text-base font-bold text-slate-900">Logistics &amp; Consumption Division Coordinator</h3>
                <p class="text-xs text-slate-500">MT Al-Khawarizmi Welcoming Party</p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Led the Logistics and Consumption Division in organizing a welcoming event for incoming new students. Coordinated logistical operations, managed procurement and distribution of supplies, supervised team members, and ensured all operational requirements were met.
                </p>
              </div>

              <div class="relative pl-8 space-y-2">
                <div class="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white"></div>
                <div class="text-xs font-semibold text-blue-600">June 2025 - August 2025 · West Jakarta</div>
                <h3 class="text-base font-bold text-slate-900">Treasurer of PMB &amp; Expo Program</h3>
                <p class="text-xs text-slate-500">MT Al-Khawarizmi in Binus @Kemanggisan</p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Managed financial planning and budgeting of the PMB &amp; Expo program while actively contributing to event concepts, operational structures, and resource allocation within budget and on schedule.
                </p>
              </div>

            </div>
          </div>

          <!-- Education -->
          <div class="lg:col-span-5 space-y-8">
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
                Academic Background
              </h2>
            </div>

            <div class="space-y-6">
              <div class="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-2 shadow-2xs">
                <div class="flex items-center justify-between text-xs text-blue-600 font-semibold">
                  <span>Sept 2024 - June 2028</span>
                  <span>West Jakarta</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 font-heading">BINUS University</h3>
                <p class="text-sm text-slate-700 font-medium">Bachelor of Computer Science</p>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Focused on Artificial Intelligence, Machine Learning, Deep Learning, and Software Development.
                </p>
              </div>

              <div class="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-2 shadow-2xs">
                <div class="flex items-center justify-between text-xs text-blue-600 font-semibold">
                  <span>June 2021 - May 2024</span>
                  <span>Depok, West Java</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 font-heading">SMA Negeri 8 Depok</h3>
                <p class="text-sm text-slate-700 font-medium">High School Diploma, Natural Science</p>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Graduated with strong foundations in natural sciences, mathematics, and computing.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- ==================== CERTIFICATIONS SECTION ==================== -->
    <section id="certifications" class="py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Certifications &amp; Awards
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="p-6 rounded-xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4 shadow-xs">
            <div class="space-y-2">
              <div class="text-xs text-blue-600 font-semibold">Microsoft Certification · 2026</div>
              <h3 class="font-bold text-slate-900 text-base font-heading">Microsoft AI-900T00-A</h3>
              <p class="text-xs text-slate-600">The Microsoft Elevate AI Training Session</p>
              <p class="text-xs font-mono text-slate-700">ID: 111541121814901/GreatNusa/III/2026</p>
            </div>
            <div class="text-xs text-slate-400 pt-2 border-t border-slate-100">
              Verified via GreatNusa &amp; Microsoft
            </div>
          </div>

          <div class="p-6 rounded-xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4 shadow-xs">
            <div class="space-y-2">
              <div class="text-xs text-blue-600 font-semibold">Competitive Programming · 2025</div>
              <h3 class="font-bold text-slate-900 text-base font-heading">ICPC Participant 2025</h3>
              <p class="text-xs text-slate-600">International Collegiate Programming Contest</p>
              <p class="text-xs text-slate-700">Organized by ICPC Foundation</p>
            </div>
            <div class="text-xs text-slate-400 pt-2 border-t border-slate-100">
              Algorithmic Problem Solving Selection
            </div>
          </div>

          <div class="p-6 rounded-xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4 shadow-xs">
            <div class="space-y-2">
              <div class="text-xs text-blue-600 font-semibold">Verified Awards</div>
              <h3 class="font-bold text-slate-900 text-base font-heading">Achievement Certificates</h3>
              <p class="text-xs text-slate-600">Academic &amp; Competition Records</p>
              <div class="space-y-1 text-xs text-slate-700 pt-1">
                <a href="https://drive.google.com/file/d/1RZvHxwVCkRTPc7OXKBAMSgVSPXHFkAfi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline block">&bull; Medal Certificate &rarr;</a>
                <a href="https://drive.google.com/file/d/12Vffs4bJ6mEdnnciptvgWorEFRM5S8db/view?usp=drive_link" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline block">&bull; Place Certificate &rarr;</a>
                <a href="https://drive.google.com/file/d/13kzQcPdP6-2Q_NaKyG2aCWpO4_Dbp0zy/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline block">&bull; Honorable Certificate &rarr;</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==================== CONTACT SECTION (REFERENCE DESIGN - WHITE THEME) ==================== -->
    <section id="contact" class="relative py-24 sm:py-28 md:py-32 bg-white text-slate-900 border-t border-slate-100 overflow-hidden">
      <div class="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/30 rounded-full blur-[130px] pointer-events-none -translate-x-1/3"></div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-[130px] pointer-events-none translate-x-1/3"></div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12 sm:mb-14 space-y-3">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading">
            Contact
          </h2>
          <p class="text-sm sm:text-base text-slate-500 font-normal">
            Looking forward to work with you!
          </p>
        </div>

        <div class="w-fit mx-auto space-y-5 sm:space-y-6">
          <!-- Instagram -->
          <a href="https://instagram.com/zannitopp_" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group">
            <i data-lucide="instagram" class="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform"></i>
            <span class="font-medium tracking-wide">@zannitopp_</span>
          </a>

          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/zannitoprawoko" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group">
            <i data-lucide="linkedin" class="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform"></i>
            <span class="font-medium tracking-wide">linkedin.com/in/zannitoprawoko</span>
          </a>

          <!-- WhatsApp -->
          <a href="https://wa.me/6281282613740" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group">
            <i data-lucide="phone" class="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform"></i>
            <span class="font-medium tracking-wide">+62 812-8261-3740</span>
          </a>

          <!-- Email -->
          <a href="mailto:pandyazannito@gmail.com" class="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group">
            <i data-lucide="mail" class="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform"></i>
            <span class="font-medium tracking-wide">pandyazannito@gmail.com</span>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/Zannito" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-sm sm:text-base text-slate-700 hover:text-slate-950 transition-all group">
            <i data-lucide="github" class="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform"></i>
            <span class="font-medium tracking-wide">github.com/Zannito</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- ==================== FOOTER ==================== -->
  <footer class="border-t border-slate-100 bg-slate-50 py-8 text-center text-xs text-slate-500">
    <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>&copy; 2026 Pandya Zannito Prawoko. All rights reserved.</p>
      <p class="text-slate-600">Computer Science @ BINUS @Kemanggisan</p>
    </div>
  </footer>

  <script>
    lucide.createIcons();

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }

    function handleContactSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const msg = document.getElementById('contact-message').value;

      const body = encodeURIComponent("Hello Pandya,\\n\\nName: " + name + "\\nEmail: " + email + "\\n\\nMessage:\\n" + msg);
      const mailtoUrl = "mailto:pandyazannito@gmail.com?subject=" + encodeURIComponent("[Portfolio Inquiry] " + subject) + "&body=" + body;
      
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.textContent = "Opening your email client... Thank you for reaching out!";
        feedback.classList.remove('hidden');
      }
      
      window.location.href = mailtoUrl;
    }
  </script>
</body>
</html>`;
}
