import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	// Item Amount State
	const [itemAmount, setItemAmount] = useState(0);
	// Total Price State
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const total = cart.reduce((acc, currentItem) => {
			return acc + currentItem.price * currentItem.amount;
		}, 0);
		setTotal(total);
	}, [cart]);

	// Update Item Amount
	useEffect(() => {
		if (cart) {
			const amount = cart.reduce((acc, currentItem) => {
				return acc + currentItem.amount;
			}, 0);
			setItemAmount(amount);
		}
	}, [cart]);

	const addToCart = (product, id) => {
		const newItem = { ...product, amount: 1 };

		// Check if Item already in Cart
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		// If Item already in Cart
		if (cartItem) {
			const newCart = [...cart].map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		} else {
			setCart([...cart, newItem]);
		}
	};

	// Remove items from cart
	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => {
			return item.id !== id;
		});
		setCart(newCart);
	};

	// Clear Cart
	const clearCart = () => {
		setCart([]);
	};

	// Increase Amount of items
	const increaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);
		addToCart(cartItem, id);
	};

	// Decrease Amount of items
	const decreaseAmount = (id) => {
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount - 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		}
		if (cartItem.amount < 2) {
			removeFromCart(id);
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				increaseAmount,
				decreaseAmount,
				itemAmount,
				total,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
