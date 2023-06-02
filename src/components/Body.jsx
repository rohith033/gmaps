
import React from 'react';
import L from 'leaflet';
import '../styles/style.css'; // Import your CSS file

const Body = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const map = L.map(mapRef.current).setView([51.505, -0.09], 10); // Set initial view to London with zoom level 13

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    return () => {
      map.remove(); // Clean up map instance when component unmounts
    };
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map"></div>
    </div>
  );
};

export default Body;
