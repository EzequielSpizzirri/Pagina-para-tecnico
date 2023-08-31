<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $data = array(
        "Nombre" => $nombre,
        "Email" => $email,
        "Mensaje" => $mensaje
    );

    $spreadsheetId = "16czgSV0TiJ9k13cfTUx8A8Hjio72APs7ZOGMQtu05Is/edit?hl=es#gid=0";
    $apiKey = "AIzaSyDJOnAs-1lQbjP_t6ouFWhO89eNf8PYZFc";
    $url = "https://sheets.googleapis.com/v4/spreadsheets/$spreadsheetId/values/Formulario?key=$apiKey";

    $data = array("values" => array($data));
    $data_json = json_encode($data);

    $options = array(
        'http' => array(
            'header'  => "Content-Type: application/json\r\n",
            'method'  => 'POST',
            'content' => $data_json
        )
    );

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    if ($result !== false) {
        // Éxito
        echo "Mensaje enviado correctamente.";
    } else {
        // Error
        echo "Error al enviar el mensaje.";
    }
}
?>