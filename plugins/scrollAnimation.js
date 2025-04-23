// plugins/scrollAnimation.js

export default function () {
  if (process.client) {
    function handleScroll() {
      const elements = document.querySelectorAll('.scroll-animations');
      const windowHeight = window.innerHeight;
    
      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;
        const isElementVisible = positionFromTop - windowHeight <= 0;
    
        if (isElementVisible) {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        } else {
          element.classList.remove('animate__animated', 'animate__fadeInUp');
        }
      });
    }
    
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
  }
}
