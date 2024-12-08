document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Data Submitted:', (name, email, message));

    document.getElementById('formContainer').innerHTML = `
                <div class="thank-you-message">
                    <p>Thank you for contacting, ${name}!</p>
                    <p>I'll get back to you soon.</p>
                </div>
            `;

    event.target.reset();
});