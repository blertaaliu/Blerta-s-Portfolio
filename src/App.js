import React, { useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
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
