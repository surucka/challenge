const form = document.querySelector('#eventForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const eventDateInput = document.getElementById('eventDate');
const numberOfTicketsInput = document.getElementById('numberOfTickets');
const preferredSessionInput = document.getElementById('preferredSession');
const specialRequestsInput = document.getElementById('specialRequests');

form.addEventListener('submit', (event) => {
event.preventDefault();

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        eventDate: eventDateInput.value,
        numberOfTickets: numberOfTicketsInput.value,
        preferredSession: preferredSessionInput.value,
        specialRequests: specialRequestsInput.value,
    };

    const currentDate = new Date();
    const selectedDate = new Date(eventDateInput.value);
    if (selectedDate <= currentDate) {
      alert('Event date has past.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (numberOfTicketsInput.value <= 0) {
        alert('Number of tickets must be greater than 0.');
        return;
    }

    fetch('https://mcf6yv4ngc.execute-api.us-east-2.amazonaws.com/lambda_challenge/formdata', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then((response) => {
        if (response.ok) {
        alert('Event registration successful!');
        form.reset(); 
        } else {
        alert('Error submitting form. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});