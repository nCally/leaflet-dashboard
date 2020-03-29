import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";

function App() {

    const [position, changePosition] = useState({
        lat:6.458726,
        lng:7.527588
    })

    useEffect(function(){
        /* const interval = setInterval(function(){
            console.log('change')
            changePosition({...position, lng:position.lng - 0.00009})
        }, 1000)

        return () => clearInterval(interval) */
    })

    return (
        <div>
            <LeafletMap center={[6.458726,7.527588]} zoom={15} attributionControl={true}>
                <TileLayer id="mapbox/streets-v11"
                url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmNhbGx5IiwiYSI6ImNrN3Vud3N5bzE1cWwzbXFyc3lpaHlldWoifQ.-HWevPOSU8PIR6HSP4R8Lw`} />
                <Marker position={[position.lat,position.lng]} />
            </LeafletMap>
        </div>
    );
}

export default App;
