document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Basic form validation
    if(name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate sending the form data
    document.getElementById('formMessage').innerText = "Your message has been sent!";

    // Clear form fields
    document.getElementById('contactForm').reset();
});
