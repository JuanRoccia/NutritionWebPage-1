<?php
if(isset($_POST['submit'])) {
    // $to = "cyntia_concetti_@hotmail.com";
    $to = "juanma_94_10@hotmail.com";
    $subject = "Mensaje de contacto desde el sitio web";
    $name = $_POST['Name'];
    $email = $_POST['email'];
    $message = $_POST['Message'];
    $headers = "From: $name <$email>" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $message, $headers)) {
        echo "El mensaje se ha enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>