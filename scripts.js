document.getElementById('registrationForm').addEventListener('submit', function (event) {
    let isValid = true;
    let errorMessage = '';

    // Name validation
    let name = document.getElementById('name').value;
    if (name.trim() === '') {
        errorMessage += 'Name is required.\n';
        isValid = false;
    }

    // Email validation
    let email = document.getElementById('email').value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage += 'Invalid email format.\n';
        isValid = false;
    }

    // Password validation
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 8) {
        errorMessage += 'Password must be at least 8 characters long.\n';
        isValid = false;
    }
    if (password !== confirmPassword) {
        errorMessage += 'Passwords do not match.\n';
        isValid = false;
    }

    // Age validation
    let age = document.getElementById('age').value;
    if (age < 18 || age > 100) {
        errorMessage += 'Age must be between 18 and 100.\n';
        isValid = false;
    }

    // Terms and Conditions validation
    let terms = document.getElementById('terms').checked;
    if (!terms) {
        errorMessage += 'You must agree to the terms and conditions.\n';
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    let isValid = true;
    let errorMessage = '';

    // Email validation
    let loginEmail = document.getElementById('loginEmail').value;
    if (!/^\S+@\S+\.\S+$/.test(loginEmail)) {
        errorMessage += 'Invalid login email format.\n';
        isValid = false;
    }

    // Password validation
    let loginPassword = document.getElementById('loginPassword').value;
    if (loginPassword.trim() === '') {
        errorMessage += 'Password is required.\n';
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
