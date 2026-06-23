import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Sparkles, Code, Layout, Layers } from 'lucide-react';

const categories = ['All', 'Full-Stack', 'Frontend', 'Creative'];

const projectsData = [
  {
    id: 1,
    title: 'Developer Portfolio Platform',
    category: 'Frontend',
    summary: 'A customizable and highly interactive builder framework for developer portfolios.',
    description: 'A responsive portfolio platform featuring smooth scroll-driven mechanics, modular component bindings, and customizable CSS profiles. Constructed with React 19, Vite, and Tailwind v4. Leveraged GSAP for text-reveals and custom timelines, and Framer Motion for interactive layout adjustments.',
    tags: ['React 19', 'Tailwind v4', 'GSAP', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    id: 2,
    title: 'EcoSphere SaaS Analytics Dashboard',
    category: 'Full-Stack',
    summary: 'Real-time environmental carbon metrics and credit tracking platform.',
    description: 'An enterprise dashboard delivering sub-second updates on emission metrics. Features a responsive grid of charts, customizable layouts, dark mode optimizations, and PDF reporting. Backend built on NodeJS/Express; frontend designed using React 19 and custom Tailwind utility patterns.',
    tags: ['React 19', 'NodeJS', 'Express', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-emerald-500 to-teal-400'
  },
  {
    id: 3,
    title: 'Stellar Headless CMS',
    category: 'Full-Stack',
    summary: 'Markdown-based content creation API and editing dashboard.',
    description: 'A headless CMS engineered for developers writing markdown contents. Supports instant static generation, webhooks for automatic redeploys, and flexible content schemas. Built with Node, Express, MongoDB, and React, securing seamless developer experiences.',
    tags: ['NodeJS', 'Express', 'MongoDB', 'React', 'REST API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-violet-600 to-accent-pink'
  },
  {
    id: 4,
    title: 'Orbit Web3 Wallet UI',
    category: 'Creative',
    summary: 'Decentralized asset dashboard with state-of-the-art Web3 interfaces.',
    description: 'A sleek cryptocurrency portfolio tracker interfacing with popular EVM web wallets. Designed with glassmorphism overlays, fluid transaction animations, responsive token grids, and interactive asset distribution charts.',
    tags: ['React', 'EthersJS', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-pink-600 to-rose-400'
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-bg-darker/10">
      {/* Glow Ambient Blob */}
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-accent-pink/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            A hand-picked selection of platforms and dashboards I have architected and developed.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto rounded-full mt-6" />
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center items-center space-x-2 md:space-x-3 mb-12 flex-wrap gap-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-violet text-white shadow-md shadow-accent-cyan/15 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg cursor-pointer group flex flex-col h-full"
              >
                {/* Visual Header Panel */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
                  {/* Decorative background grids */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                  
                  <div className="flex justify-between items-center relative z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight text-left relative z-10 leading-none mb-1">
                    {project.title}
                  </h3>
                </div>

                {/* Card details */}
                <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                  <p className="text-slate-350 text-sm leading-relaxed mb-6 flex-grow">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-500">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-900 text-xs font-semibold uppercase tracking-wider text-accent-cyan hover:text-white transition-colors">
                    <span>View Project Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detailed Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-[#070a13]/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-2xl bg-[#0b0f19] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
              >
                {/* Header Gradient */}
                <div className={`h-40 bg-gradient-to-br ${selectedProject.gradient} p-8 relative flex flex-col justify-end`}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/60 backdrop-blur-md hover:bg-slate-900 text-slate-300 hover:text-white border border-white/10 transition-colors focus:outline-none"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <span className="px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white tracking-widest uppercase self-start mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white text-left tracking-tight leading-none">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Scrollable details */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-left flex-grow">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">About the Project</h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Technologies Utilized</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-850 text-xs font-mono text-slate-350"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-900">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-102"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>
                    
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-cyan to-accent-violet hover:opacity-90 shadow-md shadow-accent-cyan/10 transition-all hover:scale-102"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Showcase</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
