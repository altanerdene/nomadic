import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Organization {
  id: number;
  name: string;
  location: string;
  aimag: string;
  sum: string;
  certNumber: string;
  standard: string;
  status: string;
  phone: string;
  coords: { lat: number; lng: number };
}

interface LeafletMapProps {
  organizations: Organization[];
  selectedOrg: Organization | null;
  setSelectedOrg: (org: Organization | null) => void;
}

export default function LeafletMap({ organizations, selectedOrg, setSelectedOrg }: LeafletMapProps) {
  // Mongolia center coordinates
  const center: [number, number] = [46.8625, 103.8467];

  useEffect(() => {
    // Fix Leaflet default marker icon issue with Next.js
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={6}
      className="leaflet-map-inner"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {organizations.map((org) => (
        <Marker
          key={org.id}
          position={[org.coords.lat, org.coords.lng]}
          eventHandlers={{
            click: () => setSelectedOrg(org),
          }}
        >
          <Popup>
            <div className="map-popup">
              <h4>{org.name}</h4>
              <p><strong>Байршил:</strong> {org.aimag}, {org.sum}</p>
              <p><strong>Гэрчилгээ:</strong> {org.certNumber}</p>
              <p>
                <strong>Төлөв:</strong>{' '}
                <span className={org.status === 'Хүчинтэй' ? 'status-valid' : 'status-invalid'}>
                  {org.status}
                </span>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
