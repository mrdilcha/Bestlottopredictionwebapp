let tg = window.Telegram.WebApp;

function login() {
    const password = document.getElementById('password').value;
    const correctPassword = 'Dilcha0307'; // Your specified password

    if (password === correctPassword) {
        localStorage.setItem('authenticated', 'true');
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    } else {
        document.getElementById('error-message').textContent = 'Incorrect password. Please try again.';
    }
}

// Check if user is already authenticated
window.onload = function() {
    if (localStorage.getItem('authenticated') === 'true') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    } else {
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('app-container').style.display = 'none';
    }
    tg.expand();
}
