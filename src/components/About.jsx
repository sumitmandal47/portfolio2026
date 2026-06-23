import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Download, Heart, Users, ShieldAlert, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    type: 'experience',
    year: '2024 - Present',
    title: 'Frontend Engineer',
    company: 'Innovate Tech Labs',
    desc: 'Led migration to React 19 and Vite. Developed reusable component libraries, optimized bundle sizes by 30%, and incorporated micro-animations using GSAP to boost user metrics.'
  },
  {
    type: 'experience',
    year: '2022 - 2024',
    title: 'Junior Web Developer',
    company: 'Core Solutions',
    desc: 'Collaborated on client projects building responsive web applications. Crafted custom interactive UI components and integrated RESTful services using state management systems.'
  },
  {
    type: 'education',
    year: '2019 - 2022',
    title: 'B.Sc. Computer Science',
    company: 'Delhi University',
    desc: 'Graduated with Honors. Focused on object-oriented programming, data structures, algorithms, database management systems, and core web engineering technologies.'
  }
];

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fade in timeline items sequentially on scroll
    gsap.fromTo(
      '.timeline-card',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    // About text section reveal
    gsap.fromTo(
      '.about-text-reveal',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.about-text-reveal',
          start: 'top 85%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-accent-pink/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            About <span className="text-gradient">My Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Story & Bio */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left about-text-reveal">
            <h3 className="text-2xl font-bold text-white">Who is Sumit?</h3>
            <p className="text-slate-300 leading-relaxed">
              I am a passionate frontend developer dedicated to designing and programming engaging web systems. 
              My expertise centers around the modern JavaScript/TypeScript ecosystem, particularly React, Vite, 
              Tailwind CSS, and animation suites like GSAP and Framer Motion.
            </p>
            <p className="text-slate-350 leading-relaxed">
              I believe that website user interfaces should be responsive, performant, and visual narratives. 
              By combining strict grid architectures with fluid micro-interactions, I engineer platforms 
              that leave long-lasting positive impressions.
            </p>

            {/* Core Values grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-accent-cyan/20 transition-colors">
                <Users className="w-6 h-6 text-accent-cyan mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Collaboration</h4>
                <p className="text-xs text-slate-400">Excellent communication and cross-functional team skills.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-accent-violet/20 transition-colors">
                <Award className="w-6 h-6 text-accent-violet mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Code Quality</h4>
                <p className="text-xs text-slate-400">Clean, performant, and standards-compliant component trees.</p>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-6 timeline-container text-left">
            <h3 className="text-2xl font-bold text-white mb-8 pl-4">Education & Work Experience</h3>
            <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-8">
              {timelineData.map((item, idx) => (
                <div key={idx} className="timeline-card relative">
                  {/* Timeline Node dot indicator */}
                  <span className="absolute -left-[41px] top-1 bg-[#070a13] p-1 rounded-full border border-slate-800">
                    {item.type === 'experience' ? (
                      <Briefcase className="w-4 h-4 text-accent-cyan" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-accent-violet" />
                    )}
                  </span>

                  <div className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
                    <span className="text-xs font-semibold text-accent-cyan tracking-wider uppercase">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">{item.title}</h4>
                    <p className="text-sm font-medium text-slate-400">{item.company}</p>
                    <p className="text-xs text-slate-350 mt-3 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
