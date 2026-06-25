import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Code, Play } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.fromTo(
      '.glow-blob',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 0.15, duration: 2, ease: 'power2.out', stagger: 0.3 }
    );

    tl.fromTo(
      '.reveal-element',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
      '-=1.2'
    );


    gsap.to('.blob-1', {
      x: 30,
      y: -30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    gsap.to('.blob-2', {
      x: -40,
      y: 40,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  const handleExploreProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Glow Ambient Blobs */}
      <div className="glow-blob blob-1 absolute top-[10%] left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-violet rounded-full blur-[120px]" />
      <div className="glow-blob blob-2 absolute bottom-[10%] right-[5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-accent-cyan rounded-full blur-[130px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className="reveal-element inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Designer & Developer</span>
          </div>

          <h1 className="reveal-element text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Crafting Digital <br className="hidden sm:inline" />
            Experiences with <br />
            <span className="text-gradient">Precision & Artistry</span>
          </h1>

          <p className="reveal-element text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
            I am Sumit, a frontend specialist who shapes dynamic, performance-first interfaces.
            Blending technical engineering with interactive design principles to tell compelling product stories.
          </p>

          <div className="reveal-element flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={handleExploreProjects}
              className="group px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-cyan to-accent-violet hover:from-accent-cyan hover:to-accent-pink shadow-lg shadow-accent-cyan/15 hover:shadow-accent-pink/35 flex items-center justify-center space-x-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          <div className="reveal-element grid grid-cols-3 gap-6 md:gap-8 pt-6 border-t border-slate-800/80 w-full max-w-md">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">2+</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">10+</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Projects Completed</p>
            </div>
            {/* <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">99%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Client Satisfaction</p>
            </div> */}
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            drag
            dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
            dragElastic={0.1}
            className="w-full max-w-[420px] glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group cursor-grab active:cursor-grabbing"
          >
            <div className="bg-[#0b0e17] px-4 py-3.5 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                <Terminal className="w-3.5 h-3.5" />
                <span>sumit-stats.json</span>
              </div>
              <div className="w-12 h-2" />
            </div>

            <div className="p-5 md:p-6 font-mono text-xs sm:text-sm text-slate-350 leading-relaxed text-left">
              <div className="text-slate-500">// Personal developer identity</div>
              <div className="mt-2">
                <span className="text-accent-pink">const</span> developer = &#123;
              </div>
              <div className="pl-4">
                <span className="text-sky-400">name</span>: <span className="text-emerald-400">"Sumit"</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-400">role</span>: <span className="text-emerald-400">"Creative Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-400">coreTech</span>: [
                <span className="text-yellow-400">"React"</span>,
                <span className="text-yellow-400">"JavaScript"</span>,
                <span className="text-yellow-400">"TypeScript"</span>,
                <span className="text-yellow-400">"Tailwind4"</span>,

                ],
              </div>
              <div className="pl-4">
                <span className="text-sky-400">animations</span>: [
                <span className="text-accent-violet">"GSAP"</span>,
                <span className="text-accent-violet">"Framer Motion"</span>
                ],
              </div>
              <div className="pl-4">
                <span className="text-sky-400">focus</span>: <span className="text-emerald-400">"Stunning UX & Performance"</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-400">location</span>: <span className="text-emerald-400">"Bhopal, Madhya Pradesh"</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-400">coffeeLover</span>: <span className="text-amber-500">true</span>
              </div>
              <div>&#125;;</div>

              <div className="mt-4 text-slate-500">// Action: Run builder file</div>
              <div className="flex items-center space-x-2 mt-1.5 p-2 rounded bg-slate-900/60 border border-white/5">
                <Code className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-[11px] text-slate-400">bun start --portfolio-platform</span>
                <span className="w-2 h-4 bg-accent-cyan animate-pulse inline-block" />
              </div>
            </div>


            <div className="absolute right-3 bottom-3 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-450 hover:text-white">
                <Play className="w-3 h-3 fill-current" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
