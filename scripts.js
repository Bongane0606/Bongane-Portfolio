
// scripts.js

// Handle Booking Form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple validation (you can add more if needed)
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (name && service && date && time) {
        alert(`Thank you for booking, ${name}! You have an appointment for ${service} on ${date} at ${time}.`);
    } else {
        alert('Please fill out all fields.');
    }
});
