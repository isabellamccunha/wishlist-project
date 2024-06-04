document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('login-link');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.querySelector('.close-button');

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
