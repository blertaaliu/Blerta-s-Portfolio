import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg transition-all duration-300">
      <div className="w-16 h-16 mb-3">
        <img 
          src={skill.logo} 
          alt={skill.name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
    </div>
  );
};

export default SkillCard; 