import React, { useState, useEffect } from 'react';
import './Map.css';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import marker from '../../assets/icons/icon-location.svg';

const Map = (props) => {
	const [position, setPosition] = useState([props.ip.location.lat, props.ip.location.lng]);
	let customMarker = Leaflet.icon({
		iconUrl: marker,
		iconSize: [25, 30], // size of the icon
		shadowSize: [50, 64], // size of the shadow
		iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62], // the same for the shadow
		popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
	});

	const FlyTo = () => {
		const map = useMap();
		map.flyTo(new Leaflet.LatLng(position[0], [position[1]]), 13);
		return null;
	};

	useEffect(() => {
		setPosition([props.ip.location.lat, props.ip.location.lng]);
	}, [props.ip]);

	return (
		<div className='map'>
			<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<FlyTo />
				{props.ip && (
					<Marker position={position} icon={customMarker}>
						<Popup>
							{props.ip.location.city} <br /> Easily customizable.
						</Popup>
					</Marker>
				)}
			</MapContainer>
		</div>
	);
};

export default Map;
