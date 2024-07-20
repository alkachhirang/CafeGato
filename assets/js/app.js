//========= FOOTER-CURRENT-YEAR ======
const currentYear = new Date().getFullYear();

// Find the span element with the id 'year' and set its text content
document.getElementById('year').textContent = currentYear;

//============ CONNECTED-FORM ===========
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = event.target.querySelector('input[type="text"]');
    const emailInput = event.target.querySelector('input[type="email"]');
    const name = nameInput.value;
    const email = emailInput.value;
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    nameInput.value = '';
    emailInput.value = '';
});