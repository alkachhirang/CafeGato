//========= FOOTER-CURRENT-YEAR ======
const currentYear = new Date().getFullYear();

// Find the span element with the id 'year' and set its text content
document.getElementById('year').textContent = currentYear;

//============ CONNECTED-FORM ===========

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var isValid = true;

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";

    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = "Name can only contain letters and spaces.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    if (isValid) {
        // If form is valid, submit data via AJAX
        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Form submitted successfully');
                // Clear form fields
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
            } else {
                alert('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Form submit successfully');
        });
    }
});