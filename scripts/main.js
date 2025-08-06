// منو موبایل
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

// دکمه حالت شب
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// دکمه بازگشت به بالا
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// پاپ‌آپ تماس
document.getElementById('open-contact').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact-popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('contact-popup').style.display = 'none';
});