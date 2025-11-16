import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
const Coverage = () => {
  const serviceCenters = useLoaderData();
  const position = [23.6850, 90.3563];
  return (
    <div className='py-20'>
      <h2 className='text-secondary text-3xl font-bold'>We are available in 64 districts</h2>
      <h2 className='text-secondary text-xl font-bold'>We deliver almost all over Bangladesh</h2>
      <div className='border border-secondary w-full h-[550px]'>
        <MapContainer className='h-[550px]'
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            serviceCenters.map((center, index) => (<Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />Service Area: {center.covered_area.join(', ')}
              </Popup>
            </Marker>))
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;