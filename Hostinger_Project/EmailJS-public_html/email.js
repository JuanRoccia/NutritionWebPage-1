// EmailJS
(function () {
  emailjs.init("44jyllmHfUTJcw3hg");
})();

// Controlador JavaScript para manejar el envío del formulario
console.log('Before adding event listener');
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  console.log('Form submitted'); // Agrega esta línea para verificar que el evento se active

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('input[name="message"]').value;
  const like = document.querySelector('input[name="like"]').checked;

  emailjs
    .send("service_i3xxxzc", "template_u7ctgm4", {
      name: name,
      email: email,
      message: message,
      like: like ? "Si" : "No",
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        const confirmation = document.getElementById("confirmation");
        const confirmationMessage = document.getElementById("confirmation-message");
        confirmation.style.display = "block";
        confirmationMessage.textContent = "Tu mensaje ha sido enviado con éxito.";
      },
      function (error) {
        console.log("FAILED...", error);
        const confirmation = document.getElementById("confirmation");
        const confirmationMessage = document.getElementById("confirmation-message");
        confirmation.style.display = "block";
        confirmationMessage.textContent = "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
      }
    );
});