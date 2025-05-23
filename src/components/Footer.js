import React from 'react';
import mapIcon from '../images/map.png';
import githubIcon from '../images/skills/github.png';
import linkedinIcon from '../images/linkedin.png';

const Footer = () => {
  return (
    <footer className="relative bg-[rgb(10,0,27)] text-white py-4">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-[rgb(15,5,37)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">blertaaliu6@gmail.com</p>
            </div>
            <div className="p-6 bg-[rgb(15,5,37)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <div className="flex items-center justify-center gap-2">
                <img src={mapIcon} alt="location" className="w-5 h-5" />
                <p className="text-gray-300">Prishtina, Kosovo</p>
              </div>
            </div>
            <div className="p-6 bg-[rgb(15,5,37)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/blertaaliu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6 bg-white rounded-full" />
                </a>
                <a href="https://www.linkedin.com/in/blerta-aliu-978783254/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Blerta Aliu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 