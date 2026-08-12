import React from 'react';

const About = ({ personalInfo }) => {
  return (
    <section id="about" className="py-20 relative z-10 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate About Crafting <span className="text-gradient">Impactful Digital Experiences</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Highlights / Achievements Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl text-center hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4 shadow-md">
                {index === 0 && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {index === 3 && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {metric.value}
              </h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Responsive Web Design</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Crafting mobile-first layouts that fluidly adapt across smartphones, tablets, and wide desktop screens.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend Architecture</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Writing clean, modular React component trees with optimized state management and fast renders.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xl">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Modern UI/UX Polish</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Elevating user interfaces with micro-animations, glassmorphism, gradient accents, and accessibility.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
