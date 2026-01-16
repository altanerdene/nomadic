'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

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

const organizations: Organization[] = [
  {
    id: 1,
    name: 'Буга зүрх хоршоо',
    location: 'Архангай, Чулуут, 2-р баг, Зуунмод',
    aimag: 'Архангай',
    sum: 'Чулуут',
    certNumber: 'MRC-22/002',
    standard: 'MNS 6891:2025',
    status: 'Хүчинтэй',
    phone: '88631700',
    coords: { lat: 47.7622, lng: 101.5051 }
  },
  {
    id: 2,
    name: 'Ширээт хөгжил хоршоо',
    location: 'Увс, Өмнөговь',
    aimag: 'Увс',
    sum: 'Өмнөговь',
    certNumber: 'MRC-24/001',
    standard: 'MNS 6891:2020',
    status: 'Хүчинтэй',
    phone: '99123456',
    coords: { lat: 49.9813, lng: 92.1178 }
  },
  {
    id: 3,
    name: 'Малчдын хамтын хүч хоршоо',
    location: 'Завхан, Улиастай',
    aimag: 'Завхан',
    sum: 'Улиастай',
    certNumber: 'MRC-24/002',
    standard: 'MNS 6891:2020',
    status: 'Хүчинтэй',
    phone: '99234567',
    coords: { lat: 47.7414, lng: 96.8433 }
  },
  {
    id: 4,
    name: 'Тэгш улаан туг хоршоо',
    location: 'Хөвсгөл, Мөрөн',
    aimag: 'Хөвсгөл',
    sum: 'Мөрөн',
    certNumber: 'MRC-24/003',
    standard: 'MNS 6891:2020',
    status: 'Хүчинтэй',
    phone: '99345678',
    coords: { lat: 49.6353, lng: 100.1625 }
  },
  {
    id: 5,
    name: 'Хулгар бэлчээр ашиглагчдын хэсэг',
    location: 'Баян-Өлгий, Өлгий',
    aimag: 'Баян-Өлгий',
    sum: 'Өлгий',
    certNumber: 'MRC-22/006',
    standard: 'MNS 6891:2020',
    status: 'Хүчингүй',
    phone: '99456789',
    coords: { lat: 48.9687, lng: 89.9624 }
  }
];

// Dynamically import the entire map with no SSR
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="map-loading">
      <p>Газрын зураг ачааллаж байна...</p>
    </div>
  ),
});

export default function CertifiedOrganizationsMap() {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

  return (
    <section className="certified-orgs-map">
      <h2>Баталгаажсан байгууллагууд</h2>
      <p className="section-subtitle">
        Монгол орон даяар баталгаажсан хоршоо, байгууллагуудын байршил
      </p>

      <div className="map-content-wrapper">
        <div className="map-container-leaflet">
          <LeafletMap
            organizations={organizations}
            selectedOrg={selectedOrg}
            setSelectedOrg={setSelectedOrg}
          />
        </div>

        <div className="organizations-list">
          <h3>Бүртгэлтэй байгууллагууд ({organizations.length})</h3>
          <div className="org-cards">
            {organizations.map((org) => (
              <div
                key={org.id}
                className={`org-card ${selectedOrg?.id === org.id ? 'active' : ''} ${org.status === 'Хүчингүй' ? 'expired' : ''}`}
                onClick={() => setSelectedOrg(org)}
              >
                <div className="org-card-header">
                  <h4>{org.name}</h4>
                  <span className={`status-badge ${org.status === 'Хүчинтэй' ? 'valid' : 'invalid'}`}>
                    {org.status}
                  </span>
                </div>
                <div className="org-card-body">
                  <p className="org-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {org.aimag}, {org.sum}
                  </p>
                  <p className="org-cert">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    {org.certNumber}
                  </p>
                  <p className="org-phone">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {org.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
