import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import socketIO from "socket.io-client";
import wifiIcon from './wifiIcon';
import './App.css';
import locations from './locations';


const socket = socketIO("http://localhost:3500")


function App() {

    const [position, changePosition] = useState({
        lat: 6.458726,
        lng: 7.527588
    })

    useEffect(function () {
        // const interval = setInterval(function () {
        //     console.log('change')
        //     changePosition({ ...position, lng: position.lng - 0.00009 })
        // }, 1000)

        // // return () => clearInterval(interval)

        // socket.on("display", function (data: any) {
        //     //
        // })
    })

    return (
        <div>
            <LeafletMap className="map" center={[6.458726, 7.527588]} zoom={15} attributionControl={true}>
                <TileLayer id="mapbox/streets-v11" url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmNhbGx5IiwiYSI6ImNrN3Vud3N5bzE1cWwzbXFyc3lpaHlldWoifQ.-HWevPOSU8PIR6HSP4R8Lw`} />

                {
                    locations.map(wifi => (
                        <Marker position={[wifi.lat, wifi.lon]} icon={wifiIcon}>
                            <Popup className="popup-style" closeButton={false}>
                                <div style={{ display: "grid", gridTemplateColumns: "30px 1fr", columnGap: 15 }}>
                                    <div>
                                        <div className="square"></div>
                                    </div>
                                    <div>
                                        <div className="font18 bold">{wifi.name}</div>
                                        <div>07017895599</div>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                }


            </LeafletMap>
        </div>
    );
}

export default App;
