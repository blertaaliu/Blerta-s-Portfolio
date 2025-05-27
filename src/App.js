import React, { useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
  }, []);

  return (
    <div className="App">
      <Banner />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
