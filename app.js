document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        mensajeConfirmacion.classList.remove("hidden");
        contactForm.reset();

        setTimeout(function () {
            mensajeConfirmacion.textContent = '';
        }, 5000);
    });

    const darkModeToggle = document.getElementById('modoOscuro');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});