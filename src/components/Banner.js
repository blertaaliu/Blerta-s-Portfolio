import React, { useState, useEffect } from 'react';
import heroImage from '../images/blertaPortfolio.png';

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Array of tech words to animate around the image
  const techWords = [
    { text: "Full Stack", delay: "0s", direction: "1" },
    { text: "Developer", delay: "2s", direction: "-1" },
    { text: "React", delay: "1s", direction: "1" },
    { text: "Node.js", delay: "3s", direction: "-1" },
    { text: "JavaScript", delay: "0.5s", direction: "1" },
    { text: "PHP", delay: "2.5s", direction: "-1" }
  ];

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        isScrolled 
          ? 'bg-[rgba(10,0,27,0.95)] backdrop-blur-md shadow-lg shadow-emerald-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Name */}
            <a 
              href="#" 
              className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 transition-transform duration-300 ${
                isScrolled ? 'scale-90' : ''
              }`}
            >
              BA
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-emerald-400 hover:text-emerald-300 transition-all duration-300 relative group ${
                    isScrolled ? 'py-2' : 'py-3'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              {/* Special Contact Button */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="relative group px-6 py-2 overflow-hidden rounded-full transition-all duration-300"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 opacity-70 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                
                {/* Button background with gradient */}
                <div className="absolute inset-[1.5px] bg-[rgb(10,0,27)] rounded-full transition-all duration-300 group-hover:bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-emerald-600/20"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Text content */}
                <span className="relative text-emerald-400 group-hover:text-emerald-300 font-medium">
                  Contact
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-emerald-400 hover:text-emerald-300 transition-colors px-4 py-2 rounded-lg hover:bg-emerald-400/10"
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Contact Button */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block relative overflow-hidden rounded-lg"
              >
                <div className="relative px-4 py-2 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-colors">
                  Contact
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Banner Section */}
      <section className="w-full min-h-[88vh] bg-[rgb(10,0,27)] flex flex-col lg:flex-row justify-center items-center p-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Twinkling stars */}
          {[...Array(100)].map((_, i) => (
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
          
          {/* Floating orbs */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute w-32 h-32 rounded-full opacity-20 blur-3xl animate-float"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(34,197,94,0.3)' : 'rgba(16,185,129,0.3)'}, transparent)`,
                left: `${(i * 25)}%`,
                top: `${Math.random() * 70 + 15}%`,
                animationDelay: `${i * 1.5}s`,
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

        <div className="w-full max-w-[1200px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 mt-20 lg:mt-0">
          <div className="max-w-[800px]">
            {/* Animated title */}
            <h1 className="text-6xl font-bold text-white mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 animate-gradient">
                Welcome.
              </span>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500"></div>
            </h1>

            {/* Animated text */}
            <div className="flex flex-wrap gap-2 text-xl lg:text-2xl text-white mb-8">
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.1s]">My</span>
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.2s]">name</span>
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.3s]">is</span>
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.4s] bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400">Blerta</span>
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.5s] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">Aliu</span>
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.6s]">,</span>
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.7s]">a</span>
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.8s]">full-stack</span>
              <span className="opacity-0 translate-y-5 animate-[fadeInUp_0.5s_forwards] [animation-delay:0.9s]">developer</span>
            </div>

            {/* Description with glowing effect */}
            <div className="text-lg text-gray-300 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <p className="relative">
                Dedicated and passionate full-stack developer specializing in creating dynamic, user-friendly websites. 
                Skilled at solving complex challenges and committed to delivering innovative, impactful web solutions.
              </p>
            </div>
          </div>

          {/* Tech words animation */}
          <div className="relative h-[360px] w-[360px] flex items-center justify-center">
            {/* Rotating text elements */}
            {techWords.map((word, index) => (
              <div
                key={word.text}
                className="absolute w-full h-full animate-spin-slow pointer-events-none"
                style={{
                  animationDirection: word.direction === "1" ? "normal" : "reverse",
                  animationDelay: word.delay,
                }}
              >
                <span
                  className="absolute text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400
                           transform -translate-x-1/2 flex items-center gap-2"
                  style={{
                    top: `${(index * 60) % 360}deg`,
                    transform: `rotate(${(index * 60) % 360}deg) translateY(-180px) rotate(-${(index * 60) % 360}deg)`,
                  }}
                >
                  {word.text}
                  <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
                </span>
              </div>
            ))}
          </div>

          {/* Profile image with enhanced effects */}
          <div className="relative h-[360px] w-[360px] flex items-center justify-center">
            {/* Rotating border effect */}
            <div className="absolute inset-0 bg-gradient-conic from-emerald-500 via-green-500 to-teal-500 rounded-full animate-spin-slow opacity-75 blur-md"></div>
            
            {/* Inner glow effects */}
            <div className="absolute inset-4 bg-[rgb(15,5,37)] rounded-full">
              {/* Additional inner glow layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/20 to-emerald-500/20 rounded-full blur-md"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(34,197,94,0.5)] to-transparent rounded-full opacity-30 blur-xl animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-[rgba(34,197,94,0.3)] animate-float">
              {/* Additional glow effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-green-500/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-[rgb(15,5,37)]/50"></div>
              
              {/* Image */}
              <img 
                src={heroImage} 
                alt="Blerta Aliu" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner; 