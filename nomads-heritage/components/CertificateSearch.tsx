'use client';

import React, { useState, useEffect } from 'react';

interface Certificate {
  name: string;
  standard: string;
  issued: string;
  expires: string;
  status: string;
  pdfPath?: string;
}

const certificates: Record<string, Certificate> = {
  'MRC-24/001': {
    name: 'Ширээт хөгжил хоршоо',
    standard: 'MNS 6891:2020',
    issued: '2024-01-03',
    expires: '2026-01-02',
    status: 'Хүчинтэй',
    pdfPath: '/certificates/MRC-RN-24-001.pdf'
  },
  'MRC-RN-24/001': {
    name: 'Ширээт хөгжил хоршоо',
    standard: 'MNS 6891:2020',
    issued: '2024-01-03',
    expires: '2026-01-02',
    status: 'Хүчинтэй',
    pdfPath: '/certificates/MRC-RN-24-001.pdf'
  },
  'MRC-24/002': {
    name: 'Малчдын хамтын хүч хоршоо',
    standard: 'MNS 6891:2020',
    issued: '2024-01-03',
    expires: '2026-01-02',
    status: 'Хүчинтэй'
  },
  'MRC-24/003': {
    name: 'Тэгш улаан туг хоршоо',
    standard: 'MNS 6891:2020',
    issued: '2024-01-03',
    expires: '2026-01-02',
    status: 'Хүчинтэй'
  },
  'MRC-22/006': {
    name: 'Хулгар бэлчээр ашиглагчдын хэсэг',
    standard: 'MNS 6891:2020',
    issued: '2022-12-21',
    expires: '2024-12-20',
    status: 'Хүчингүй'
  }
};

export default function CertificateSearch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState<React.ReactElement | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
    setSearchInput('');
    setSearchResult(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleSearch = () => {
    if (!searchInput.trim()) {
      setSearchResult(
        <p className="error-message">Гэрчилгээний дугаараа оруулна уу</p>
      );
      return;
    }

    const cert = certificates[searchInput.toUpperCase()];

    if (cert) {
      const isValid = cert.status === 'Хүчинтэй';
      setSearchResult(
        <div className="cert-result">
          <h3>{cert.name}</h3>
          <p><strong>Гэрчилгээний дугаар:</strong> {searchInput.toUpperCase()}</p>
          <p><strong>Стандарт:</strong> {cert.standard}</p>
          <p><strong>Олгосон огноо:</strong> {cert.issued}</p>
          <p><strong>Дуусах огноо:</strong> {cert.expires}</p>
          <p>
            <strong>Төлөв:</strong>{' '}
            <span className={isValid ? 'status-valid' : 'status-invalid'}>
              {cert.status}
            </span>
          </p>
          {cert.pdfPath && (
            <div className="cert-pdf-actions">
              <a
                href={cert.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-view-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                PDF харах
              </a>
              <a
                href={cert.pdfPath}
                download
                className="pdf-download-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Татах
              </a>
            </div>
          )}
        </div>
      );
    } else {
      setSearchResult(
        <p className="error-message">
          Гэрчилгээ олдсонгүй. Дугаараа шалгаад дахин оролдоно уу.
        </p>
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <section className="cert-search-cta">
        <button className="open-modal-btn" onClick={openModal}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          Гэрчилгээ шалгах
        </button>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Гэрчилгээ хайх</h2>
              <button className="close-btn" onClick={closeModal}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-description">
                Гэрчилгээний дугаараар хайж, баталгаажуулалтын мэдээллийг шалгана уу
              </p>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Гэрчилгээний дугаараа оруулна уу (жишээ: MRC-24/001)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  autoFocus
                />
                <button onClick={handleSearch}>Хайх</button>
              </div>
              <div className="search-result">
                {searchResult}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
