import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<section
			className={`h-[800px] bg-hero
    bg-no-repeat bg-cover bg-center py-24`}>
			<div className='container mx-auto flex justify-around h-full'>
				{/* {text} */}
				<div className='flex flex-col justify-center text-white'>
					<div className='font-semibold flex items-center uppercase'>
						<div className='w-10 h-[2px] bg-red-500 mr-3'></div>
						<div>Project</div>
					</div>
					<h1
						className='text-[70px] leading-[1.1] font-light
                mb-4'>
						WA D_FUQ IS THIS SHOPPPP????
						<br />
						<span className='font-semibold'>BARAHOLKA!!!</span>
					</h1>
					<Link
						to={'/'}
						className='self-start uppercase font-semibold
                    border-b-2 border-red-500'>
						Discover
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
