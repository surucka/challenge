document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Form validation
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let eventDate = document.getElementById('eventDate').value;
    let numberOfTickets = document.getElementById('numberOfTickets').value;
    let preferredSession = document.getElementById('preferredSession').value;
    let specialRequests = document.getElementById('specialRequests').value;

    if (!firstName || !lastName || !email || !eventDate || !numberOfTickets || !preferredSession) {
        alert('Please fill out all required fields.');
        return;
    }

    // Capture form data
    let formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        eventDate: eventDate,
        numberOfTickets: numberOfTickets,
        preferredSession: preferredSession,
        specialRequests: specialRequests
    };

    // Make AJAX POST request
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://your-aws-lambda-function-endpoint', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formData));

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Form submitted successfully.');
        } else {
            alert('An error occurred: ' + xhr.status);
        }
    };
});