import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../Animation.css'
function Contact() {
     
     return (
          <div className={`contact h-screen w-screen bg-[#ffffff00] fixed bottom-0 -z-[0] flex bg-white`} >
               {/* <div className="circles absolute z-0 h-screen w-screen bg-[#006bd60a] ">
                    <div className="circle1 h-[300px] w-[300px] rounded-full blur-[70px] bg-[#00D67D] absolute top-[15%] left-[40%] opacity-70 z-0" ></div>
                    <div className="circle2 h-[500px] w-[500px] rounded-full blur-[170px] bg-[#00D67D] absolute top-[40%] left-[15%] opacity-70
                    -skew-x-6 rotate-[4deg] z-0" ></div>
                    <div className="circle3 h-[200px] w-[200px] rounded-full blur-[170px] bg-[#00D67D] absolute top-[25%] right-[30%]  z-0" ></div>
                    <div className="circle4 h-[300px] w-[300px] rounded-full blur-[100px] bg-[#00D67D] absolute top-[40%] right-[7%] opacity-70 -skew-x-6 -rotate-[67deg] z-0" ></div>
               </div> */}
               <div className="contact1 flex w-screen items-center z-10 justify-center">
                    <p className='text-[10vw] text-[#111111] roboto-flex glow p-10'>Contact me</p>
               </div>
               
          </div>
     )
}

export default Contact
