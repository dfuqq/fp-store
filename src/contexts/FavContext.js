import React, { useState, createContext } from 'react';

export const FavContext = createContext();

const FavProvider = ({ children }) => {
	const [favIsOpen, setFavIsOpen] = useState(false);

	const handleFavClose = () => {
		setFavIsOpen(false);
	};

	return (
		<FavContext.Provider
			value={{ favIsOpen, setFavIsOpen, handleFavClose }}>
			{children}
		</FavContext.Provider>
	);
};

export default FavProvider;
