'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix Leaflet's default icon path issues in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const DUMMY_DUSTBINS = [
  { id: 1, lat: 28.6139, lng: 77.2090, type: 'Public', status: 'Normal' },
  { id: 2, lat: 28.6200, lng: 77.2100, type: 'Recycling', status: 'Overflowing' },
  { id: 3, lat: 28.6100, lng: 77.2200, type: 'E-Waste', status: 'Normal' },
]

export default function MapComponent() {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm z-0">
      <MapContainer 
        center={[28.6139, 77.2090]} 
        zoom={13} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {DUMMY_DUSTBINS.map(bin => (
          <Marker key={bin.id} position={[bin.lat, bin.lng]}>
            <Popup>
              <div className="font-semibold">{bin.type} Bin</div>
              <div className={`text-sm ${bin.status === 'Overflowing' ? 'text-red-600 font-bold' : 'text-green-600'}`}>
                Status: {bin.status}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
