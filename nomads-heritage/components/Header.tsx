'use client';

import { useState } from 'react';

export default function Header() {
  const [activeLang, setActiveLang] = useState('МОН');

  return (
    <header>
      <nav>
        <div className="logo">Талын Нүүдэлчдийн Өв</div>
        <ul className="nav-links">
          <li><a href="#home">Нүүр</a></li>
          <li><a href="#about">Бидний тухай</a></li>
          <li><a href="#services">Үйлчилгээ</a></li>
          <li><a href="#news">Мэдээ</a></li>
          <li><a href="#resources">Нөөц</a></li>
          <li><a href="#standards">Стандарт</a></li>
          <li><a href="#contact">Холбоо барих</a></li>
        </ul>
        <div className="language-selector">
          <button
            className={`lang-btn ${activeLang === 'МОН' ? 'active' : ''}`}
            onClick={() => setActiveLang('МОН')}
          >
            МОН
          </button>
          <button
            className={`lang-btn ${activeLang === 'ENG' ? 'active' : ''}`}
            onClick={() => setActiveLang('ENG')}
          >
            ENG
          </button>
        </div>
      </nav>
    </header>
  );
}
