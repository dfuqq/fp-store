import React, { useContext, useState } from 'react';

import Product from '../components/Product';
import Hero from '../components/Hero';

import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
	// Get Products from ProductContext
	const { products } = useContext(ProductContext);
	const [sortBy, setSortBy] = useState('');
	const [filterByCategory, setFilterByCategory] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	// Create products based on sort option
	const sortedProducts = () => {
		if (sortBy === 'price') {
			return products.slice().sort((a, b) => a.price - b.price);
		} else if (sortBy === 'priceD') {
			return products.slice().sort((a, b) => b.price - a.price);
		} else if (sortBy === 'alphabet') {
			return products
				.slice()
				.sort((a, b) => a.title.localeCompare(b.title));
		} else if (sortBy === 'alphabetD') {
			return products
				.slice()
				.sort((a, b) => b.title.localeCompare(a.title));
		} else {
			return products;
		}
	};

	const filteredProducts = () => {
		if (filterByCategory === '') {
			return sortedProducts();
		} else {
			return sortedProducts().filter(
				(product) => product.category === filterByCategory
			);
		}
	};

	const searchProducts = () => {
		const query = searchQuery.trim().toLowerCase();
		return filteredProducts().filter((product) => {
			return (
				product.title.toLowerCase().includes(query) ||
				product.description.toLowerCase().includes(query)
			);
		});
	};

	const categories = [
		...new Set(products.map((product) => product.category)),
	];

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div>
			<Hero />
			<section className='py-16'>
				<div className='container mx-auto'>
					<div
						className='grid grid-cols-1 md:gridcols-2 lg:grid-cols-4 
						xl:grid-cols-5 gap-[30px] max-w-sm mx-auto 
						md:max-w-none md:mx-0'>
						{/* {Sorting} */}
						<div className='mb-4'>
							<label htmlFor='sort'>Sort by:</label>
							<select
								id='sort'
								className='p-2'
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}>
								<option value=''>None</option>
								<option value='price'>Price</option>
								<option value='priceD'>Price (Desc)</option>
								<option value='alphabet'>Alphabet</option>
								<option value='alphabetD'>
									Alphabet (Desc)
								</option>
							</select>
						</div>
						{/* {Filtering} */}
						<div className='mb-4'>
							<label htmlFor='category'>
								Filter by Category:
							</label>
							<select
								id='category'
								className='p-2'
								value={filterByCategory}
								onChange={(e) =>
									setFilterByCategory(e.target.value)
								}>
								<option value=''>All</option>
								{categories.map((category) => (
									<option
										value={category}
										key={category}>
										{category}
									</option>
								))}
							</select>
						</div>
						{/* {Searching} */}
						<div className='mb-4'>
							<label htmlFor='search'>Search:</label>
							<input
								type='text'
								id='search'
								className='p-2'
								value={searchQuery}
								onChange={handleSearch}
							/>
						</div>
						{searchProducts().map((product) => (
							<Product
								product={product}
								key={product.id}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
