import React from "react";
import Header from './components/Header.jsx';
import Feature from './components/Feature.jsx';
import About from './components/About.jsx'
import Presentation from './components/Presentation.jsx'
import aboutImage1 from './images/about.png'
import aboutImage2 from './images/download.png'
import Contact from './components/Contact.jsx'


function App() {


  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutImage1} title="Comes With All You Need For Daily Life" button="Get The App" id="about"/>
      <Presentation/>
      <About image={aboutImage2} title="Download And Get The APP Now" button="Download" id="download"/>
      <Contact/>
    </div>
  )
}

export default App
