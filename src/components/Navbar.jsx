import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
     useGSAP(()=>{
          var tl = gsap.timeline()
          tl.from('#logo',{
               delay:.2,
               y:-15,
               opacity:0,
               duration:.3
          })
          tl.from('#menu',{
               y:-15,
               opacity:0,
               duration:.3, 
          })
     })
     return (
          <nav className='flex justify-between py-7 px-10'>
               <div className="left">
                    <h1 className='matter-regular text-2xl' id='logo'>sombra</h1>
               </div>
               <div className="right ">
                    <ul className='flex items-center gap-5' id='menu'>
                         <li className='roboto text-lg'>menu</li>
                         <li className=' text-xl font-black'><i className="ri-menu-line "></i></li>
                    </ul>
               </div>
          </nav>
     )
}

export default Navbar
