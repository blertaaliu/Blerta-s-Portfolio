import React from 'react';
import heroImage from '../images/blerta.jpg';

const Banner = () => {
  return (
    <section className="w-full min-h-[88vh] bg-[rgb(10,0,27)] border-b-[10px] border-[rgb(43,105,251)] flex flex-col lg:flex-row justify-center items-center p-8 relative rounded-b-[100px] overflow-hidden">
      {/* Space background with stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="max-w-[800px]">
          <h1 className="text-5xl font-bold text-white mb-6">Welcome.</h1>
          <div className="flex flex-wrap gap-2 text-xl lg:text-2xl text-white mb-8">
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.1s]">My</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.2s]">name</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.3s]">is</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.4s]">Blerta</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.5s]">Aliu,</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.6s]">a</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.7s]">full-stack</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.8s]">developer</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.9s]">based</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1s]">in</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.1s]">Prishtina, Kosovo.</span>
          </div>
          <div className="flex flex-wrap gap-2 text-lg text-gray-300">
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.2s]">Dedicated</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.3s]">and</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.4s]">passionate</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.5s]">full-stack</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.6s]">developer</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.7s]">specializing</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.8s]">in</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:1.9s]">creating</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.0s]">dynamic,</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.1s]">user-friendly</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.2s]">websites.</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.3s]">Skilled</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.4s]">at</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.5s]">solving</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.6s]">complex</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.7s]">challenges</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.8s]">and</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:2.9s]">committed</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:3.0s]">to</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:3.1s]">delivering</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:3.2s]">innovative,</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:3.3s]">impactful</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:3.4s]">web</span>
            <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:3.5s]">solutions.</span>
          </div>
        </div>
        <div className="relative w-[300px] h-[300px] lg:w-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[rgb(249, 249, 249)] rounded-full opacity-20 blur-2xl transform -translate-x-4 -translate-y-4"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(96, 93, 93)] to-[rgb(10,0,27)] rounded-full opacity-30 blur-xl"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[rgb(202, 208, 224)] shadow-[0_0_30px_rgba(43,105,251,0.5)] animate-float">
            <img 
              src={heroImage} 
              alt="Blerta Aliu" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 