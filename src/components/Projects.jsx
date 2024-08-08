import React from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import Cursor from './Cursor'
function Projects() {
     // useGSAP(()=>{
     //      gsap.from(".main",{
     //           y:20,
     //           opacity:0,
     //           delay:.6,
     //           duration:.5,
     //           ease:"power2.out"
     //      })
     // })
     return (
          <div className=' main md:h-[300vh] w-screen rounded-t-[6vw] bg-[#111] relative -mt-36 py-10'>

               <div className="projHead flex flex-col mt-[7%] mb-32 mx-[8%]">
                    <p className='text-white md:text-[8vw] text-[2.7rem] matter-regular leading-tight mb-3'>Featured</p>
                    <span className='flex items-center '>
                         <span className='md:w-64 md:h-44 w-36 h-20 inline-block bg-white  rounded-[100px] mr-7 '></span>
                         <p className='text-white md:text-[8vw] text-[2.2rem] matter-light italic leading-tight -mt-7'>projects</p>
                    </span>
               </div>
               <div className="projContainer relative flex justify-evenly md:h-[200vh]  md:flex-row flex-col ">
                    <div className="leftside md:w-[40%] relative  flex flex-col ">
                         <div className="chardContainer w-[100%] h-[60%] my-10 relative flex flex-col justify-center">
                              <div className="images  flex justify-center flex-col items-center space-y-5">
                                   <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%] rounded-3xl ' />
                                   <p className='text-white text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                              </div>

                         </div>
                         <div className="chardContainer w-[100%] h-[60%] my-10 relative flex flex-col justify-center">
                              <div className="images  flex justify-center flex-col items-center space-y-5 ">
                                   <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%]  rounded-3xl' />
                                   <p className='text-white text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                              </div>

                         </div>

                    </div>
                    <div className="rightside md:w-[40%] relative md:mt-[25%] ">
                         <div className="chardContainer w-[100%] h-[70%] my-10 relative flex flex-col justify-center">
                              <div className="images  flex justify-center flex-col items-center space-y-5">
                                   <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%]  rounded-3xl' />
                                   <p className='text-white text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                              </div>

                         </div>
                    </div>
               </div>
               <div className="btn flex items-center justify-center">
                    <button className='md:w-48 border-[#2b2b2b] border md:h-28 rounded-[100px] matter-regular text-2xl relative overflow-hidden flex items-center justify-center baraButtonB h-16 w-44'>
                         <span className='z-10 text-white'>See more</span>
                    </button>
               </div>
          </div>
     )
}

export default Projects
