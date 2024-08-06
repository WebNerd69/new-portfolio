import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Cursor() {
     const [cursor,setCursor] = useState({
          x:0,
          y:0
     })
     useEffect(() => {
          const mouseMove = (e) => {
               // cur(e.clientX,e.clientY)
               setCursor({
                    x:e.clientX,
                    y:e.clientY
               })
          }
          window.addEventListener('mousemove', mouseMove)
     }
     )
     // const cur =(xa,ya) =>{
          
     //      useGSAP(
     //           gsap.to(".cursorXY", {
     //                x: xa,
     //                y: ya,
     //                duration:.5,
     //                ease:'back.out'
     //           })
     //      )
     // }
     useGSAP(
          gsap.to(".cursorXY",{
               x:cursor.x,
               y:cursor.y,

          })
     )
     return (
          <div className='w-4 h-4 bg-[#111111] fixed rounded-full cursorXY z-10' id='cursor'></div>
          // <div className='main w-screen min-h-screen bg-transparent fixed z-50'>
          // </div>
     )
}

export default Cursor
