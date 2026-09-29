import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, ExternalLink, HelpCircle } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'guide'>('code');

  if (!isOpen) return null;

  const htmlContent = generateStandaloneHtml();

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base font-heading">
                File Kode HTML Mandiri (Standalone index.html)
              </h3>
              <p className="text-xs text-slate-400">
                100% lengkap tanpa dependensi server (siap simpan &amp; buka langsung di browser).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 border-b border-slate-800 flex items-center gap-4 bg-slate-950/40">
          <button
            onClick={() => setActiveTab('code')}
            className={`pb-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Pratinjau Kode (index.html)
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`pb-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'guide'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Petunjuk Kustomisasi &amp; Hosting Gratis</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs">
          {activeTab === 'code' ? (
            <div className="relative">
              <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 overflow-x-auto text-[11px] leading-relaxed selection:bg-blue-600">
                <code>{htmlContent}</code>
              </pre>
            </div>
          ) : (
            <div className="space-y-6 font-sans text-xs text-slate-300 leading-relaxed">
              
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 space-y-2">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">1</span>
                  Cara Mengganti Foto Profil
                </h4>
                <p className="text-slate-300">
                  Buka file <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">index.html</code> pada teks editor favorit Anda (VS Code, Sublime Text, atau Notepad). Cari tag <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">&lt;img ... alt=&quot;Pandya Zannito Prawoko&quot; ...&gt;</code> di dalam Hero Section. Ganti atribut <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">src=&quot;...&quot;</code> dengan URL foto profil Anda (misal link gambar di GitHub, Cloudinary, atau simpan file foto lokal bernama <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">avatar.jpg</code> pada folder yang sama).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">2</span>
                  Mengedit Tautan Media Sosial &amp; Kontak
                </h4>
                <p className="text-slate-300">
                  Cari bagian <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">&lt;!-- Social Channels --&gt;</code> dan ubah tautan <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">href=&quot;...&quot;</code> ke akun LinkedIn, GitHub, Instagram, atau alamat email Anda sendiri.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">3</span>
                  Mempublikasikan Web Secara Gratis (Online)
                </h4>
                <div className="space-y-2 pl-2 border-l-2 border-slate-700">
                  <p>
                    <strong className="text-white">Opsi A: Netlify Drop (Paling Mudah - 1 Menit)</strong><br />
                    Kunjungi <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline inline-flex items-center gap-0.5">app.netlify.com/drop <ExternalLink className="w-3 h-3" /></a>, lalu seret (drag and drop) folder yang berisi file <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">index.html</code>. Website Anda akan langsung online dengan domain gratis seperti <code>pandya-portfolio.netlify.app</code>!
                  </p>
                  <p>
                    <strong className="text-white">Opsi B: GitHub Pages</strong><br />
                    Buat repositori baru di GitHub (misal: <code>username.github.io</code>), unggah file <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">index.html</code>, lalu aktifkan GitHub Pages di menu <em>Settings &rarr; Pages &rarr; Branch: main &rarr; Save</em>.
                  </p>
                  <p>
                    <strong className="text-white">Opsi C: Vercel</strong><br />
                    Impor repositori GitHub ke akun Vercel Anda, dan klik <em>Deploy</em> tanpa perlu pengaturan build tambahan.
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Action Bar */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh File index.html</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kode Berhasil Disalin!' : 'Salin Seluruh Kode'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
