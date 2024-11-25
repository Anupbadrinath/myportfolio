document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Collect form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Send email using EmailJS
      emailjs.send('service_2oak2be', 'template_de4u7pk', {
          from_name: name,
          from_email: email,
          message: message
      })
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
      }, function(error) {
          console.log('FAILED...', error);
          alert('Failed to send your message. Please try again later.');
      });
  });
});
