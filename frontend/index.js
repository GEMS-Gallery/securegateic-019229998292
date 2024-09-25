document.getElementById('microsoft365Form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/microsoft365', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        document.getElementById('message').textContent = result.message;
    } catch (error) {
        document.getElementById('message').textContent = 'An error occurred. Please try again.';
    }
});
