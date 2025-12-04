import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create bubbles
    createBubbles();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const createBubbles = () => {
    const bubblesContainer = document.querySelector('.bubbles-container');
    if (!bubblesContainer) return;
    
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.animationDelay = Math.random() * 10 + 's';
      bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
      bubble.style.width = bubble.style.height = (Math.random() * 60 + 20) + 'px';
      bubblesContainer.appendChild(bubble);
    }
  };

  return (
    <div className="app">
      {/* Fixed Contact Buttons */}
      <div className={`contact-bar ${scrolled ? 'scrolled' : ''}`}>
        <a 
          href="https://zalo.me/0868212046" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-btn zalo-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          <span>Zalo</span>
        </a>
        <a 
          href="https://www.facebook.com/le.binh.964840" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-btn facebook-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
          </svg>
          <span>Facebook</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="bubbles-container"></div>
        <div className="hero-overlay"></div>
        <div 
          className="hero-gradient-orb" 
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`
          }}
        ></div>
        <div className="hero-content">
          <div className="neon-border">
            <h1 className="hero-title">
              <span className="title-line glitch" data-text="Mê Cá">Mê Cá</span>
              <span className="title-line highlight neon-text" data-text="Hơn Mê Vợ">Hơn Mê Vợ</span>
            </h1>
          </div>
          <p className="hero-subtitle glass-effect">Cá Guppy 7 Màu Đỉnh Cao Thế Giới</p>
          <div className="hero-badges">
            <span className="badge floating">🏆 Chất Lượng #1</span>
            <span className="badge floating" style={{animationDelay: '0.2s'}}>🌈 7 Màu Rực Rỡ</span>
            <span className="badge floating" style={{animationDelay: '0.4s'}}>💎 Giống Thuần</span>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Khách Hàng</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Giống Cá</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Hài Lòng</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator pulse">
          <div className="mouse"></div>
          <span className="scroll-text">Cuộn xuống</span>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="section-bg-pattern"></div>
        <div className="container">
          <h2 className="section-title neon-glow">
            <span className="title-decoration rotating">✨</span>
            Cá Guppy Của Chúng Tôi
            <span className="title-decoration rotating">✨</span>
          </h2>
          <p className="section-subtitle">Những chú cá đẹp nhất được chọn lọc kỹ càng</p>
          <div className="video-grid">
            <div className="video-card glass-card">
              <div className="card-glow"></div>
              <div className="video-wrapper">
                <video 
                  className="guppy-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/placeholder-fish.jpg"
                >
                  <source src="/videos/guppy1.mp4" type="video/mp4" />
                  Trình duyệt không hỗ trợ video
                </video>
                <div className="video-overlay">
                  <span className="video-label">🔥 Guppy Đỏ Rực</span>
                  <span className="video-price">Liên hệ</span>
                </div>
              </div>
            </div>
            <div className="video-card glass-card featured">
              <div className="featured-badge">⭐ HOT</div>
              <div className="card-glow"></div>
              <div className="video-wrapper">
                <video 
                  className="guppy-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/placeholder-fish.jpg"
                >
                  <source src="/videos/guppy2.mp4" type="video/mp4" />
                  Trình duyệt không hỗ trợ video
                </video>
                <div className="video-overlay">
                  <span className="video-label">💙 Guppy Xanh Dương</span>
                  <span className="video-price">Liên hệ</span>
                </div>
              </div>
            </div>
            <div className="video-card glass-card">
              <div className="card-glow"></div>
              <div className="video-wrapper">
                <video 
                  className="guppy-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/placeholder-fish.jpg"
                >
                  <source src="/videos/guppy3.mp4" type="video/mp4" />
                  Trình duyệt không hỗ trợ video
                </video>
                <div className="video-overlay">
                  <span className="video-label">🌈 Guppy 7 Màu</span>
                  <span className="video-price">Liên hệ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Guppy Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title gradient-text">Cá Guppy 7 Màu - Viên Ngọc Nhiệt Đới</h2>
              <p className="about-description">
                Cá Guppy 7 màu là loài cá cảnh được yêu thích nhất thế giới với vẻ đẹp rực rỡ, 
                sặc sỡ như cầu vồng. Mỗi con cá là một tác phẩm nghệ thuật độc đáo của thiên nhiên.
              </p>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">🌈</div>
                  <h3>7 Màu Rực Rỡ</h3>
                  <p>Đỏ, cam, vàng, xanh lá, xanh dương, chàm, tím - đầy đủ sắc màu cầu vồng</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💪</div>
                  <h3>Dễ Nuôi</h3>
                  <p>Thích nghi tốt, sinh sản nhanh, phù hợp cả người mới bắt đầu</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <h3>Năng Động</h3>
                  <p>Bơi lội nhanh nhẹn, tạo không gian sống động cho bể cá</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <h3>Giống Thuần</h3>
                  <p>Chọn lọc kỹ càng, đảm bảo chất lượng và màu sắc đẹp nhất</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Bộ Sưu Tập Guppy Đẳng Cấp</span>
          </h2>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="gallery-item">
                <img 
                  src={`/images/guppy${num}.jpg`} 
                  alt={`Cá Guppy ${num}`}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x600/667eea/ffffff?text=Guppy+' + num;
                  }}
                />
                <div className="gallery-overlay">
                  <span className="gallery-label">Guppy Premium #{num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Sẵn Sàng Sở Hữu Cá Guppy Đẳng Cấp?</h2>
            <p className="cta-subtitle">Liên hệ ngay để được tư vấn và đặt hàng</p>
            <div className="cta-buttons">
              <a 
                href="https://zalo.me/0868212046" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-btn primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                Nhắn Zalo Ngay
              </a>
              <a 
                href="https://www.facebook.com/le.binh.964840" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-btn secondary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
                Inbox Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2024 Mê Cá Hơn Mê Vợ - Cá Guppy 7 Màu Đẳng Cấp Thế Giới
          </p>
          <p className="footer-tagline">
            🐠 Nuôi cá Guppy - Nuôi niềm đam mê 🐠
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
