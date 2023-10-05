document
	.getElementById('registrationForm')
	.addEventListener('submit', function (e) {
		e.preventDefault();

		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

		const formData = {
			firstName: document.getElementById('firstName').value,
			lastName: document.getElementById('lastName').value,
			email: document.getElementById('email').value,
			eventDate: document.getElementById('eventDate').value,
			numTickets: document.getElementById('numTickets').value,
			session: document.getElementById('session').value,
			specialRequests: document.getElementById('specialRequests').value,
		};

		if (!emailPattern.test(formData.email)) {
			document.getElementById('message').textContent =
				'Please enter a valid email address.';
			return;
		}

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
