import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import React from 'react'

function Headings() {
     useGSAP( ()=>{
          var tl = gsap.timeline()
          tl.from(".we",{
               opacity:0,
               delay:.3,
               duration:.3
          })
          tl.from(".he",{
               y:-20,
               opacity:0,
               duration:.7,
               ease:"power2.out",
               stagger:.25
          })
     }
          
     )
     return (
          <div className='w-screen px-10 md:h-[60vh]  flex flex-col justify-center items-center relative'>
               <div className='w-[66%] we'><h1 className='matter-regular'>we make it happen.</h1></div>
               <div className='flex md:items-center md:space-x-7 px-3 min-h-28 flex-col md:flex-row my-5 z-20' >
                    <span className='he py-1 px-3'><h1 className='text-[13vw] md:text-[5vw] matter-regular hover:scale-105 ml-1 leading-tight'>DESIGN</h1></span>
                    <span className='he py-1 px-3'><h1 className='text-[13vw] md:text-[5vw] matter-regular hover:scale-105 ml-1 leading-tight'>DEVELOP</h1></span>
                    <span className='he py-1 px-3'><h1 className='text-[13vw] md:text-[5vw] matter-regular hover:scale-105 ml-1 leading-tight'>DEPLOY</h1></span>
               </div>

          </div>
     )
}

export default Headings
