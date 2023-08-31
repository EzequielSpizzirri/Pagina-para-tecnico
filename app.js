document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Mostrar el mensaje de confirmación
        mensajeConfirmacion.classList.remove("hidden");

        // Reiniciar el contenido del mensaje después de 5 segundos
        setTimeout(function () {
            mensajeConfirmacion.textContent = '';
        }, 5000);

        // Restablecer el formulario para permitir el envío nuevamente
        contactForm.reset();
    });

    const darkModeToggle = document.getElementById('modoOscuro');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});