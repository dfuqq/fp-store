import React, { useState, createContext } from 'react';

export const FavContext = createContext();

const FavProvider = ({ children }) => {
	const [favIsOpen, setFavIsOpen] = useState(false);
	const [favList, setFavList] = useState([]);

	const handleFavClose = () => {
		setFavIsOpen(false);
	};

	const addToFav = (product, id) => {
		const newItem = { ...product };

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
			}}>
			{children}
		</FavContext.Provider>
	);
};

export default FavProvider;
