import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import Title from './Title.jsx'
import Service from './Service.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Slider from './Slider.jsx'
import Contact from './Contact.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero/>
    <Title subtext='OUR SERVICES' title='What We Offer'/>
    <Service/>
    <Title subtext='ABOUT UNIVERSITY' title="Nurturing Tomorrow's Leaders Today"/>
    <About/>
    <Title subtext='GALLERY' title='Project Photos'/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
