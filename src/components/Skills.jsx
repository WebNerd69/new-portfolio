import React from 'react'

function Skills() {
	return (
		<div className='w-screen min-h-screen bg-white relative z-[1]'>
			<div className="Skills  w-screen my-10 flex justify-center flex-col gap-0 md:mx-28 mx-5">
				<p className='matter-regular md:text-[5.5em] text-[3em] leading-tight'>Featured</p>
				<span className='flex items-center md:gap-7 gap-3'>
					<span className='md:w-48 md:h-32 w-20 h-12 bg-zinc-800 inline-block rounded-[7em]'></span>
					<p className='matter-light md:text-[8em] text-[2.5em] leading-tight italic'>Skills</p>
				</span>
			</div>
			<div className="main w-screen min-h-screen flex md:justify-evenly relative md:flex-row flex-col">
				<div className="right md:w-[45%] bg-blue-50 "></div>
				<div className="left md:w-[45%] bg-blue-50 "></div>
			</div>
		</div>
	)
}

export default Skills

