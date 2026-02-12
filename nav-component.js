// Shared Navigation Component
// Automatically adds navigation bar to pages

(function() {
  // Detect current page
  const isHome = window.location.pathname === '/' || window.location.pathname.includes('index.html');
  const isGuide = window.location.pathname.includes('/guides/');
  
  // Create nav HTML
  const navHTML = `
    <div id="global-nav" style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(13, 15, 14, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid #2a332a;
      padding: 12px 20px;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'JetBrains Mono', 'Space Grotesk', monospace;
      font-size: 12px;
    ">
      <div style="display: flex; gap: 24px; align-items: center;">
        <a href="/" style="
          color: #39d353;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        " onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">
          scotthugh.github.io
        </a>
        <span style="color: #5c6b5c;">|</span>
        <a href="/guides/linux-field-engineer/guide.html" style="
          color: ${isGuide ? '#39d353' : '#9db09d'};
          text-decoration: none;
          transition: color 0.2s;
        " onmouseover="this.style.color='#39d353'" onmouseout="this.style.color='${isGuide ? '#39d353' : '#9db09d'}'">
          Linux Guide
        </a>
      </div>
      <div style="display: flex; gap: 16px; align-items: center;">
        <a href="https://github.com/scotthugh" target="_blank" rel="noopener" style="
          color: #9db09d;
          text-decoration: none;
          font-size: 11px;
          transition: color 0.2s;
        " onmouseover="this.style.color='#39d353'" onmouseout="this.style.color='#9db09d'">
          GitHub
        </a>
        <a href="https://ko-fi.com/scotthugh?utm_medium=github&utm_source=site_nav&utm_campaign=global_nav" target="_blank" rel="noopener" style="
          color: #9db09d;
          text-decoration: none;
          font-size: 11px;
          transition: color 0.2s;
        " onmouseover="this.style.color='#39d353'" onmouseout="this.style.color='#9db09d'">
          Ko-fi
        </a>
      </div>
    </div>
  `;
  
  // Insert nav at top of body
  if (document.body) {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Add top padding to body to prevent content being hidden
    if (isHome) {
      document.body.style.paddingTop = '60px';
    }
  }
})();
