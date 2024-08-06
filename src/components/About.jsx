import React from 'react'
// import './Css.css'

function About() {
	return (
		<div className='w-screen h-[80vh]  flex relative justify-evenly my-10'>
			<div className="left w-[40%] h-[100%] flex items-center justify-center">
				{/* <img src="./public/sombra.webp" alt="" className='h-80' /> */}
				IMAGE TO BE SET
			</div>
			<div className="right w-[40%] h-[100%] relative flex justify-evenly items-center flex-col">
				<p className='w-[80%] matter-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit labore consequatur distinctio similique, dolore iste? Error, voluptas. Unde ipsum provident eos ut, magni blanditiis consequuntur numquam perferendis possimus sequi, dolorum maiores molestias sed iure praesentium sunt. Perspiciatis officiis deserunt sed animi voluptatum nulla facilis reiciendis qui. Optio corporis facilis officia, quaerat tenetur id consequatur repudiandae mollitia nostrum inventore adipisci!</p>
				<button className='w-64 border h-36 rounded-[100px] matter-regular text-2xl relative overflow-hidden flex items-center justify-center baraButton'>
					{/* <div className='w-64 h-36 bg-[#111] absolute mt-72 z-0'></div> */}
					{/* <span className='flex flex-col h-10 relative overflow-y-hidden z-10'>
						<span className='h-10 '>Know more</span>
						<span className='h-10 mt-20 absolute'>Know more</span>
					</span> */}
					<span className='z-10'>Know more</span>
				</button>
			</div>
		</div>
	)
}

export default About
