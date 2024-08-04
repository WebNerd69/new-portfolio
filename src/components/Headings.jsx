import React from 'react'

function Headings() {
     return (
          <div className='w-screen px-10 h-96  flex flex-col justify-center items-center'>
               <div className='w-[66%]'><h1 className='matter-regular'>we make it happen.</h1></div>
               <div className='flex items-center gap-10 w-[66%]' >
                    <h1 className='text-[5vw] matter-regular hover:scale-105 transition-all duration-300'>DESIGN</h1>
                    <h1 className='text-[5vw] matter-regular hover:scale-105 transition-all duration-300'>DEVELOP</h1>
                    <h1 className='text-[5vw] matter-regular hover:scale-105 transition-all duration-300'>DEPLOY</h1>
               </div>

          </div>
     )
}

export default Headings
