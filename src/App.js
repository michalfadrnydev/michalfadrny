import React from 'react';

import './styles/main.scss';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TopSection from './components/TopSection/TopSection';

const App = () => {
  return (
    <>
      <TopSection/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
