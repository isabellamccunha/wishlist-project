document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel .slides img');
    const loginModal = document.getElementById('login-modal');
    const loginLink = document.getElementById('login-link');
    const closeButton = document.querySelector('.close-button');

    const showSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
    };

    setInterval(showSlides, 3000);

    loginLink.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
