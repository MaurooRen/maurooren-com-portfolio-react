import React from 'react';
import Header from './layout/Header';
import Hero from './layout/Hero';
import Skills from './layout/Skills';
import Projects from './layout/Projects';
//styles
import './styles/App.css';
//fontawesome
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
