document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Neon NFT Website loaded');
  
    // === SCROLL ANIMATION ===
    const animateOnScroll = document.querySelectorAll('.nft-card, .milestone, .team-member');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.2
    });
  
    animateOnScroll.forEach(el => observer.observe(el));
  
    // === AUTO SLIDER FOR NFT SECTION ===
    const nftSlider = document.querySelector('.nft-slider');
    let scrollPos = 0;
    let cardWidth = 260; // approx width of card including margin
    let scrollSpeed = 3000; // 3 seconds
  
    if (nftSlider) {
      setInterval(() => {
        scrollPos += cardWidth;
  
        if (scrollPos >= nftSlider.scrollWidth - nftSlider.clientWidth) {
          scrollPos = 0;
        }
  
        nftSlider.scrollTo({
          left: scrollPos,
          behavior: 'smooth'
        });
      }, scrollSpeed);
    }

    // === Hamburger Menu Toggle ===
    const hamburger = document.getElementById('hamburger-menu');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeBtn = document.getElementById('close-btn');

    hamburger.addEventListener('click', () => {
      fullscreenMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      fullscreenMenu.classList.remove('active');
    });
});
