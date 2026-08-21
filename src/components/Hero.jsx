import myimage from '../assets/manpreet.jpg';
import React from 'react';

const Hero = ({ personalInfo }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      
      {/* Background Animated Blobs */}
      <div className="gradient-blob w-96 h-96 bg-indigo-500 top-10 -left-20"></div>
      <div className="gradient-blob w-96 h-96 bg-cyan-400 top-40 right-0"></div>
      <div className="gradient-blob w-80 h-80 bg-purple-600 bottom-10 left-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status / Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/30 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for new web projects</span>
            </div>

            {/* Catchy Main Heading */}
            <img
              src="https://i.postimg.cc/FHTDh0CF/manpreet.jpg"
              alt="Manpreet Kaur"
              className="w-20 h-20 rounded-full object-cover mb-3"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm <span className="text-gradient">Manpreet Kaur</span> 👋
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">
              Web Designer & <span className="text-indigo-600 dark:text-indigo-400">Frontend Developer</span>
            </h2>

            {/* Short Tagline / Intro */}
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline} Building modern, pixel-perfect, responsive web applications with clean code and intuitive user interfaces.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-bold text-base btn-primary flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-bold text-base btn-secondary flex items-center gap-2"
              >
                <span>Contact Me</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            {/* Quick Contact Links Display */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 002 2h1.5a1 1 0 01.95.684l1.2 3.6a1 1 0 01-.26 1.05l-1.3 1.3a16 16 0 006.6 6.6l1.3-1.3a1.5 1.5 0 011.05-.26l3.6 1.2a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold">{personalInfo.phone}</span>
              </a>
            </div>

          </div>

          {/* Hero Right Visual Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-40 blur-xl animate-pulse"></div>

              {/* Main Card Graphic */}
              <div className="relative glass-panel rounded-3xl p-8 shadow-2xl space-y-6 text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-700/60">
                
                {/* Profile Header Container */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    src={my image}
                    alt="Manpreet Kaur"
                    className="w-20 h-20 rounded-full object-cover mb-3"
                  />
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">Manpreet Kaur</h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Web Designer & Frontend Dev</p>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 dark:text-slate-400">
                      <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Punjab, India</span>
                    </div>
                  </div>
                </div>             
                {/* Code Visual Mockup */}
                <div className="rounded-2xl bg-slate-900 text-slate-200 p-4 font-mono text-xs space-y-2 border border-slate-800 shadow-inner">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                    <span className="ml-2 text-[10px] text-slate-400">developer.js</span>
                  </div>
                  <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-emerald-300">'Manpreet Kaur'</span>,</p>
                  <p className="pl-4"><span className="text-cyan-300">role</span>: <span className="text-emerald-300">'Web Designer'</span>,</p>
                  <p className="pl-4"><span className="text-cyan-300">skills</span>: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Tailwind'</span>, <span className="text-amber-300">'JS'</span>],</p>
                  <p className="pl-4"><span className="text-cyan-300">passion</span>: <span className="text-emerald-300">'Crafting digital beauty'</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Floating Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-500/20">
                    ⚡ React 18
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/20">
                    🎨 Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/20">
                    ✨ UI/UX Design
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
