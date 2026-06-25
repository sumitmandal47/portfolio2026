
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-bg-darker border-t border-slate-900 py-12 md:py-16 mt-20">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-radial-gradient from-accent-violet/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border-b border-slate-800/60 pb-10 mb-10">
          {/* Logo / Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-xl font-bold tracking-tight text-white mb-2"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-cyan to-accent-violet flex items-center justify-center text-sm font-extrabold text-white">
                S
              </span>
              <span>Sumit</span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs">
              Designing and developing beautiful, high-performance web experiences.
            </p>
          </div>


          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">About</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/sumitmandal47"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/40 hover:bg-slate-80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-350 hover:scale-105"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sumitmandal47/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/40 hover:bg-slate-85 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-350 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mandalsumit615@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-800/40 hover:bg-slate-85 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-350 hover:scale-105"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-cyan to-accent-violet hover:from-accent-pink hover:to-accent-violet text-white flex items-center justify-center shadow-lg shadow-accent-cyan/10 hover:shadow-accent-pink/20 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sumit. All rights reserved.</p>
          <p>
            Built with{' '}
            <span className="text-accent-pink">♥</span> using React 19, Vite, & Tailwind CSS 4.
          </p>
        </div>
      </div>
    </footer>
  );
}
