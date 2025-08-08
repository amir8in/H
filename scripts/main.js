document.addEventListener("DOMContentLoaded", function() {
    // ------------------------------
    // پاپ‌آپ تماس با من
    // ------------------------------
    const contactLink = document.getElementById("contact-link");
    const popup = document.getElementById("contact-popup");
    const closePopup = document.getElementById("close-popup");

    if (contactLink && popup && closePopup) {
        contactLink.addEventListener("click", function(e) {
            e.preventDefault();
            popup.style.display = "flex";
        });

        closePopup.addEventListener("click", function() {
            popup.style.display = "none";
        });
    }

    // ------------------------------
    // حالت شب/روز
    // ------------------------------
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }

    // ------------------------------
    // دکمه برگشت به بالا
    // ------------------------------
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.style.display = window.scrollY > 300 ? "block" : "none";
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ------------------------------
    // فرم پشتیبانی - باز و بسته شدن
    // ------------------------------
    const supportBtn = document.getElementById("supportBtn");
    const supportForm = document.getElementById("supportForm");

    if (supportBtn && supportForm) {
        supportBtn.addEventListener("click", () => {
            supportForm.classList.remove("hidden");
        });

        // بسته شدن فرم با کلیک بیرون از آن
        document.addEventListener("click", function(e) {
            if (!supportForm.contains(e.target) &&
                e.target !== supportBtn &&
                !supportBtn.contains(e.target)
            ) {
                supportForm.classList.add("hidden");
            }
        });
    }

    // ------------------------------
    // منوی موبایل (در صورت استفاده)
    // ------------------------------
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".glass-nav ul");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});
// پاپ‌آپ تماس
document.getElementById("contact-link").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("contact-popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("contact-popup").style.display = "none";
});
