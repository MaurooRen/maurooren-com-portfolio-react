import React, {useEffect, useState} from 'react';
import axios from 'axios';
//layouts
import Header from './layout/Header';
import Hero from './layout/Hero';
import Skills from './layout/Skills';
import Projects from './layout/Projects';
//weather api
import { BASE_URL, API_KEY} from './constants'
//styles
import './styles/App.css';
//fontawesome
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function App() {

  const [weather, setWeather] = useState({})

  //http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
  const fetchWeather = () => {
    axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=Miramar`)
      .then(res => {
        // console.log(res.data.current.condition.text)
        setWeather(res.data)
      })
      .catch(err => {
        console.log('Ups!')
      })
  }

  useEffect(fetchWeather, [])

  return (
    <div className="App">
      <Header />
      <Hero weather={weather} />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
