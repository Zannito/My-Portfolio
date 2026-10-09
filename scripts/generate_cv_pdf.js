import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = 210;
const pageHeight = 297;
const leftColWidth = 74;
const rightColX = 82;
const rightColWidth = 118;

// Primary colors matching the user's CV PDF
const darkMaroon = [90, 24, 30]; // #5a181e
const textMuted = [100, 100, 100];
const textDark = [25, 25, 25];

// ======================= PAGE 1 =======================
// Left column background
doc.setFillColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.rect(0, 0, leftColWidth, pageHeight, 'F');

// Left Column - Photo placeholder / circle
doc.setFillColor(255, 255, 255);
doc.circle(leftColWidth / 2, 45, 25, 'F');
doc.setFillColor(180, 180, 180);
doc.circle(leftColWidth / 2, 45, 24, 'F');

doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(16);
doc.text('PZP', leftColWidth / 2, 47, { align: 'center' });

// Contact Info
let leftY = 82;
doc.setFontSize(8.5);
doc.setFont('helvetica', 'bold');
doc.text('CONTACT', 8, leftY);
doc.setDrawColor(255, 255, 255);
doc.setLineWidth(0.3);
doc.line(8, leftY + 1.5, leftColWidth - 8, leftY + 1.5);
leftY += 7;

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
const contacts = [
  '+62 812-8261-3740',
  'pandyazannito@gmail.com',
  'Sidamukti, Jl.Revolusi No.25,\nSukamaju, Cilodong, Kota\nDepok, Jawa Barat',
  '@zannitopp_',
  'github.com/Zannito',
  'linkedin.com/in/zannitoprawoko'
];

contacts.forEach(c => {
  const lines = doc.splitTextToSize(c, leftColWidth - 16);
  doc.text(lines, 8, leftY);
  leftY += lines.length * 4.5 + 2.5;
});

// Objective
leftY += 3;
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('OBJECTIVE', 8, leftY);
doc.line(8, leftY + 1.5, leftColWidth - 8, leftY + 1.5);
leftY += 7;

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
const objectiveText = "Computer Science undergraduate at BINUS University passionate about Artificial Intelligence, Machine Learning, and Data Science. Combining hands-on experience in machine learning programming projects with proven leadership in organizing and managing large-scale student programs. Skilled in software development, analytical thinking, and cross-functional collaboration, with a strong desire to leverage technology to create impactful and innovative solutions while continuously expanding technical and professional expertise.";
const objLines = doc.splitTextToSize(objectiveText, leftColWidth - 16);
doc.text(objLines, 8, leftY);

// RIGHT COLUMN - PAGE 1
let rightY = 25;
doc.setTextColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.text('Pandya Zannito', rightColX, rightY);
rightY += 8;
doc.text('Prawoko', rightColX, rightY);
rightY += 7;

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
doc.text('Computer Science Undergraduate at', rightColX, rightY);
rightY += 5.5;
doc.setFont('helvetica', 'italic');
doc.text('BINUS @Kemanggisan', rightColX, rightY);
rightY += 14;

// Section: EXPERIENCE
doc.setTextColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.text('EXPERIENCE', rightColX, rightY);
doc.setDrawColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.setLineWidth(0.4);
doc.line(rightColX, rightY + 1.5, pageWidth - 12, rightY + 1.5);
rightY += 8;

// Exp 1: PMB & Expo
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Treasurer of PMB & Expo Program', rightColX, rightY);
rightY += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.text('MT Al-Khawarizmi in Binus @Kemanggisan', rightColX, rightY);
rightY += 4;
doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.text('West Jakarta, June 2025 - August 2025', rightColX, rightY);
rightY += 5;

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
const exp1Desc = "Managed the financial planning and budgeting of the PMB & Expo program while actively contributing to the development of the event concept, operational structure, and execution strategy. Collaborated with committee members to allocate resources effectively, monitor expenditures, and ensure that program objectives were achieved within budget and on schedule.";
const exp1Lines = doc.splitTextToSize(exp1Desc, rightColWidth - 5);
doc.text(exp1Lines, rightColX, rightY);
rightY += exp1Lines.length * 4 + 7;

