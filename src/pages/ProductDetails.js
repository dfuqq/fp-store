import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { FavContext } from '../contexts/FavContext';

const ProductDetails = () => {
	// Get product ID from URL
	const { id } = useParams();
	const { products } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);
	const { addToFav } = useContext(FavContext);

	// Get single product based on ID
	const product = products.find((item) => {
		return item.id === parseInt(id);
	});

	if (!product) {
		return (
			<section className='h-screen flex justify-center items-center'>
				Loading...
			</section>
		);
	}

	// Destructure product
	const { title, price, description, image } = product;
	return (
		<section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
			<div className='container mx-auto'>
				{/* {Image and Text Wrapper} */}
				<div className='flex flex-col lg:flex-row items-center'>
					{/* {Image} */}
					<div
						className='flex flex-1 justify-center items-center
					mb-8 lg:mb-0'>
						<img
							className='max-w-[150px] lg:max-w-xs'
							src={image}
							alt={title}
						/>
					</div>
					{/* {Text} */}
					<div className='flex-1 text-center lg:text-left'>
						<h1
							className='text-[26px] font-medium mb-2
						max-2-[450px] mx-auto lg:mx-0'>
							{title}
						</h1>
						<div
							className='text-xl text-red-500 font-medium
						mb-6'>
							${price}
						</div>
						<p className='mb-8'>{description}</p>
						<div className='flex space-x-4'>
							<button
								onClick={() => addToCart(product, product.id)}
								className='bg-primary py-4 px-8 text-white'>
								Add to Cart
							</button>
							<button
								onClick={() => addToFav(product, product.id)}
								className='bg-white py-4 px-8 text-primary
								border border-primary'>
								To Favorites
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
