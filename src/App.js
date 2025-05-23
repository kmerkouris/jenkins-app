import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';


function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen p-6">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
