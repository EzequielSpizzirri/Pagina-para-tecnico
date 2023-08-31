<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    $to = "ezezx5@hotmail.com"; // Cambia esto con tu dirección de correo electrónico
    $subject = "Nuevo mensaje de contacto desde tu sitio web";
    $message = "Nombre: $nombre\nCorreo electrónico: $email\nMensaje: $mensaje";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
}
?>