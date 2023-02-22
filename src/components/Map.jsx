import 'leaflet/dist/leaflet.css';
import './Map.css'
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import markerIcon from './img/marker.png';
import Start from './img/BoatingStart.png'

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapContainer = mapRef.current;

    // Initialize the map instance and set its options
    const map = L.map(mapContainer, {
      center: [41.8746, -8.8349], // Set starting point to Caminha
      zoom: 12,
      container: mapContainer,
      dragging: true,
    });

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add custom icon
    const customIcon = L.icon({
      iconUrl: markerIcon,
      iconSize: [25, 25], // set size of the icon
      iconAnchor: [25, 50], // set anchor point of the icon
    });

    // Add markers or other map layers as needed
    const markers = [
      { position: [41.867020, -8.856363], title: 'MY HARBOR', description: 'Here is my Office and the Start of the Transport Tour', imageUrl: Start},
      { position: [41.890870, -8.835020], title: 'Marker 2', description: 'This is marker 2.' },
      { position: [41.902051, -8.823047], title: 'Marker 3', description: 'This is marker 3.' },
      { position: [41.909557, -8.806739], title: 'Marker 4', description: 'This is marker 4.' },
      { position: [41.916519, -8.791848], title: 'Marker 5', description: 'This is marker 5.' },
    ];

    markers.forEach((marker) => {
        // Create the marker and add it to the map
        const mapMarker = L.marker(marker.position, { icon: customIcon }).addTo(map);
  
        // Create the popup content
        const popupContent = `
          <div className="custom-popup">
            <h3>${marker.title}</h3>
            <p >${marker.description}</p>
            <img src="${marker.imageUrl}" alt="${marker.title}" width="100%" />
          </div>
        `;
  
        // Bind the popup to the marker
        mapMarker.bindPopup(popupContent);
      });
  
      // Return a cleanup function to remove the map instance when the component unmounts
      return () => {
        map.remove();
      };
    }, []);

  return (
    <div>
      <div ref={mapRef} style={{ width: '80vw', height: '500px' }}></div>
    </div>
  );
};

export default Map;




