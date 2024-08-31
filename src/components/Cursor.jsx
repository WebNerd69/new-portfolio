import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSelector } from 'react-redux';
function Cursor() {
     const [cursor,setCursor] = useState({
          x:0,
          y:0
     })
     const curStyle = useSelector(state => state.cursor)
     
     useEffect(() => {
          const mouseMove = (e) => {
               setCursor({
                    x:e.clientX,
                    y:e.clientY
               })
          }
          window.addEventListener('mousemove', mouseMove)
     }
     )
     useGSAP(
          gsap.to(".cursorXY",{
               x:cursor.x,
               y:cursor.y,
               scale: curStyle.scale
          })
     )
     return (
          <div className={`w-3 h-3 ${curStyle.color} fixed rounded-full cursorXY ${curStyle.z}`} id='cursor'></div>
     )
}

export default Cursor
