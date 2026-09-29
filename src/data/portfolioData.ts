import pandyaAvatar from '../assets/images/pandya_profile_photo_1790689078440.jpg';
import malwareImg from '../assets/images/malware_detector_preview_1790689094852.jpg';
import drowsinessImg from '../assets/images/drowsiness_vision_preview_1790689106586.jpg';
import slangImg from '../assets/images/slang_nlp_preview_1790689117649.jpg';
import virusSlayerImg from '../assets/images/virus_slayer_game_preview_1790689129608.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Computer Vision' | 'NLP' | 'Game Dev';
  year: string;
  role: string;
  summary: string;
  description: string;
  image: string;
  metrics: string;
  tags: string[];
  demoUrl?: string | null;
  githubUrl: string;
  pitchDeckUrl: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  contributions: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  notes?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  credentialId?: string;
  period: string;
  link?: string;
  type: 'certification' | 'competition' | 'award';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  fullName: 'Pandya Zannito Prawoko',
  shortName: 'Pandya',
  title: 'Computer Science Undergraduate & Machine Learning Engineer',
  institution: 'BINUS @Kemanggisan',
  location: 'Sidamukti, Jl. Revolusi No.25, Sukamaju, Cilodong, Kota Depok, West Java',
  email: 'pandyazannito@gmail.com',
  phone: '+62 812-8261-3740',
  instagram: 'https://instagram.com/zannitopp_',
  instagramHandle: '@zannitopp_',
  github: 'https://github.com/Zannito',
  linkedin: 'https://linkedin.com/in/zannitoprawoko',
  avatar: pandyaAvatar,
  summary:
    'Computer Science undergraduate at BINUS University passionate about Artificial Intelligence, Machine Learning, Computer Vision, and Data Science. Combining hands-on experience in machine learning programming projects with proven leadership in organizing and managing large-scale student programs. Skilled in software development, analytical thinking, and cross-functional collaboration, with a strong desire to leverage technology to create impactful and innovative solutions while continuously expanding technical and professional expertise.',
  extendedBio: [
    'Focused on developing and deploying modern machine learning pipelines to solve challenging engineering problems—from cybersecurity static binary classification (XGBoost with 95% accuracy) to real-time low-latency driver drowsiness monitoring using MobileNetV2 and Grad-CAM.',
    'Beyond computational and engineering rigor, I bring proven organizational leadership from MT Al-Khawarizmi at BINUS Kemanggisan, having managed program budgets, orchestrated large-scale event logistics, and maintained partner communications.'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Machine Learning & AI Engineering',
    description: 'Predictive modeling, deep learning architectures, transfer learning, and computer vision deployment',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'CNN (Convolutional Neural Networks)',
      'Deep Neural Networks (DNN)',
      'MobileNetV2',
      'Transfer Learning',
      'Grad-CAM',
      'Computer Vision',
      'Model Fine-Tuning & Optimization',
      'Scikit-learn',
      'XGBoost',
      'Random Forest'
    ]
  },
  {
    category: 'Data Analysis & Preprocessing',
    description: 'Raw data pipelines, feature engineering, data cleaning, and in-depth exploratory analysis',
    skills: ['Pandas', 'NumPy', 'Data Cleaning', 'Feature Engineering', 'Exploratory Data Analysis (EDA)', 'Statistical Modeling']
  },
  {
    category: 'Programming & Core Languages',
    description: 'Structured programming, object-oriented software engineering, and database systems',
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'MySQL', 'Algorithm Design']
  },
  {
    category: 'Web Application Development',
    description: 'End-to-end integration of AI models into low-latency web interfaces and RESTful APIs',
    skills: ['Flask', 'FastAPI', 'REST API Development', 'Database Integration', 'Cloud Deployment']
  },
  {
    category: 'Leadership & Project Execution',
    description: 'Budgeting stewardship, logistics coordination, and cross-functional team management',
    skills: ['Financial Planning & Budgeting', 'Resource Management', 'Event Operations', 'Cross-Functional Collaboration', 'Public Relations']
  },
  {
    category: 'Analytical & Communication',
    description: 'Systematic problem solving, technical presentation, and stakeholder engagement',
    skills: ['Debugging', 'Data-Driven Decision Making', 'Technical Presentation', 'Stakeholder Engagement', 'Bilingual Communication']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'malware-detection',
    title: 'Malware Detection Using Machine Learning',
    category: 'Machine Learning',
    year: 'June 2026',
    role: 'Machine Learning Engineer',
    summary:
      'Cybersecurity-focused project utilizing the EMBER dataset and XGBoost algorithm to automatically classify malicious files with 95% accuracy.',
    description:
      'Malware Detection Using Machine Learning is a cybersecurity-focused project developed to improve malware identification through artificial intelligence techniques. The system utilizes machine learning algorithms to automatically classify files as either malware or benign based on their structural characteristics and extracted features. Built using the EMBER dataset, the project compares Random Forest and XGBoost models to determine the most effective approach for malware detection. XGBoost was selected as the final model due to its superior performance, achieving 95% accuracy along with strong precision, recall, and F1-score metrics. To enhance accessibility, the model is integrated into a web-based application where users can upload files and receive real-time detection results with confidence-based risk assessments. While the current implementation focuses on static analysis, the project demonstrates the potential of machine learning as a more adaptive alternative to traditional signature-based malware detection methods.',
    image: malwareImg,
    metrics: '95% Accuracy · EMBER Benchmark',
    tags: ['XGBoost', 'Random Forest', 'EMBER Dataset', 'Cybersecurity', 'Flask Web App', 'Feature Extraction'],
    demoUrl: 'https://machinelearning-malware-detection-ember.onrender.com/',
    githubUrl: 'https://github.com/Zannito/Machine-Learning---Malware-Detection-with-Ember-Dataset',
    pitchDeckUrl: 'https://www.canva.com/design/DAHK9j508nw/qHKFUmTEG7pyehVl5GS1Fg/edit',
    highlights: [
      'Engineered an XGBoost classifier outperforming Random Forest, achieving 95% test accuracy on EMBER data.',
      'Extracted static binary structural features from Windows PE executable files.',
      'Deployed an interactive web application allowing users to upload binaries for immediate risk scoring.',
      'Demonstrated machine learning as an adaptive alternative to conventional signature-based antivirus solutions.'
    ]
  },
  {
    id: 'drowsiness-detection',
    title: 'Drowsiness Detection Using MobileNetV2',
    category: 'Computer Vision',
    year: 'May 2026',
    role: 'Machine Learning Engineer',
    summary:
      'Real-time computer vision driver safety system integrating lightweight MobileNetV2 and Grad-CAM for fatigue warning.',
    description:
      'Drowsiness Detection Using MobileNetV2 is a computer vision and deep learning project developed to improve road safety by detecting driver drowsiness in real time. The system utilizes facial analysis through a camera to identify signs of fatigue, including prolonged eye closure and yawning, using geometric facial features such as Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR). To achieve efficient and accurate classification, the project integrates the MobileNetV2 architecture, enabling deployment on resource-constrained devices while maintaining strong performance. The model classifies driver conditions into three categories—Normal, Warning, and Danger—and provides early alerts to reduce the risk of microsleep-related accidents. Additionally, Grad-CAM is incorporated to improve model transparency by visualizing the facial regions that influence prediction decisions. The proposed solution is designed to remain effective under varying lighting conditions, facial orientations, and common driving scenarios, making it a practical approach for intelligent driver monitoring systems.',
    image: drowsinessImg,
    metrics: '3-State Classification (Normal / Warning / Danger) · Grad-CAM Visual Heatmap',
    tags: ['Computer Vision', 'MobileNetV2', 'Grad-CAM', 'Facial Landmarks', 'EAR / MAR', 'Edge AI'],
    demoUrl: null,
    githubUrl: 'https://github.com/Zannito/Drowsiness-Detection-with-MobileNetV2',
    pitchDeckUrl: 'https://www.canva.com/design/DAHJDlWHAVs/YhVZwRj2Je3YVr7mopJ4Sg/edit',
    highlights: [
      'Identified driver fatigue indicators (prolonged eye closure & yawning) via geometric EAR and MAR ratios.',
      'Integrated lightweight MobileNetV2 architecture for edge device deployment with high inference efficiency.',
      'Incorporated Grad-CAM heatmaps to visualize facial regions influencing model predictions.',
      'Engineered for resilience across varying vehicular lighting conditions and head angles.'
    ]
  },
  {
    id: 'slang-corrector',
    title: 'Slang & Typo Detection and Corrector',
    category: 'NLP',
    year: 'June 2026',
    role: 'Machine Learning Engineer',
    summary:
      'NLP system combining TF-IDF character n-gram extraction and Logistic Regression to normalize digital slang into standard language.',
    description:
      'Slang Correction with Logistic Regression is a natural language processing (NLP) project developed to address the growing use of informal language and slang in digital communication. The system combines machine learning and dictionary-based normalization to automatically identify and correct slang words into their formal equivalents. Using TF-IDF character-level n-gram feature extraction and a Logistic Regression classifier, the model learns patterns commonly found in slang expressions, including non-standard spellings and word variations. To improve reliability, the dataset is collected from multiple slang sources, preprocessed, balanced, and validated before training. In addition to classification, the system incorporates a lexicon-based correction mechanism that translates recognized slang into standard language forms. The final solution is deployed as a web application, enabling real-time slang detection and normalization while supporting more accurate text processing for downstream NLP tasks.',
    image: slangImg,
    metrics: '90.33% Accuracy · 93.35% Precision · 0.8998 F1-Score',
    tags: ['NLP', 'TF-IDF Character N-Gram', 'Logistic Regression', 'Lexicon Normalization', 'Text Preprocessing'],
    demoUrl: null,
    githubUrl: 'https://github.com/Zannito/Slang-Detection-Correction-using-Logistic-Regression',
    pitchDeckUrl: 'https://www.canva.com/design/DAHL1ry2Kt4/ebfCWu8QxS1xmzY3ywZo-g/edit',
    highlights: [
      'Achieved 90.33% test accuracy and 93.35% precision on informal digital conversational datasets.',
      'Extracted character-level n-gram representations to capture spelling mutations and typos robustly.',
      'Constructed a dictionary-based translation mechanism to produce canonical formal terms for downstream NLP tasks.',
      'Packaged the complete pipeline into an accessible web application prototype.'
    ]
  },
  {
    id: 'virus-slayer',
    title: 'Virus Slayer: Pandemic Reborn',
    category: 'Game Dev',
    year: 'June 2026',
    role: 'Software Engineer',
    summary:
      'Educational RPG game promoting hygiene awareness and disease prevention through gamified equipment decontamination mechanics.',
    description:
      'Virus Slayer: Pandemic Reborn is an educational RPG game developed to promote hygiene awareness and disease prevention through an engaging gamification approach. Inspired by the impact of the COVID-19 pandemic, the game transforms viruses into hostile monsters that players must defeat while learning the importance of cleanliness through interactive gameplay mechanics. Players progress through increasingly challenging stages using character upgrades, equipment systems, and strategic resource management. A unique contamination system serves as the core educational feature, where equipment gradually becomes contaminated after battles and must be cleaned to maintain effectiveness, symbolizing real-world hygiene practices. By combining progression-based gameplay, auto-battle mechanics, equipment enhancement, and health-related educational concepts, the project delivers an entertaining experience while reinforcing awareness of healthy habits and disease prevention among younger audiences.',
    image: virusSlayerImg,
    metrics: 'Educational Gamification Architecture · Decontamination Mechanics',
    tags: ['Software Engineering', 'RPG Mechanics', 'Educational Game', 'Gamification', 'Auto-Battle System'],
    demoUrl: null,
    githubUrl: 'https://github.com/Zannito/Software-Engineer---RPG-Game',
    pitchDeckUrl: 'https://www.canva.com/design/DAHCzsb3UGs/WE4r5V-XUGiAGEbyibi3Lw/edit',
    highlights: [
      'Designed an innovative equipment contamination and sanitization mechanic to teach real-world hygiene.',
      'Developed character progression trees, inventory systems, and tactical auto-battle loops.',
      'Implemented clean, modular object-oriented software architecture for easy extensibility.',
      'Created an engaging interactive experience for young learners and students.'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-ramadan',
    role: 'Treasurer of Ramadan Festival',
    organization: 'MT Al-Khawarizmi in Binus @Kemanggisan',
    location: 'West Jakarta',
    period: 'February 2026',
    contributions: [
      'Oversaw budgeting, financial administration, and expense management for the Ramadan Festival while actively contributing to event planning and organizational decision-making.',
      'Worked closely with the committee to develop program concepts, establish operational workflows, and ensure the successful execution of the event within allocated resources.'
    ]
  },
  {
    id: 'exp-kurma',
    role: 'Public Relations Division Coordinator of KURMA Program',
    organization: 'MT Al-Khawarizmi in Binus @Kemanggisan',
    location: 'West Jakarta',
    period: 'September 2025 - November 2025',
    contributions: [
      'Coordinated public relations activities by managing communications with volunteers, partners, and external stakeholders for the KURMA (Kunjungan Rohani dan Motivasi Anak) program.',
      'Led promotional efforts, facilitated information dissemination, and maintained effective stakeholder engagement to support successful implementation.'
    ]
  },
  {
    id: 'exp-welcoming',
    role: 'Logistics & Consumption Division Coordinator',
    organization: 'MT Al-Khawarizmi Welcoming Party, Binus @Kemanggisan',
    location: 'West Jakarta',
    period: 'July 2025 - October 2025',
    contributions: [
      'Led the Logistics and Consumption Division in organizing a welcoming event for incoming new students.',
      'Coordinated logistical operations, managed procurement and distribution of supplies, supervised team members, and ensured all operational requirements and participant needs were fulfilled efficiently.'
    ]
  },
  {
    id: 'exp-pmb',
    role: 'Treasurer of PMB & Expo Program',
    organization: 'MT Al-Khawarizmi in Binus @Kemanggisan',
    location: 'West Jakarta',
    period: 'June 2025 - August 2025',
    contributions: [
      'Managed financial planning and budgeting of the PMB & Expo program while actively contributing to the event concept, operational structure, and execution strategy.',
      'Collaborated with committee members to allocate resources effectively, monitor expenditures, and ensure program objectives were achieved within budget and on schedule.'
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: 'BINUS University',
    degree: 'Bachelor of Computer Science',
    location: 'West Jakarta',
    period: 'September 2024 - June 2028',
    notes: 'Focus on Artificial Intelligence, Machine Learning, Data Science, and Software Development'
  },
  {
    institution: 'SMA Negeri 8 Depok',
    degree: 'High School Diploma, Natural Science',
    location: 'Depok, West Java',
    period: 'June 2021 - May 2024',
    notes: 'Graduated with strong foundation in mathematics, pure sciences, and computing'
  }
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    title: 'Microsoft AI-900T00-A Certification',
    issuer: 'The Microsoft Elevate AI Training Session / GreatNusa',
    credentialId: '111541121814901/GreatNusa/III/2026',
    period: 'March 2026',
    type: 'certification'
  },
  {
    title: 'International Collegiate Programming Contest (ICPC) Participant 2025',
    issuer: 'ICPC Foundation',
    period: '2025',
    type: 'competition'
  },
  {
    title: 'Honorable Certificate of Achievement',
    issuer: 'Verified Academic / Institutional Recognition',
    link: 'https://drive.google.com/file/d/13kzQcPdP6-2Q_NaKyG2aCWpO4_Dbp0zy/view?usp=sharing',
    period: 'Verified',
    type: 'award'
  },
  {
    title: 'Medal Certificate of Excellence',
    issuer: 'Verified Competition / Award Board',
    link: 'https://drive.google.com/file/d/1RZvHxwVCkRTPc7OXKBAMSgVSPXHFkAfi/view?usp=drive_link',
    period: 'Verified',
    type: 'award'
  },
  {
    title: 'Place Certificate of Competition',
    issuer: 'Verified Placement Recognition',
    link: 'https://drive.google.com/file/d/12Vffs4bJ6mEdnnciptvgWorEFRM5S8db/view?usp=drive_link',
    period: 'Verified',
    type: 'award'
  }
];
