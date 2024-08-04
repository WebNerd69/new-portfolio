
import './App.css'
import Headings from './components/Headings'
import Navbar from './components/Navbar'
import React, { useEffect , useRef } from 'react'
import Cursor from './components/Cursor';

function App() {


     return (
          <div className='main w-screen min-h-screen' >
               <Cursor/>
               <Navbar />
               <Headings />
          </div>
     )
}

export default App
