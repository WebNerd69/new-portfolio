import React, { Children, useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
     const [menu,setMenu] = useState(-600)
     const [hover,setHover] = useState(0)

     const menuClick = () =>{
          if (menu === -600){
               setMenu(0)  
          }
          else{
               setMenu(-600)
          }
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
               right:menu,
               duration:.3,
               opacity:1,
               ease:'expoScale(0.5,7,none)',
               yoyo:true

          })
          
     )
     // useEffect(()=>{
     //      let sombra = document.querySelector("nav .navLeft #logo")
     //      let sombraText = sombra.textContent
     //      let spanText = sombraText.split("")
     //      sombra.innerHTML = ''
     //      spanText.forEach((e)=>{sombra.innerHTML += `<span id="yo">${e}</span>`})

     //      console.log(document.querySelectorAll("nav .navLeft #logo").Children)

     // },[]
          
     // )
          

     return (
          <>
               <nav className='flex justify-between py-4 pl-10 pr-0 relative z-10'>
                    <div className="navLeft flex justify-center items-center space-x-2">
                         <img src="./public/logo.png" alt="" className='w-7 h-7 z-20 navLogo' />
                         <span className='matter-regular text-2xl cursor-pointer z-20 navLogo' id='logo'>sombra</span>
                    </div>
                    <div className="right relative">
                         <div className="overlay absolute z-40 w-[100%] h-[100%]" onClick={menuClick} onMouseEnter={()=>{setHover(1)}} onMouseLeave={()=>{setHover(0)}}></div>
                         <ul className='flex items-center cursor-pointer  space-x-5 w-32 h-16 justify-evenly relative ' id='menu'>
                              <li className='roboto text-lg left-2 absolute '>menu</li>
                              <li className=' text-xl font-black z-30 ' ><button className={hover?"scale-110 z-30 w-9 h-9 bg-black rounded-full transition-all duration-300":"scale-100"} ><i className={hover?"ri-menu-line text-white transition-all duration-300":"ri-menu-line"} ></i></button></li>
                         </ul>
                    </div>
               </nav>

               <div className="menu h-screen md:w-[600px] rounded-l-3xl absolute bg-[#ffffff84] backdrop-blur-md top-0 -right-[600px] px-10 w-screen md:px-20 z-[30]">
                    <div className=' absolute right-5  top-5 z-50 crossBtn' onClick={menuClick}><i className="ri-close-large-fill hover:text-white hover:bg-[#111]  rounded-full flex justify-center items-center w-14 h-14 text-xl"></i></div>
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
                                   <li className='proj'>Projects</li>
                                   <li className='skills'>Skills</li>
                                   <li className='exp'>Experiences</li>
                              </ul>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Navbar
