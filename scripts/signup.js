function register() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !email || !username || !password) {
        document.getElementById('registerMessage').textContent = "همه فیلدها را پر کنید.";
        return;
    }

    // ارسال اطلاعات به سرور
    fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, username, password })
        })
        .then(res => res.text())
        .then(data => {
            document.getElementById('registerMessage').textContent = "✅ ثبت‌نام با موفقیت انجام شد!";
        })
        .catch(err => {
            document.getElementById('registerMessage').textContent = "❌ خطا در ثبت‌نام";
        });
}