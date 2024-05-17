document.addEventListener('DOMContentLoaded', () => {
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
            alert('Event date has passed.');
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

        let request = new XMLHttpRequest();

        request.open('POST', 'https://7ia4uvcxo5.execute-api.us-east-2.amazonaws.com/dev', true);

        request.setRequestHeader('Content-Type', 'application/json');

        let jsonData = JSON.stringify(formData);

        console.log(jsonData);

        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    let response = JSON.parse(request.responseText);
                    console.log(response);
                    alert('Form submitted successfully!');
                    form.reset();
                } else {
                    console.error('Request failed. Status:', request.status);
                    alert('An error occurred while submitting the form.');
                }
            }
        };

        request.send(jsonData);
    });
});