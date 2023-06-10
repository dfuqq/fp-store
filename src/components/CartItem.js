import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';

const CartItem = ({ item }) => {
	// Destructure Item
	const { id, title, image, price, amount } = item;

	return (
		<div className='flex'>
			<div
				className='w-full min-h-[150px] flex items-center 
            gap-x-4'>
				{/* {Image} */}
				<Link to={`/product/${id}`}>
					<img
						className='max-w-[80px]'
						src={image}
						alt={title}
					/>
				</Link>
				<div className='w-full flex flex-col'>
					{/* {Title and Remove Icon} */}
					<div className='flex justify-between mb-2'>
						{/* {Title} */}
						<Link
							to={`/product/${id}`}
							className='text-sm uppercase 
                    font-medium max-w-[240px] text-primary hover:underline'>
							{title}
						</Link>

						{/* {Remove Icon} */}
						<div className='text-xl cursor-pointer'>
							<IoMdClose
								className='text-gray-500 hover:text-red-500 
                        transition'
							/>
						</div>
					</div>
					<div
						className='flex gap-x-2 h-[36px]
                    text-sm'>
						{/* {Quantity} */}
						<div
							className='flex flex-1 max-w-[100px]
                        items-center h-full border text-primary font-medium'>
							{/* {Minus Icon} */}
							<div
								className='flex-1 flex justify-center items-center
                            cursor-pointer'>
								<IoMdRemove />
							</div>
							{/* {Amount} */}
							<div
								className='h-full flex justify-center items-center
                            px-2'>
								{amount}
							</div>
							{/* {Plus Icon} */}
							<div
								className='flex-1 h-full flex justify-center 
                            items-center cursor-pointer'>
								<IoMdAdd />
							</div>
						</div>
						{/* {Item Price} */}
						<div>item price</div>
						{/* {Final Price} */}
						<div>Final Price</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
