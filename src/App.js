import logo from './logo.svg';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero.jsx';
import Highlights from './Components/Highlights/Highlights.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Others from './Components/Others/Others.jsx';
import Skills from './Components/Skills/Skills.jsx';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

import './App.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <main id='main'>
        <About/>
        <Skills/>
        <Portfolio/>
        <Highlights/>
        <Others/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
