document
	.getElementById('registrationForm')
	.addEventListener('submit', function (e) {
		e.preventDefault();

		const formData = {
			firstName: document.getElementById('firstName').value,
			lastName: document.getElementById('lastName').value,
			email: document.getElementById('email').value,
			eventDate: document.getElementById('eventDate').value,
			numTickets: document.getElementById('numTickets').value,
			session: document.getElementById('session').value,
			specialRequests: document.getElementById('specialRequests').value,
		};

		document.getElementById('message').textContent =
			'Submitting Registration...';

		fetch('https://n0a5etlzc5.execute-api.us-west-2.amazonaws.com/test', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				document.getElementById('message').textContent = data.message;
			});
	});
document.getElementById('message').classList.add('active');
