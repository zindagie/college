document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // You can add your validation and submission logic here
        // For a basic example, we'll just log the form data
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    });
});
