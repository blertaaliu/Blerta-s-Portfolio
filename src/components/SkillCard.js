import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="group flex flex-col items-center p-6 bg-[rgb(10,0,27)] rounded-xl transition-all duration-300 hover:scale-105 relative">
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
      
      {/* Card content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <div className="relative w-full h-full">
            {/* Glow effect behind the icon */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
            <img 
              src={skill.logo} 
              alt={skill.name}
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>
        <span className="text-sm font-medium text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </div>
  );
};

export default SkillCard; 