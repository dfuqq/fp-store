import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';

import { FavContext } from '../contexts/FavContext';
import { CartContext } from '../contexts/CartContext';

const FavItem = ({ item }) => {
	const { removeFromList } = useContext(FavContext);
	const { addToCart } = useContext(CartContext);
	// Destructure Item
	const { id, title, image, price } = item;

	return (
		<div
			className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200
        w-full font-light text-gray-500'>
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
						<div
							onClick={() => removeFromList(id)}
							className='text-xl cursor-pointer'>
							<IoMdClose
								className='text-gray-500 hover:text-red-500 
                        transition'
							/>
						</div>
					</div>
					<div
						className='flex gap-x-2 h-[36px]
                    text-sm'>
						{/* {Item Price} */}
						<div className='flex-2 flex items-center justify-around'>
							${price} <br />
							per item
						</div>
						<button
							onClick={() => addToCart(item, item.id)}
							className='bg-primary py-4 px-8 text-white
							flex justify-center items-center'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FavItem;
