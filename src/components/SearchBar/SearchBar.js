import React, { useState } from 'react';
import './SearchBar.css';
import arrowIcon from '../../assets/icons/icon-arrow.svg';

const SearchBar = (props) => {
	const [ip, setIp] = useState('');
	const sumbitHandler = (e) => {
		e.preventDefault();
		props.setSearchedIp(ip);
	};

	return (
		<form onSubmit={sumbitHandler}>
			<input
				className='search rubik-400-drk-gray'
				placeholder='Search for any IP address or domain'
				value={ip}
				onChange={(e) => setIp(e.target.value)}
			/>
			<button className='search-button' type='submit'>
				<img className='search-icon' src={arrowIcon} alt='icon' />
			</button>
		</form>
	);
};

export default SearchBar;
