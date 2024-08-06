import React from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
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
          <div className=' main h-[300vh] w-screen rounded-t-[6vw] bg-[#111] relative'>
               <div className="projHead flex flex-col mt-56 mb-32 mx-52">
                    <p className='text-white text-[8vw] matter-regular leading-tight'>Featured</p>
                    <span className='flex items-center'><span className='w-64 inline-block bg-white h-44 rounded-[100px] mx-7'></span><p className='text-white text-[8vw] matter-light italic leading-tight'>projects</p></span>
               </div>
               <div className="projContainer relative flex justify-evenly h-[200vh] ">
                    <div className="leftside w-[40%] relative  flex flex-col ">
                         <div className="chardContainer w-[100%] h-[60%] my-10 relative flex flex-col justify-center">
                              <div className="images  flex justify-center flex-col items-center space-y-5">
                                   <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%] rounded-3xl ' />
                                   <p className='text-white text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                              </div>

                         </div>
                         <div className="chardContainer w-[100%] h-[60%] my-10 relative flex flex-col justify-center">
                              <div className="images  flex justify-center flex-col items-center space-y-5">
                                   <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%]  rounded-3xl' />
                                   <p className='text-white text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                              </div>

                         </div>

                    </div>
                    <div className="rightside w-[40%] relative mt-[25%] ">
                         <div className="chardContainer w-[100%] h-[70%] my-10 relative flex flex-col justify-center ">
                              <div className="images  flex justify-center flex-col items-center space-y-5">
                                   <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%]  rounded-3xl' />
                                   <p className='text-white text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Projects
