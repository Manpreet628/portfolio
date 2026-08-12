import React, { useState } from 'react';

const Skills = ({ skillsData }) => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend & APIs' },
    { id: 'tools', name: 'Tools & Technologies' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'frontend') return skillsData.frontend;
    if (activeTab === 'backend') return skillsData.backend;
    if (activeTab === 'tools') return skillsData.tools;
    return [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools];
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my technical toolset, modern web standards, and design proficiency.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categorized Grid Display */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl space-y-4 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Indicator */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5">
                <div
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Tech Stack Badges Summary */}
        <div className="mt-16 glass-panel rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80">
          <h3 className="text-center font-bold text-xl text-slate-900 dark:text-white mb-6">
            Frequently Used Frameworks & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Next.js", "Node.js", "Express", "REST API", "Git", "GitHub", "Figma", "Vite", "VS Code"].map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-200/70 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border border-slate-300/50 dark:border-slate-700/60 hover:border-indigo-500 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
