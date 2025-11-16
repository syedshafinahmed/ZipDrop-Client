import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
const Coverage = () => {
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
  const handleSearch = e => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 12);
    }
  }
  const position = [23.6850, 90.3563];
  return (
    <div className='py-20'>
      <h2 className='text-secondary text-3xl font-bold'>We are available in 64 districts</h2>
      <form onSubmit={handleSearch} className="relative w-full md:w-1/3 py-10">
        <input
          type="text"
          name='location'
          placeholder="Search here..."
          className="input border border-secondary h-12 outline-none input-bordered w-full rounded-xl pr-32"
        />
        <button
          className="absolute top-1/2 right-1 btn -translate-y-1/2 z-10 bg-primary text-black text-xs font-bold px-6 py-1 rounded-xl "
        >
          Search
        </button>
      </form>
      <h2 className='text-secondary text-xl font-bold pb-5'>We deliver almost all over Bangladesh</h2>
      <div className='rounded-xl w-full h-96'>
        <MapContainer className='h-96 rounded-xl'
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          attributionControl={false}
          ref={mapRef}
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