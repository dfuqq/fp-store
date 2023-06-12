import React, { useState, useEffect, createContext } from 'react';

export const FavContext = createContext();

const FavProvider = ({ children }) => {
	const [favIsOpen, setFavIsOpen] = useState(false);
	const [favList, setFavList] = useState([]);
	// Item Amount State
	const [favAmount, setFavAmount] = useState(0);

	useEffect(() => {
		if (favList) {
			const amount = favList.reduce((acc, currentItem) => {
				return acc + currentItem.amount;
			}, 0);
			setFavAmount(amount);
		}
	}, [favList]);

	const handleFavClose = () => {
		setFavIsOpen(false);
	};

	const addToFav = (product, id) => {
		const newItem = { ...product, amount: 1 };

		// Check if Item already in List
		const favItem = favList.find((item) => {
			return item.id === id;
		});
		// If Item already in List
		if (favItem) {
			return;
		} else {
			setFavList([...favList, newItem]);
		}
	};

	// Remove items from list
	const removeFromList = (id) => {
		const newList = favList.filter((item) => {
			return item.id !== id;
		});
		setFavList(newList);
	};

	// Clear List
	const clearList = () => {
		setFavList([]);
	};

	return (
		<FavContext.Provider
			value={{
				favIsOpen,
				setFavIsOpen,
				handleFavClose,
				addToFav,
				removeFromList,
				clearList,
				favList,
				setFavList,
				favAmount,
			}}>
			{children}
		</FavContext.Provider>
	);
};

export default FavProvider;
