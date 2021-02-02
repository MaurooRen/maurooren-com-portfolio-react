import React from 'react';
import Header from './layout/Header';
import Hero from './layout/Hero';
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
    </div>
  );
}

export default App;
