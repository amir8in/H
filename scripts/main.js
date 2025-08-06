document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.getElementById("contactLink");
    const popup = document.getElementById("contact-popup");
    const closePopup = document.getElementById("close-popup");

    if (contactLink && popup && closePopup) {
        contactLink.addEventListener("click", function(e) {
            e.preventDefault(); // جلوگیری از پرش صفحه
            popup.style.display = "flex";
        });

        closePopup.addEventListener("click", function() {
            popup.style.display = "none";
        });
    }

    // حالت شب
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    // دکمه برگشت به بالا
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // باز و بسته شدن منو در موبایل
    window.toggleMenu = function() {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");
    };
});
