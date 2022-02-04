import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export default function Map(props) {
    const customStyle = {
        height: '100%',
        width: '100%',
        minHeight: props.height || '500px',
        minWidth: props.width || '300px'
    }

    return (
        <div>
            <MapContainer center={[48.864716, 2.349014]} zoom={13} scrollWheelZoom={false} style={customStyle}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    )

}
