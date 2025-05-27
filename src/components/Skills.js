import React, { useEffect, useRef } from 'react';
import { skills } from '../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const skillElements = skillsRef.current.querySelectorAll('.skill-card');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Calculate delay for each skill card
  const getDelay = (index) => {
    const row = Math.floor(index / 5); // Assuming 5 items per row on large screens
    const col = index % 5;
    return (row + col) * 0.1; // Diagonal wave effect
  };

  return (
    <section id="skills" className="py-16 bg-[rgb(15,5,37)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Twinkling stars */}
        {[...Array(50)].map((_, i) => (
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

        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(34,197,94,0.3)' : 'rgba(16,185,129,0.3)'}, transparent)`,
              left: `${(i * 50)}%`,
              top: `${Math.random() * 70 + 15}%`,
              animationDelay: `${i * 2}s`,
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-bold inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Skills & Technologies
            </span>
          </h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>

        {/* Skills Grid */}
        <div 
          ref={skillsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-card opacity-0 translate-y-8"
              style={{
                '--delay': `${getDelay(index)}s`,
              }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes and styles */}
      <style jsx>{`
        .skill-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .skill-card.animate-in {
          animation: skillCardIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: var(--delay);
        }
        
        @keyframes skillCardIn {
          0% {
            opacity: 0;
            transform: translateY(2rem) scale(0.95);
          }
          60% {
            transform: translateY(-0.5rem) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .skill-card:hover {
          transform: translateY(-0.5rem) scale(1.05);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Skills; 