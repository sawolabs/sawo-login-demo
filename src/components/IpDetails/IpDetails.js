import React from 'react';
import '../../styles/typography/typography.css';
import './IpDetails.css';

const IpDetails = (props) => {
	return (
		<>
			{props.ipDetails ? (
				<div className='ip-details-main-div'>
					<div className='ip-details-div right-bar'>
						<p className='rubik-700-lgh-gray ip-details-title'>IP ADDRESS</p>
						<div className='rubik-700-drk-gray ip-details-value'>{props.ipDetails?.ip}</div>
					</div>
					<div className='ip-details-div right-bar'>
						<p className='rubik-700-lgh-gray ip-details-title'>LOCATION</p>
						<div className='rubik-700-drk-gray ip-details-value'>
							{props.ipDetails?.location?.city
								? `${props.ipDetails?.location?.city}, ${props.ipDetails?.location?.region} ${props.ipDetails?.location?.postalCode}`
								: `Private Location`}
						</div>
					</div>
					<div className='ip-details-div right-bar'>
						<p className='rubik-700-lgh-gray ip-details-title'>TIMEZONE</p>
						<div className='rubik-700-drk-gray ip-details-value'>
							{props.ipDetails?.location?.timezone
								? `UTC ${props.ipDetails?.location?.timezone}`
								: `Undisclosed`}
						</div>
					</div>
					<div className='ip-details-div'>
						<p className='rubik-700-lgh-gray ip-details-title'>ISP</p>
						<div className='rubik-700-drk-gray ip-details-value'>{props.ipDetails.isp}</div>
					</div>
				</div>
			) : (
				<div className='ip-details-main-div-loading'>
					<div className='loading-message'> {props.loadingMessage}</div>
				</div>
			)}
		</>
	);
};

export default IpDetails;
