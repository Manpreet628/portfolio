import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Minimal Placeholder Card */}
        <div class="glass-panel p-10 sm:p-14 rounded-3xl text-center space-y-6 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px] shadow-lg flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-2xl">
              🚀
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Exciting Projects Coming Soon!
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We are currently updating our portfolio with our latest client work. Stay tuned for live case studies and web design showcases!
          </p>

          <div className="pt-4">
            <a href="contact.html" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base btn-primary shadow-xl">
              <span>Hire Us Today</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
