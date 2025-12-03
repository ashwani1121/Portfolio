const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        message: form.message.value
    };

    // Send email using EmailJS
    emailjs.send('Portfolio Contact', 'template_3947egx', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
}); 