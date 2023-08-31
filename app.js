document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        // Llamada a la función para enviar los datos a Google Sheets
        enviarDatosAGoogleSheets(nombre, email, mensaje);

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

// Función para enviar los datos a Google Sheets
function enviarDatosAGoogleSheets(nombre, email, mensaje) {
    const apiKey = "AIzaSyDJOnAs-1lQbjP_t6ouFWhO89eNf8PYZFc"; // Reemplaza con tu clave de API
    const spreadsheetId = "16czgSV0TiJ9k13cfTUx8A8Hjio72APs7ZOGMQtu05Is"; // Reemplaza con el ID de tu hoja de cálculo

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Formulario?key=${apiKey}`;
    
    const data = {
        values: [[nombre, email, mensaje]]
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos enviados:', data);
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
}