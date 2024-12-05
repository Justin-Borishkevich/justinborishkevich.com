document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('your_public_key'); // Replace with your EmailJS public key

    const form = document.getElementById('NxWZGy4pFfsZ3MswV');
    
    document.getElementById('register-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission
    
        // Collect selected instruments
        const checkedInstruments = Array.from(
            document.querySelectorAll('input[name="instrument"]:checked')
        ).map((checkbox) => checkbox.value);
    
        const instruments = checkedInstruments.length > 0
            ? `The user selected the following instruments: ${checkedInstruments.join(', ')}.`
            : 'No instruments were selected.';
    
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('number').value,
            experience: instruments,
            moreInfo: document.getElementById('more-info').value,
            joinInfo: document.getElementById('join-info').value
        };
    
        // Send the email
        // emailjs
        //     .send('service_byefg27', 'template_sr1sfsk', formData)
        //     .then(() => {
                alert('Message sent successfully!');
            // })
            // .catch((error) => {
            //     console.error('Error sending email:', error);
            //     alert('Failed to send the message. Please try again.');
            // });
    });
});

