import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Cpu, Hammer, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'text-accent-cyan',
    bgColor: 'bg-accent-cyan/10',
    skills: [
      { name: 'React 19 / JSX', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML5 & CSS3', level: 95 }
    ]
  },
  {
    title: 'Animations & Styling',
    icon: Palette,
    color: 'text-accent-pink',
    bgColor: 'bg-accent-pink/10',
    skills: [
      { name: 'Tailwind CSS 4', level: 95 },
      { name: 'GSAP Animations', level: 85 },
      { name: 'Framer Motion', level: 90 },
      { name: 'Responsive Web Design', level: 95 }
    ]
  },
  {
    title: 'Backend & Services',
    icon: Cpu,
    color: 'text-accent-violet',
    bgColor: 'bg-accent-violet/10',
    skills: [
      { name: 'Node.js & Express', level: 80 },
      { name: 'RESTful API Design', level: 85 },
      { name: 'GraphQL Schema', level: 70 },
      { name: 'Database (MongoDB/SQL)', level: 75 }
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: Hammer,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    skills: [
      { name: 'Vite / Bundlers', level: 90 },
      { name: 'Git & GitHub Collaboration', level: 90 },
      { name: 'Bun / NPM Package Managers', level: 85 },
      { name: 'ESLint / Code Standards', level: 80 }
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animate skill progress bars from width 0 to actual value when scrolling into view
    const progressBars = gsap.utils.toArray('.skill-progress-bar');
    
    progressBars.forEach((bar) => {
      const targetWidth = bar.getAttribute('data-level') + '%';
      
      gsap.fromTo(bar, 
        { width: '0%' },
        {
          width: targetWidth,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // Fade in skill categories
    gsap.fromTo('.skill-category-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.skills-grid-container',
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden bg-bg-darker/30">
      {/* Decorative Blob */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Technical <span className="text-gradient">Proficiencies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="skill-category-card glass-panel p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 relative group"
              >
                {/* Heading Icon */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl ${category.bgColor} ${category.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills progress list */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-slate-300">{skill.name}</span>
                        <span className="text-xs font-mono text-slate-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar container */}
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                        <div
                          className="skill-progress-bar h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                          data-level={skill.level}
                          style={{ width: '0%' }} // Initial width set to 0% for GSAP animation
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
