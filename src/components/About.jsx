import React from 'react'
// import './Css.css'

function About() {
	return (
		<div className='w-screen md:h-[90vh] h-[125vh] flex relative md:justify-evenly bg-white -my-3 flex-col md:flex-row'>
			<div className="left md:w-[40%] md:h-[80%] h-[32%] flex relative justify-center ">
				<p className='md:text-[5vw] text-[12vw] matter-regular md:mt-10 mt-20 chal'>About Me</p>
				<img src="./public/sombra.webp" alt="" className='absolute md:h-96 mt-32 uparNich h-44'/>
				
			</div>
			<div className="right md:w-[40%] md:h-[80%] relative flex justify-evenly items-center flex-col">
				<p className='w-[80%] matter-light text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit labore consequatur distinctio similique, dolore iste? Error, voluptas. Unde ipsum provident eos ut, magni blanditiis consequuntur numquam perferendis possimus sequi, dolorum maiores molestias sed iure praesentium sunt. Perspiciatis officiis deserunt sed animi voluptatum nulla facilis reiciendis qui. Optio corporis facilis officia, quaerat tenetur id consequatur repudiandae mollitia nostrum inventore adipisci!</p>
				<button className='md:w-64 border md:h-36 rounded-[100px] matter-regular text-2xl relative overflow-hidden flex items-center justify-center baraButton h-16 w-44'>
					<span className='z-10'>Know more</span>
				</button>
			</div>
		</div>
	)
}

export default About
