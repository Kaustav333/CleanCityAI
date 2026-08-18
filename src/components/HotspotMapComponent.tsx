'use client'

import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const DUMMY_HOTSPOTS = [
  { id: 1, lat: 28.6139, lng: 77.2090, intensity: 80, radius: 500, label: 'High Overflow Area' },
  { id: 2, lat: 28.6250, lng: 77.2150, intensity: 40, radius: 300, label: 'Moderate Dumping' },
  { id: 3, lat: 28.6050, lng: 77.2250, intensity: 95, radius: 600, label: 'Severe Illegal Dumping' },
]

export default function HotspotMapComponent() {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm z-0">
      <MapContainer 
        center={[28.6139, 77.2090]} 
        zoom={13} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {DUMMY_HOTSPOTS.map(spot => (
          <Circle 
            key={spot.id} 
            center={[spot.lat, spot.lng]} 
            pathOptions={{ color: spot.intensity > 70 ? 'red' : 'orange', fillColor: spot.intensity > 70 ? '#f87171' : '#fbbf24', fillOpacity: 0.4 }}
            radius={spot.radius}
          >
            <Popup>
              <div className="font-semibold text-gray-900">{spot.label}</div>
              <div className="text-sm text-red-600">Intensity: {spot.intensity}%</div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  )
}
