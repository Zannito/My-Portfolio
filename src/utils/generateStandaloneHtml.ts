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
      
      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
        <a href="#about" class="hover:text-blue-600 transition-colors">About</a>
        <a href="#skills" class="hover:text-blue-600 transition-colors">Skills</a>
        <a href="#projects" class="hover:text-blue-600 transition-colors">Projects</a>
        <a href="#experience" class="hover:text-blue-600 transition-colors">Experience</a>
        <a href="#certifications" class="hover:text-blue-600 transition-colors">Certifications</a>
      </nav>
      
      <!-- CTA Action -->
      <div class="flex items-center gap-3">
        <a href="#contact" class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-blue-500/10">
          Get in Touch
        </a>
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
      <a href="#contact" class="block text-sm font-semibold text-blue-600 py-1">Get in Touch &rarr;</a>
    </div>
  </header>

  <main class="pt-20">
    <!-- ==================== HERO SECTION ==================== -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-b border-slate-200/80">
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div class="sm:col-span-7 lg:col-span-7 space-y-6">
          <div class="flex items-center gap-2 text-xs font-semibold text-blue-600">
            <span>BINUS @Kemanggisan</span>
            <span aria-hidden="true" class="text-slate-300">·</span>
            <span>Computer Science Undergraduate</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance font-heading">
            Pandya Zannito Prawoko
          </h1>

          <p class="text-lg sm:text-xl font-semibold text-slate-700">
            Machine Learning Engineer &amp; Software Developer
          </p>

          <p class="text-slate-600 text-base leading-relaxed max-w-xl">
            Computer Science undergraduate at BINUS University passionate about Artificial Intelligence, Machine Learning, Computer Vision, and Data Science. Combining hands-on experience in machine learning programming projects with proven leadership in organizing and managing large-scale student programs.
          </p>

          <!-- Action Button -->
          <div class="pt-2 flex flex-wrap items-center gap-4">
            <a href="#projects" class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-blue-500/10">
              <span>Explore Projects</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>

          <!-- Social Channels -->
          <div class="flex items-center gap-6 pt-3 border-t border-slate-100 text-sm text-slate-600">
            <a href="https://github.com/Zannito" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1.5 transition-colors">
              <i data-lucide="github" class="w-4 h-4"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/zannitoprawoko" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1.5 transition-colors">
              <i data-lucide="linkedin" class="w-4 h-4 text-blue-600"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com/zannitopp_" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1.5 transition-colors">
              <i data-lucide="instagram" class="w-4 h-4 text-pink-600"></i>
              <span>@zannitopp_</span>
            </a>
          </div>
        </div>

        <!-- Right Side: Profile Photo Card -->
        <div class="sm:col-span-5 lg:col-span-5 flex justify-center sm:justify-end">
          <div class="w-full max-w-[280px] sm:max-w-xs lg:max-w-sm rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-xl shadow-slate-200/40">
            <div class="aspect-square rounded-xl overflow-hidden bg-slate-100 relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                alt="Pandya Zannito Prawoko"
                class="w-full h-full object-cover"
                onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\' viewBox=\\'0 0 400 400\\'><rect fill=\\'%23f1f5f9\\' width=\\'400\\' height=\\'400\\'/><text fill=\\'%2364748b\\' font-family=\\'sans-serif\\' font-size=\\'22\\' dy=\\'10.5\\' font-weight=\\'bold\\' x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\'>Pandya Zannito P.</text></svg>'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70"></div>
              <div class="absolute bottom-4 left-4 right-4 text-left">
                <p class="text-white font-bold text-lg leading-tight font-heading">
                  Pandya Zannito Prawoko
                </p>
                <p class="text-xs text-slate-200 mt-1">
                  Computer Science Undergraduate &amp; ML Engineer
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ==================== ABOUT ME SECTION ==================== -->
    <section id="about" class="py-20 border-b border-slate-200/80 bg-slate-50/60">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-2xl mb-8">
          <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider">
            <span>About Me</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Professional Profile</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div class="lg:col-span-8 space-y-4 text-slate-700 leading-relaxed text-base">
            <p>
              I am a Bachelor of <strong>Computer Science undergraduate at BINUS University @Kemanggisan</strong> (Cohort 2024–2028) with a strong passion for <strong>Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing (NLP)</strong>.
            </p>
            <p>
              Through real-world research and hands-on projects, I specialize in building end-to-end intelligent systems: from cybersecurity malware classification using the large-scale EMBER dataset (achieving 95% accuracy with XGBoost), to real-time driver fatigue monitoring with resource-efficient MobileNetV2 and Grad-CAM explainability, and NLP normalization with character-level n-grams and Logistic Regression.
            </p>
            <p>
              Alongside technical engineering, I bring proven leadership and cross-functional execution experience from <strong>MT Al-Khawarizmi at BINUS University</strong>. Serving as program treasurer and division coordinator, I have directed financial planning, resource allocation, event logistics, and stakeholder communications.
            </p>
          </div>

          <div class="lg:col-span-4 space-y-4">
            <div class="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <h4 class="text-sm font-bold text-slate-900 font-heading">AI &amp; Deep Learning Rigor</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Applying rigorous statistical modeling, precision evaluation metrics (Accuracy, Precision, Recall, F1), and model interpretability via Grad-CAM heatmaps.
              </p>
            </div>
            <div class="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <h4 class="text-sm font-bold text-slate-900 font-heading">Proven Organizational Leadership</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                4 strategic leadership roles at MT Al-Khawarizmi BINUS: Treasurer of PMB &amp; Expo, Treasurer of Ramadan Festival, Logistics Coordinator, and Public Relations Coordinator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== SKILLS SECTION ==================== -->
    <section id="skills" class="py-20 border-b border-slate-200/80 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-2xl mb-12">
          <div class="text-sm sm:text-base font-bold text-blue-600 tracking-wider uppercase mb-2">Competencies &amp; Expertise</div>
          <p class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Technical &amp; Engineering Skills
          </p>
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
            <span>Featured Works</span>
            <span aria-hidden="true" class="text-slate-300">·</span>
            <span>Engineering Portfolio</span>
          </div>
          <p class="text-sm text-slate-600 mt-1">
            Featured research projects and production-grade applications.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Project 1 -->
          <div class="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 transition-colors shadow-xs">
            <div class="p-6 flex-1 space-y-4">
              <div class="flex items-center justify-between text-xs text-slate-500">
                <span class="text-blue-600 font-semibold">Machine Learning Engineer</span>
                <span>June 2026</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                Malware Detection Using Machine Learning
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Cybersecurity-focused project utilizing the EMBER dataset and XGBoost algorithm to automatically classify malicious files with 95% accuracy. Integrated into a web app for instant risk scoring.
              </p>
              <div class="text-xs text-slate-500 font-mono">
                XGBoost · Random Forest · EMBER Dataset · Flask · Cloud Deployment
              </div>
            </div>
            <div class="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
              <a href="https://machinelearning-malware-detection-ember.onrender.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-semibold">
                <span>Live App Demo</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
              <div class="flex items-center gap-4 text-slate-600">
                <a href="https://github.com/Zannito/Machine-Learning---Malware-Detection-with-Ember-Dataset" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1">
                  <i data-lucide="github" class="w-3.5 h-3.5"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://www.canva.com/design/DAHK9j508nw/qHKFUmTEG7pyehVl5GS1Fg/edit" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1">
                  <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                  <span>Pitch Deck</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 transition-colors shadow-xs">
            <div class="p-6 flex-1 space-y-4">
              <div class="flex items-center justify-between text-xs text-slate-500">
                <span class="text-blue-600 font-semibold">Machine Learning Engineer</span>
                <span>May 2026</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                Drowsiness Detection Using MobileNetV2
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Computer vision and deep learning project to detect driver fatigue in real time via geometric facial features (EAR/MAR) using MobileNetV2 for low-power edge devices and Grad-CAM for model transparency.
              </p>
              <div class="text-xs text-slate-500 font-mono">
                Computer Vision · MobileNetV2 · Grad-CAM · EAR/MAR · Edge AI
              </div>
            </div>
            <div class="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
              <span class="text-slate-500">3-State Classification (Normal, Warning, Danger)</span>
              <div class="flex items-center gap-4 text-slate-600">
                <a href="https://github.com/Zannito/Drowsiness-Detection-with-MobileNetV2" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1">
                  <i data-lucide="github" class="w-3.5 h-3.5"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://www.canva.com/design/DAHJDlWHAVs/YhVZwRj2Je3YVr7mopJ4Sg/edit" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1">
                  <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                  <span>Pitch Deck</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 transition-colors shadow-xs">
            <div class="p-6 flex-1 space-y-4">
              <div class="flex items-center justify-between text-xs text-slate-500">
                <span class="text-blue-600 font-semibold">Machine Learning Engineer</span>
                <span>June 2026</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                Slang &amp; Typo Detection and Corrector
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                NLP system using TF-IDF character-level n-grams and Logistic Regression (90.33% accuracy, 93.35% precision) combined with dictionary normalization to translate digital slang into formal language.
              </p>
              <div class="text-xs text-slate-500 font-mono">
                NLP · TF-IDF Character N-Gram · Logistic Regression · Text Normalization
              </div>
            </div>
            <div class="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
              <span class="text-slate-500">Accuracy 90.33% · Precision 93.35%</span>
              <div class="flex items-center gap-4 text-slate-600">
                <a href="https://github.com/Zannito/Slang-Detection-Correction-using-Logistic-Regression" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1">
                  <i data-lucide="github" class="w-3.5 h-3.5"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://www.canva.com/design/DAHL1ry2Kt4/ebfCWu8QxS1xmzY3ywZo-g/edit" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1">
                  <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                  <span>Pitch Deck</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col hover:border-slate-300 transition-colors shadow-xs">
            <div class="p-6 flex-1 space-y-4">
              <div class="flex items-center justify-between text-xs text-slate-500">
                <span class="text-blue-600 font-semibold">Software Engineer</span>
                <span>June 2026</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                Virus Slayer: Pandemic Reborn
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Educational RPG game gamifying hygiene awareness and disease prevention with character progression, auto-battles, and a unique post-combat equipment decontamination mechanic.
              </p>
              <div class="text-xs text-slate-500 font-mono">
                Software Engineering · RPG Architecture · Health Gamification
              </div>
            </div>
            <div class="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
              <span class="text-slate-500">Educational Gamification System</span>
              <div class="flex items-center gap-4 text-slate-600">
                <a href="https://github.com/Zannito/Software-Engineer---RPG-Game" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1">
                  <i data-lucide="github" class="w-3.5 h-3.5"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://www.canva.com/design/DAHCzsb3UGs/WE4r5V-XUGiAGEbyibi3Lw/edit" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 flex items-center gap-1">
                  <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                  <span>Pitch Deck</span>
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
              <div class="text-sm sm:text-base font-bold text-blue-600 tracking-wider uppercase mb-2">Organizational Leadership</div>
              <p class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
                MT Al-Khawarizmi BINUS @Kemanggisan
              </p>
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
              <div class="text-sm sm:text-base font-bold text-blue-600 tracking-wider uppercase mb-2">Formal Education</div>
              <p class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
                Academic Record
              </p>
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
        <div class="max-w-2xl mb-12">
          <div class="text-sm sm:text-base font-bold text-blue-600 tracking-wider uppercase mb-2">Official Credentials</div>
          <p class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            Certifications &amp; Honors
          </p>
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

    <!-- ==================== CONTACT SECTION ==================== -->
    <section id="contact" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="space-y-8 text-center max-w-2xl mx-auto">
          <div>
            <div class="text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider mb-2">
              <span>Contact</span>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed mt-2">
              Open to discussions regarding machine learning engineering, internship opportunities, software development, or research collaborations.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
              <div class="flex items-center gap-3 min-w-0">
                <div class="p-2.5 rounded-lg bg-blue-100/60 text-blue-600 shrink-0">
                  <i data-lucide="mail" class="w-5 h-5"></i>
                </div>
                <div class="min-w-0">
                  <div class="text-xs text-slate-500">Email</div>
                  <a href="mailto:pandyazannito@gmail.com" class="hover:text-blue-600 font-semibold text-sm text-slate-900 truncate block">pandyazannito@gmail.com</a>
                </div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
              <div class="flex items-center gap-3">
                <div class="p-2.5 rounded-lg bg-emerald-100/60 text-emerald-600 shrink-0">
                  <i data-lucide="phone" class="w-5 h-5"></i>
                </div>
                <div>
                  <div class="text-xs text-slate-500">WhatsApp / Phone</div>
                  <a href="https://wa.me/6281282613740" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-700 font-semibold text-sm text-slate-900">+62 812-8261-3740</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ==================== FOOTER ==================== -->
  <footer class="border-t border-slate-200 bg-slate-50 py-8 text-center text-xs text-slate-500">
    <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>&copy; 2026 Pandya Zannito Prawoko. All rights reserved.</p>
      <p class="text-slate-600">Computer Science Undergraduate &middot; BINUS University</p>
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
