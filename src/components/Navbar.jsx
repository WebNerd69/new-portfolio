import React, { Children, useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useDispatch , useSelector} from 'react-redux';
import { bgHover , textHover , menuHover } from '../store/CursorSlice';
import { outClick } from '../store/NavSlice';
function Navbar() {
     const [menu,setMenu] = useState(-600)
     const dispatch = useDispatch()
     const menuOpen = useSelector(state => menu)
     const [bghover,setBghover] = useState({
          color:'bg-[#111]',
          scale:1,
          z:'z-20'
     })
     console.log(menuOpen)
     const [menuhover,setmenuhover] = useState({
          color:'bg-[#111]',
          scale:1,
          z:'z-40'
     })
     const [texthover,setTexthover] = useState({
          color:'bg-[#111]',
          scale:4.5,
          z:'z-20'
     })
     useEffect(()=>{
          let sombra = document.querySelector("nav .navLeft #logo")
          let sombraTextList = sombra.textContent.split("")
          sombra.innerHTML = ''
          sombraTextList.forEach((e)=>{
               sombra.innerHTML += `<span>${e}</span>`
          })
     })

     const menuClick = () =>{
          menuout()
     }

     const navEnter = ()=>{
          dispatch(bgHover(bghover))
     }
     const textEnter = () =>{
          dispatch(textHover(texthover))
     }
     const defaultStyle = ()=>{
          navEnter()
     }
     // const menuenter = ()=>{
     //      dispatch(menuHover(menuhover))
     // }
     const menuout = () =>{
          if (menu === -600){
               setMenu(0)  
          }
          else{
               setMenu(-600)
          }
          dispatch(outClick(menu))
     }
     useGSAP(() => {
          var tl = gsap.timeline()
          tl.from('.navLogo', {
               delay: .2,
               y: -15,
               opacity: 0,
               duration: .3,
               stagger:.15
          })
          tl.from('#menu', {
               y: -15,
               opacity: 0,
               duration: .3,
               
          })
          
     })
     useGSAP(
          gsap.to(".menu",{
               right:menuOpen,
               duration:.5,
               opacity:1,
               ease:'expoScale(0.5,7,none)',
               yoyo:true

          })
          
     )
     return (
          <>
               <nav className='flex justify-between py-4 pl-10 pr-0 relative bg-white' onMouseEnter={navEnter}>
                    <div className="navLeft flex justify-center items-center space-x-2 z-20 p-4" onMouseEnter={textEnter} onMouseLeave={defaultStyle}>
                         <img src="./public/logo.png" alt="" className='w-7 h-7 z-40 navLogo' />
                         <span className='matter-regular text-2xl z-40 navLogo' id='logo' >sombra</span>
                    </div>
                    <div className="right relative z-30">
                         <ul className='flex items-center space-x-5 w-32 h-16 justify-evenly relative z-30' id='menu'>
                              <li className='roboto text-lg left-0 absolute z-30 hover:text-white transition-all duration-200' onMouseEnter={textEnter} onMouseLeave={defaultStyle}id='menuT'>menu</li>
                              <li className=' text-xl font-black z-30 ' onClick={menuClick}>
                                   <button className='w-12 h-12 rounded-[100px] matter-regular text-2xl relative overflow-hidden flex items-center justify-center baraButton cursor-none'>
					               <span className='z-10 relative'><i className="ri-menu-line" ></i></span>
				               </button>
                              </li>
                         </ul>
                    </div>
               </nav>
               
               <div className="menu h-screen md:w-[600px] rounded-l-3xl absolute bg-[#ffffff84] backdrop-blur-md top-0 -right-[600px] px-10 w-screen md:px-20 z-30 cursor-pointer" >
                    <div className='absolute right-5  top-5 crossBtn z-50' onClick={menuClick} >
                         <button className='w-12 h-12 rounded-[100px] matter-regular text-2xl relative overflow-hidden flex items-center justify-center baraButton z-50'>
					     <span className='z-50 relative'><i className="ri-close-large-fill z-50" ></i></span>
				     </button>
                    </div>
                    <div className='flex md:justify-between flex-col md:flex-row px-10'>

                         <div className='left md:my-36 mt-10'>
                              <p className='text-black opacity-70 mt-10 md:mt-0'>social media</p>
                              <ul className='md:mt-16 mt-5 flex flex-col space-y-5 md:space-y-10 text-lg matter-light' >
                                   <li>Linkedin</li>
                                   <li>Instagram</li>
                                   <li>GitHub</li>
                                   <li>Whatsapp</li>
                                   <li>Facebook</li>
                              </ul>
                         </div>
                         <div className='right md:my-36 mt-10'>
                              <p className='text-black opacity-70'>menu</p>
                              <ul className='md:mt-16 mt-5 flex flex-col space-y-6 text-2xl matter-regular'>
                                   <li className='about'>About</li>
                                   <li className='skills'>Skills</li>
                                   <li className='proj'>Projects</li>
                                   {/* <li className='exp'>Experiences</li> */}
                              </ul>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Navbar
