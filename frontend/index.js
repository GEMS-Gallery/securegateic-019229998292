import { backend } from 'declarations/backend';

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validateEmail(email) && validatePassword(password)) {
        try {
            const response = await backend.login(email, password);
            document.getElementById('message').innerText = response ? "Login successful!" : "Login failed!";
        } catch (error) {
            console.error("Error during login:", error);
            document.getElementById('message').innerText = "An error occurred. Please try again.";
        }
    } else {
        document.getElementById('message').innerText = "Invalid email or password format.";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}
