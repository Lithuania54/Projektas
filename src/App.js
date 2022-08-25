import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />      
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;