// Exp 2: Logistics Coordinator
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
const exp2Title = "Logistics & Consumption Division Coordinator of MT Al-Khawarizmi Welcoming Party";
const exp2TitleLines = doc.splitTextToSize(exp2Title, rightColWidth - 5);
doc.text(exp2TitleLines, rightColX, rightY);
rightY += exp2TitleLines.length * 4.5;

doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.text('MT Al-Khawarizmi in Binus @Kemanggisan', rightColX, rightY);
rightY += 4;
doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.text('West Jakarta, July 2025 - October 2025', rightColX, rightY);
rightY += 5;

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
const exp2Desc = "Led the Logistics and Consumption Division in organizing a welcoming event for new students. Coordinated logistical operations, managed procurement and distribution of supplies, supervised team members, and ensured that all operational requirements and participant needs were fulfilled efficiently throughout the event.";
const exp2Lines = doc.splitTextToSize(exp2Desc, rightColWidth - 5);
doc.text(exp2Lines, rightColX, rightY);
rightY += exp2Lines.length * 4 + 7;

// Exp 3: Public Relations Coordinator
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
const exp3Title = "Public Relations Division Coordinator of KURMA (Kunjungan Rohani dan Motivasi Anak) Program";
const exp3TitleLines = doc.splitTextToSize(exp3Title, rightColWidth - 5);
doc.text(exp3TitleLines, rightColX, rightY);
rightY += exp3TitleLines.length * 4.5;

doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.text('MT Al-Khawarizmi in Binus @Kemanggisan', rightColX, rightY);
rightY += 4;
doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.text('West Jakarta, September 2025 - November 2025', rightColX, rightY);
rightY += 5;

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
const exp3Desc = "Coordinated public relations activities by managing communications with volunteer, partners, and external stakeholders. Led promotional efforts, facilitated information dissemination, and maintained effective stakeholder engagement to support the successful implementation of the program.";
const exp3Lines = doc.splitTextToSize(exp3Desc, rightColWidth - 5);
doc.text(exp3Lines, rightColX, rightY);


// ======================= PAGE 2 =======================
doc.addPage();

// Left column background
doc.setFillColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.rect(0, 0, leftColWidth, pageHeight, 'F');

// Section: SKILLS
leftY = 25;
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.text('SKILLS', 8, leftY);
doc.setDrawColor(255, 255, 255);
doc.setLineWidth(0.4);
doc.line(8, leftY + 1.5, leftColWidth - 8, leftY + 1.5);
leftY += 9;

const skills = [
  "Programming & Software Development (Python, C, C++, Java, JavaScript, and MySQL)",
  "Machine Learning & AI Development (Scikit-learn, TensorFlow, CNN, Random Forest, XGBoost, and MobileNetV2 Data Analysis)",
  "Data Analysis & Preprocessing (Pandas, NumPy, Data Cleaning, Feature Engineering, and Exploratory)",
  "Web Application Development (Flask, FastAPI, REST API Development, and Database Integration)",
  "Problem Solving & Analytical Thinking (Algorithm Design, Debugging, and Data-Driven Decision Making)",
  "Leadership & Team Collaboration (Project Coordination, Teamwork, and Cross-Functional Collaboration)",
  "Communication & Public Speaking (Presentation, Stakeholder Engagement, and Bilingual Communication)",
  "Project & Event Management (Operational Planning, Resource Management, Budgeting, and Event Execution)",
  "Adaptability & Continuous Learning (Quick Learner, Growth Mindset, and Technology Exploration)"
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);

skills.forEach(skill => {
  doc.circle(9.5, leftY - 1, 0.7, 'F');
  const lines = doc.splitTextToSize(skill, leftColWidth - 16);
  doc.text(lines, 12, leftY);
  leftY += lines.length * 4.2 + 3.8;
});

