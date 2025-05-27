import React from 'react';
import mapIcon from '../images/map.png';
import githubIcon from '../images/skills/github.png';
import linkedinIcon from '../images/linkedin.png';

const Footer = () => {
  return (
    <footer className="relative bg-[rgb(10,0,27)] text-white py-4 overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Twinkling stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
        
        {/* Grid lines */}
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(to right, rgba(34,197,94,0.1) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(34,197,94,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               transform: 'perspective(500px) rotateX(60deg)',
               transformOrigin: 'top',
               opacity: 0.3
             }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 relative">
            <h2 className="text-5xl font-bold inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                Get In Touch
              </span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-6 bg-[rgb(15,5,37)] rounded-lg transform hover:scale-[1.02] transition duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-400">Email</h3>
                <p className="text-gray-300 hover:text-emerald-300 transition-colors">
                  <a href="mailto:blertaaliu6@gmail.com">blertaaliu6@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-6 bg-[rgb(15,5,37)] rounded-lg transform hover:scale-[1.02] transition duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <img src={mapIcon} alt="location" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-400">Location</h3>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <p>Prishtina, Kosovo</p>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-6 bg-[rgb(15,5,37)] rounded-lg transform hover:scale-[1.02] transition duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-400">Social</h3>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://github.com/blertaaliu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="transform hover:scale-110 transition duration-300"
                  >
                    <img src={githubIcon} alt="GitHub" className="w-8 h-8 bg-white rounded-full" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/blerta-aliu-978783254/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="transform hover:scale-110 transition duration-300"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="relative mt-16 pt-8">
            {/* Gradient line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            
            <p className="text-center text-gray-400 group">
              © {new Date().getFullYear()} 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 mx-1">
                Blerta Aliu
              </span>
              <span className="group-hover:text-emerald-400 transition-colors">
                All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 