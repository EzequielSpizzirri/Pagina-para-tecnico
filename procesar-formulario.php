<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    $datos = "Nombre: $nombre\nCorreo electrónico: $email\nMensaje: $mensaje\n\n";
    
    $archivo = fopen("C:\Users\Usuario\Downloads\Programacion\Pagina para tecnico\datos.txt", "a");
    fwrite($archivo, $datos);
    fclose($archivo);
}
?>