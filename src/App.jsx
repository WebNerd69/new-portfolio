
import './App.css'
import Headings from './components/Headings'
import Navbar from './components/Navbar'
import React, { useEffect, useRef } from 'react'
import Cursor from './components/Cursor';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {


     return (
          <>
               <div className='main w-screen min-h-screen' >
                    <Cursor />
                    <Navbar />
                    <Headings />
                    <About />
                    <Skills />
                    <Projects />
               </div>
               <Contact />
          </>
     )
}

export default App
