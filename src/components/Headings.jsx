import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import React from 'react'
import { useState } from 'react'
import { bgHover } from '../store/CursorSlice'
import { useDispatch ,useSelector } from 'react-redux'
import { outClick } from '../store/NavSlice';
function Headings() {
     const [menu,setMenu] = useState(-600)
     const menuOpen = useSelector(state => state.menu)
     const dispatch = useDispatch()
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
     })

     const [bghover,setBghover] = useState({
          color:'bg-[#111]',
          scale:1,
          z:'z-10'
     })
     const headingEnter = ()=>{
          dispatch(bgHover(bghover))
     }
     // console.log(menu)
     const menuout = () =>{
          if (menu === -600){
               setMenu(0)  
          }
          else{
               setMenu(-600)
          }
          dispatch(outClick(menu))
          // console.log(menu)
     }

     return (
          <div className='w-screen px-10 pt-5 md:h-[90vh] h-[80vh] flex flex-col justify-center items-center relative bg-white -mt-2 z-[1]' onMouseEnter={headingEnter} onClick={menuout} >
               <div className='w-[66%] we px-2'><h1 className='matter-regular'>we make it happen.</h1></div>
               <div className='flex md:items-center md:space-x-7 px-3 min-h-28 flex-col md:flex-row my-5 z-20 relative' >
                    <span className='he py-1 px-3 '><h1 className='text-[13vw] md:text-[5vw] matter-regular hover:scale-105 ml-1 leading-tight'>DESIGN</h1></span>
                    <span className='he py-1 px-3 '><h1 className='text-[13vw] md:text-[5vw] matter-regular hover:scale-105 ml-1 leading-tight'>DEVELOP</h1></span>
                    <span className='he py-1 px-3 '><h1 className='text-[13vw] md:text-[5vw] matter-regular hover:scale-105 ml-1 leading-tight'>DEPLOY</h1></span>
               </div>

          </div>
     )
}

export default Headings
