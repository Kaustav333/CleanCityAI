'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useState } from 'react'

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

function LocationMarker() {
  const [position, setPosition] = useState<L.LatLng | null>(null)
  const map = useMap()

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    })
  }, [map])

  // Create a custom blue dot icon for the user's location
  const userIcon = L.divIcon({
    className: 'user-location-icon',
    html: `<div style="background-color: #3b82f6; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 6px rgba(0,0,0,0.5);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  })

  return position === null ? null : (
    <Marker position={position} icon={userIcon}>
      <Popup>
        <div className="font-semibold text-blue-600">You are here</div>
      </Popup>
    </Marker>
  )
}

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
        <LocationMarker />
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
