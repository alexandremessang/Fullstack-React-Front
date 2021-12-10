import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Homepage(props) {
    const customStyle = {
        height: '100%',
        width: '100%',
        minHeight: '500px',
        minWidth: '300px'
    }

    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={customStyle}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )

}
