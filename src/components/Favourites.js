import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';

import FavItem from '../components/FavItem';

import { FavContext } from '../contexts/FavContext';
import { SidebarContext } from '../contexts/SidebarContext';

const Favourites = () => {
	const { favIsOpen, handleFavClose, favList, clearList, favAmount } =
		useContext(FavContext);

	const { isOpen, setIsOpen } = useContext(SidebarContext);

	return (
		<div
			className={`${
				favIsOpen ? 'right-0' : '-right-full'
			} w-full bg-white fixed top-0 h-full
	shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 
	px-4 lg:px-[35px]`}>
			<div className='flex items-center justify-between py-6 border-b'>
				<div className='uppercase text-sm font-semibold'>
					Favourites ({favAmount})
				</div>
				{/* {Icon} */}
				<div
					onClick={handleFavClose}
					className='cursor-pointer w-8 h-8 flex justify-center 
				items-center'>
					<IoMdArrowForward className='text-2xl' />
				</div>
			</div>
			<div
				className='flex flex-col gap-y-2 h-[280px] lg:h-[410px] 
			overflow-y-auto overflow-x-hidden border-b'>
				{favList.map((item) => {
					return (
						<FavItem
							item={item}
							key={item.id}
						/>
					);
				})}
			</div>
			<div className='flex flex-col gap-y-3 py-4 mt-4'>
				<button
					onClick={() => clearList()}
					to='/'
					className='bg-gray-200 flex p-4 justify-center
				items-center text-primary w-full font-medium'>
					Clear List
				</button>
				<Link
					to={'/'}
					onClick={() => {
						handleFavClose();
						setIsOpen(!isOpen);
					}}
					className='bg-primary flex p-4 justify-center
				items-center text-white w-full font-medium'>
					Go To Cart
				</Link>
			</div>
		</div>
	);
};

export default Favourites;
