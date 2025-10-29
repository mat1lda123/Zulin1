// scripts/main.js
// Мобильное меню
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
}

// Форма обратной связи
const questionForm = document.getElementById('questionForm');
if (questionForm) {
    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        questionForm.reset();
    });
}