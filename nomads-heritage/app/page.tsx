import Header from '@/components/Header';
import CertificateSearch from '@/components/CertificateSearch';
import ScrollAnimations from '@/components/ScrollAnimations';
import CertifiedOrganizationsMap from '@/components/CertifiedOrganizationsMap';

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Header />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Талын Нүүдэлчдийн Өв</h1>
          <p className="hero-subtitle">
            Монголын нүүдэлчин соёл, тогтвортой мал аж ахуйг баталгаажуулан, дэлхийд таниулж байна
          </p>
          <div className="cta-buttons">
            <a href="#services" className="btn btn-primary">Баталгаажуулалт хүсэх</a>
            <a href="#about" className="btn btn-secondary">Дэлгэрэнгүй</a>
          </div>
        </div>
      </section>

      {/* Certificate Search */}
      <CertificateSearch />

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Баталгаажуулалтын үйлчилгээ</h2>
        <div className="service-grid">
          <div className="service-card">
            <span className="service-icon">🐑</span>
            <h3>Хариуцлагатай нүүдэлчин зохистой дадал</h3>
            <p>
              MNS 6891:2025 стандартын дагуу малчдын бүлэг, хоршоодын үйл ажиллагаанд тохирлын үнэлгээ хийж баталгаажуулдаг.
            </p>
          </div>
          <div className="service-card">
            <span className="service-icon">🧶</span>
            <h3>Ноолуур бэлтгэх зохистой дадал</h3>
            <p>
              Ноос, ноолуурын анхан шатны үйлдвэрлэлийг тогтвортой байдлын зарчимд нийцүүлэн баталгаажуулдаг.
            </p>
          </div>
          <div className="service-card">
            <span className="service-icon">✓</span>
            <h3>Тохирлын үнэлгээ</h3>
            <p>
              Хөндлөнгийн хараат бус байдлаар үнэлж, найдвартай мэргэжлийн түвшний үйлчилгээ үзүүлнэ.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">18</div>
            <div className="stat-label">Баталгаажсан байгууллага</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Жилийн туршлага</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Итгэмжлэлтэй</div>
          </div>
        </div>
      </section>

      {/* Certified Organizations Map */}
      <CertifiedOrganizationsMap />

      {/* Partners Section */}
      <section className="partners">
        <h2>Хамтрагч байгууллагууд</h2>
        <div className="partner-grid">
          <div className="partner-item">
            <a href="https://www.mnas.gov.mn/" target="_blank" rel="noopener noreferrer">
              Стандарт хэмжил зүйн газар
            </a>
          </div>
          <div className="partner-item">
            <a href="https://www.mofa.gov.mn/home" target="_blank" rel="noopener noreferrer">
              Гадаад харилцааны яам
            </a>
          </div>
          <div className="partner-item">
            <a href="https://gazar.gov.mn/home" target="_blank" rel="noopener noreferrer">
              Газар зохион байгуулалтын газар
            </a>
          </div>
          <div className="partner-item">
            <a href="https://www.avsf.org/en/pays-action/mongolia/" target="_blank" rel="noopener noreferrer">
              AVSF Монгол
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Холбоо барих</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <h3>Хаяг</h3>
                <p>Сүхбаатар дүүрэг, 8-р хороо, Юнити центр, 4-402 тоот</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <h3>Утас</h3>
                <p>(+976) 99939938</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-details">
                <h3>И-мэйл</h3>
                <p>gantsogt.gg@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.123456789!2d106.917!3d47.918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU1JzA0LjgiTiAxMDbCsDU1JzAxLjIiRQ!5e0!3m2!1sen!2smn!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Талын Нүүдэлчдийн Өв</h3>
            <p>Монголын нүүдэлчин соёл, тогтвортой мал аж ахуйг дэмжин, баталгаажуулж байна.</p>
          </div>
          <div className="footer-section">
            <h3>Холбоосууд</h3>
            <ul>
              <li><a href="#about">Бидний тухай</a></li>
              <li><a href="#services">Үйлчилгээ</a></li>
              <li><a href="#news">Мэдээ мэдээлэл</a></li>
              <li><a href="#standards">Стандартууд</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Нөөц материал</h3>
            <ul>
              <li><a href="#">Тайлан судалгаа</a></li>
              <li><a href="#">Гарын авлага</a></li>
              <li><a href="#">Баталгаажуулалтын журам</a></li>
              <li><a href="#">Асуулт хариулт</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Талын Нүүдэлчдийн Өв ТББ. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </footer>
    </>
  );
}
