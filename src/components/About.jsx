import React from 'react'
// import './Css.css'

function About() {
	return (
		<div className='w-screen md:h-[60vh] flex relative md:justify-evenly bg-white -my-3 flex-col md:flex-row z-[1] items-center' >
			<div className="left w-[20%] my-5 md:block hidden">
				<p className='matter-light leading-snug my-32'>
					about <br />
					me & my <br />
					skills.
				</p>
			</div>
			<div className="right md:w-[70%] my-5 px-5">
				<p className='md:text-[4em] matter-regular mb-5 text-[3em] text-center md:text-left'>About me.</p>
				<p className='matter-light md:text-[1em] text-[.7em]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at
					iste sequi molestiae. Aliquam inventore, eum, repellat et illo eaque
					laborum ad eveniet ipsam necessitatibus alias deleniti officia beatae
					nesciunt tempora officiis sed blanditiis hic. Dignissimos id repudiandae
					expedita, quidem eaque quos nostrum ipsam labore corrupti sint, dolore
					odio beatae! <br /> <br />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, magni. Temporibus ratione tempora nemo facere error eius corrupti quibusdam sit sed corporis sint quos voluptas numquam alias, et necessitatibus laborum repellat provident sapiente explicabo. Tenetur saepe distinctio nobis quisquam non ipsum. At eum neque dolorem tenetur nihil, modi aut iure omnis, dignissimos ratione sapiente veritatis cum. Commodi id ab in quod architecto fuga delectus, at dignissimos corrupti molestiae aperiam mollitia. <br /><br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere delectus qui saepe incidunt maiores sunt, sit eveniet dignissimos velit distinctio labore, similique, ab ad doloribus sed nesciunt officiis. Iure.
				</p>
			</div>
		</div>
	)
}

export default About
