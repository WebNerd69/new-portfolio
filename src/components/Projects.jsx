import React from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import Cursor from './Cursor'
import { useDispatch } from 'react-redux'
import { bgHover, textHover } from '../store/CursorSlice';
import { unhide } from '../store/NavSlice'
import { useState, useEffect } from 'react'
function Projects() {
     const dispatch = useDispatch()
     const [bgdisplay,setBgdisplay] = useState("hidden")
     const [bghover, setBghover] = useState({
          color: 'bg-[#fff]',
          scale: 1,
          z: 'z-10'
     })
     const [bgLeave, setBgLeave] = useState({
          color: 'bg-[#111]',
          scale: 1,
          z: 'z-10'
     })
     const [btnhover, setBtnhover] = useState({
          color: 'bg-[#111]',
          scale: 1,
          z: 'z-0'
     })
     const projEnter = () => {
          dispatch(bgHover(bghover))
          setBgdisplay("flex")
          dispatch(unhide(bgdisplay))
     }
     const btnEnter = () => {
          dispatch(bgHover(btnhover))
     }
     const defaultStyle = () => {
          dispatch(bgHover(bgLeave))
     }
     return (
          <>
               <div className=' main md:h-[350vh] w-screen rounded-t-[6vw] bg-[#111] relative -mt-36 py-10 z-[1]' onMouseEnter={projEnter} onMouseLeave={defaultStyle}>

                    <div className="projHead flex flex-col mt-[7%] md:mb-32 mx-[8%]">
                         <p className='text-white md:text-[8vw] text-[2.7rem] matter-regular leading-tight mb-3'>Featured</p>
                         <span className='flex items-center '>
                              <span className='md:w-64 md:h-44 w-24 h-14 inline-block bg-white  rounded-[100px] mr-7 '></span>
                              <p className='text-white md:text-[8vw] text-[2.2rem] matter-light italic leading-tight md:-mt-7'>projects</p>
                         </span>
                    </div>
                    <div className="projContainer relative flex md:justify-evenly md:h-[250vh] md:mt-0 mt-10 md:flex-row flex-col overflow-hidden ">
                         <div className="leftside md:w-[45%] relative  flex flex-col overflow-hidden">
                              <div className="chardContainer w-[100%] relative flex flex-col justify-center md:mt-0 mt-10">
                                   <div className="images  flex justify-center flex-col items-center space-y-5">
                                        <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%] rounded-3xl ' />
                                        <p className='text-white md:text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                                   </div>

                              </div>
                              <div className="chardContainer w-[100%] h-[60%] relative flex flex-col justify-center md:mt-0 mt-10">
                                   <div className="images  flex justify-center flex-col items-center space-y-5 ">
                                        <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%]  rounded-3xl' />
                                        <p className='text-white md:text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                                   </div>

                              </div>

                         </div>
                         <div className="rightside md:w-[45%] relative flex flex-col md:pt-52 overflow-hidden">
                              <div className="chardContainer w-[100%] h-[60%] relative flex flex-col justify-center md:mt-0 mt-10">
                                   <div className="images  flex justify-center flex-col items-center space-y-5">
                                        <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%]  rounded-3xl' />
                                        <p className='text-white md:text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                                   </div>

                              </div>
                              <div className="chardContainer w-[100%] h-[60%] relative flex flex-col justify-center md:mt-0 mt-10 ">
                                   <div className="images  flex justify-center flex-col items-center space-y-5">
                                        <img src="https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[55%]  rounded-3xl' />
                                        <p className='text-white md:text-2xl w-[55%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.</p>
                                   </div>

                              </div>
                         </div>
                    </div>
                    <div className="btn flex items-center justify-center relative bottom-0 my-5">
                         {/* <div className='md:w-48 md:h-28 absolute z-50' ></div> */}
                         <button className='md:w-48 border-[#2b2b2b] border md:h-28 rounded-[100px] matter-regular text-2xl relative overflow-hidden flex items-center justify-center baraButtonB h-16 w-44' onMouseEnter={btnEnter} onMouseLeave={projEnter} onClick={() => {
                              console.log("object")
                         }}>
                              <span className='relative z-50 text-white'>See more</span>
                         </button>
                    </div>
               </div>
               <div className='h-screen w-screen bg-transparent '></div>
          </>
     )
}

export default Projects
