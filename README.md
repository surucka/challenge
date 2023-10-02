# AWS Lambda Form Submission Project

## Overview

The goal of this project is to create a basic web form that POSTs data to an AWS Lambda function. The theme of the form will be "Event Registration".

## Requirements

1. **Front-end**:
    - Pure HTML, JS, and CSS. No web frameworks.
    - Fields in the form:
        - First Name (text input)
        - Last Name (text input)
        - Email (email input)
        - Event Date (date input)
        - Number of Tickets (number input)
        - Preferred Session (dropdown: Morning, Afternoon, Evening)
        - Special Requests (textarea)
    - A submit button to post the form data.
    - Display a success or failure message upon form submission.
    - Basic validation to ensure all fields are filled out.

2. **Back-end**:
    - Create an AWS Lambda function that receives the POST request.
    - The function should parse and log the received data.
    - Respond with a success or error message.

## Steps

### Front-end:

1. Set up a basic HTML page with a form containing the fields mentioned in the requirements.
2. Add CSS to style the form and make it look professional.
3. Use JavaScript to:
    - Add form validation.
    - Capture the form data on submission.
    - Make an AJAX POST request to the AWS Lambda function endpoint.

### Back-end:

1. Set up an AWS account (if you haven’t already).
2. Create a new AWS Lambda function.
3. In the function, write code (you can use Node.js for this) to:
    - Parse the incoming data.
    - Log the data to CloudWatch Logs.
    - Return a success or error response.
4. Set up an API Gateway to expose the Lambda function as a RESTful endpoint.
5. Ensure the API Gateway is configured to accept POST requests and integrate with the Lambda function.

## Testing

1. Fill out the form and submit it. Check the AWS CloudWatch Logs to ensure the Lambda function received and logged the data correctly.
2. Test the validation to ensure that users can't submit incomplete forms.
3. Test the success and error messages to ensure they display correctly to the user.

## Bonus Challenges

1. **Enhanced Styling**: Improve the CSS styling, perhaps with animations or transitions for a smoother user experience.
2. **Advanced Validation**: Use JavaScript regex patterns to validate the email format.
3. **Persistent Storage**: Modify the Lambda function to store the received form data in an AWS DynamoDB table.

## Getting started

Fork this repo to start your project.  Create an MR back to the original for project submission.

Good luck and have fun building!
