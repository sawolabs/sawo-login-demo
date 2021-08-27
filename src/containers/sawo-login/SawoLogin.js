import React, { useEffect, useState } from 'react';
import Sawo from 'sawo';
import './SawoLogin.css';
import '../../styles/typography/typography.css';
require('dotenv').config();

const SawoLogin = (props) => {
	// eslint-disable-next-line no-unused-vars
	const [payload, setPayload] = useState(false);

	useEffect(() => {
		var config = {
			// should be same as the id of the container created on 3rd step
			containerID: 'sawo-container',
			// can be one of 'email' or 'phone_number_sms'
			identifierType: 'phone_number_sms',
			// Add the API key copied from 2nd step
			apiKey: process.env.REACT_APP_SAWO_API,
			// Add a callback here to handle the payload sent by sdk
			onSuccess: (payload) => {
				setPayload(payload);
				localStorage.setItem('user_id', payload.user_id);
				props.setLoginStatus(true);
			},
		};
		let sawo = new Sawo(config);
		sawo.showForm();
	});

	return (
		<div className='login-screen'>
			<div className='login-sawo-container'>
				<h1 className='rubik-700-drk-gray login-title'>LOGIN </h1>
				<div
					id='sawo-container'
					style={{ height: '300px', width: '315px', borderRadius: '50px' }}
				></div>
			</div>
		</div>
	);
};

export default SawoLogin;
