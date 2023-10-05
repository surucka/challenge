const form = document.getElementById("eventRegistrationForm");

// Add an event listener for form submission
form.addEventListener("submit", event => {
  event.preventDefault(); // Prevent the form from submitting by default

  // Get input field values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const eventDate = document.getElementById("eventDate").value;
  const numTickets = document.getElementById("numTickets").value;
  const session = document.getElementById("session").value;
  const requests = document.getElementById("requests").value;

  // Perform form validation
  if (firstName === "") {
    alert("First Name is required.");
    return;
  }
  if (lastName === "") {
    alert("Last Name is required.");
    return;
  }
  if (email === "") {
    alert("Email is required.");
    return;
  }
  if (eventDate === "") {
    alert("Event date is required.");
    return;
  }
  if (isNaN(numTickets) || numTickets <= 0) {
    alert("Number of Tickets must be a positive number.");
    return;
  }
  if (session === "") {
    alert("Please select your preferred session.");
    return;
  }

  // Prepare form data for the POST request
  const randomId = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1
  const formData = {
    operation: "create",
    payload: {
      Item: {
        id: randomId.toString(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        eventDate: eventDate,
        numTickets: numTickets,
        session: session,
        requests: requests
      }
    }
  };

  
  // Convert formData to JSON
  const jsonData = JSON.stringify(formData);
  
  console.log(jsonData);

  const apiEndpoint = "https://fk7iw3m4t3.execute-api.us-west-1.amazonaws.com/test/dynamodbmanager";

  // Create an XMLHttpRequest object
  const req = new XMLHttpRequest();

  // Configure the request
  req.open("POST", apiEndpoint, true);
  req.setRequestHeader("Content-Type", "application/json");

  // Set up a callback function to handle the response
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status === 200) {
        // Successful response from AWS Lambda
        alert("Form submitted successfully!");
        form.reset(); // Clear the form
      } else {
        // Handle errors if the request to Lambda fails
        alert("Error: Form submission failed.");
      }
    }
  };

  // Send the POST request to AWS Lambda with the form data
  req.send(jsonData);
});

