import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IpDetails from '../IpDetails/IpDetails';

const IpModal = (props) => {
	const [ipDetails, setIpDetails] = useState(null);
	const [loadingMessage, setLoadingMessage] = useState('Data is being fetched...');

	useEffect(() => {
		axios
			.get(
				`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_API}&domain=${props.searchedIp}`
			) //using domain as it will get both ipAddress and domain
			.then((response) => {
				setLoadingMessage('');
				setIpDetails(response.data);
				props.setIp(response.data);
			})
			.catch((error) => {
				if (error.response !== undefined && error.response.data.code === 422) {
					setLoadingMessage(error.response.data.messages);
				} else if (error.response !== undefined && error.response.data.code === 400) {
					setLoadingMessage('Enter a valid IP address or Domain');
				} else {
					return null;
				}
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.searchedIp]);

	return (
		<>
			{ipDetails && !loadingMessage ? (
				<IpDetails ipDetails={ipDetails} />
			) : (
				<IpDetails loadingMessage={loadingMessage} />
			)}
		</>
	);
};

export default IpModal;