// RIGHT COLUMN - PAGE 2
rightY = 25;

// Exp 4: Ramadan Festival
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Treasurer of Ramadan Festival', rightColX, rightY);
rightY += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.text('MT Al-Khawarizmi in Binus @Kemanggisan', rightColX, rightY);
rightY += 4;
doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.text('West Jakarta, February 2026', rightColX, rightY);
rightY += 5;

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
const exp4Desc = "Oversaw budgeting, financial administration, and expense management for the Ramadan Festival while also contributing to event planning and organizational decision-making. Worked closely with the committee to develop program concepts, establish operational workflows, and ensure the successful execution of the event within allocated resources.";
const exp4Lines = doc.splitTextToSize(exp4Desc, rightColWidth - 5);
doc.text(exp4Lines, rightColX, rightY);
rightY += exp4Lines.length * 4 + 10;

// Section: EDUCATION
doc.setTextColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.text('EDUCATION', rightColX, rightY);
doc.setDrawColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.setLineWidth(0.4);
doc.line(rightColX, rightY + 1.5, pageWidth - 12, rightY + 1.5);
rightY += 8;

// Edu 1: BINUS
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('BINUS University', rightColX, rightY);
rightY += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.text('Bachelor of Computer Science', rightColX, rightY);
rightY += 4;
doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.text('West Jakarta, September 2024 - June 2028', rightColX, rightY);
rightY += 8;

// Edu 2: SMAN 8 Depok
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('SMA Negeri 8 Depok', rightColX, rightY);
rightY += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.text('High School Diploma, Natural Science', rightColX, rightY);
rightY += 4;
doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.text('Depok, June 2021 - May 2024', rightColX, rightY);
rightY += 12;

// Section: AWARD & SERTIFICATION
doc.setTextColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.text('AWARD & SERTIFICATION', rightColX, rightY);
doc.setDrawColor(darkMaroon[0], darkMaroon[1], darkMaroon[2]);
doc.setLineWidth(0.4);
doc.line(rightColX, rightY + 1.5, pageWidth - 12, rightY + 1.5);
rightY += 8;

// Award 1: Microsoft
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Microsoft AI-900T00-A', rightColX, rightY);
rightY += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.text('The Microsoft Elevate AI Training Session', rightColX, rightY);
rightY += 4;
doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.text('111541121814901/GreatNusa/III/2026', rightColX, rightY);
rightY += 8;

// Award 2: ICPC
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('International Collegiate Programming Contest (ICPC)', rightColX, rightY);
rightY += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.text('Participant 2025', rightColX, rightY);
rightY += 4;
doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.text('ICPC Foundation', rightColX, rightY);
rightY += 8;

// Verified Links
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.text('Verified Credentials:', rightColX, rightY);
rightY += 5;

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(0, 102, 204);
doc.text('• Honorable Certificate (Google Drive)', rightColX, rightY);
doc.link(rightColX, rightY - 3, 60, 4, { url: 'https://drive.google.com/file/d/13kzQcPdP6-2Q_NaKyG2aCWpO4_Dbp0zy/view?usp=sharing' });
rightY += 4.5;

doc.text('• Medal Certificate (Google Drive)', rightColX, rightY);
doc.link(rightColX, rightY - 3, 60, 4, { url: 'https://drive.google.com/file/d/1RZvHxwVCkRTPc7OXKBAMSgVSPXHFkAfi/view?usp=drive_link' });
rightY += 4.5;

doc.text('• Place Certificate (Google Drive)', rightColX, rightY);
doc.link(rightColX, rightY - 3, 60, 4, { url: 'https://drive.google.com/file/d/12Vffs4bJ6mEdnnciptvgWorEFRM5S8db/view?usp=drive_link' });

// Ensure output directory exists
const outDir = path.resolve('public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outputPath = path.join(outDir, 'Pandya_Zannito_Prawoko_CV.pdf');
const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBytes));

console.log('Successfully generated:', outputPath);
