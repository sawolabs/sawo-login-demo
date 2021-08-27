import React, { useState } from 'react';
import IpModal from '../../components/IpModal/IpModal';
import SearchBar from '../../components/SearchBar/SearchBar';
import Map from '../../components/Map/Map';
import '../../styles/typography/typography.css';
import './Dashboard.css';

function Dashboard(props) {
	const [searchedIp, setSearchedIp] = useState('');
	const [ip, setIp] = useState(null);

	return (
		<div>
			<div className='heading-search'>
				<div className='main-section'>
					<h1 className='heading rubik-700-white'>IP Address Tracker</h1>
					<SearchBar setSearchedIp={setSearchedIp} />
					<IpModal searchedIp={searchedIp} ip={ip} setIp={setIp} userId={props.userId} />
				</div>
			</div>
			{ip && <Map ip={ip}></Map>}
		</div>
	);
}

export default Dashboard;
