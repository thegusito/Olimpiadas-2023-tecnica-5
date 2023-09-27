<?php
include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['email']) >= 1 && strlen($_POST['cuildni']) >=1 && strlen($_POST['contrasena']) >=1) {       
        $email = trim($_POST['email']);
        $cuildni = trim($_POST['cuildni']);
        $contrasena = trim($_POST['contrasena']);
        $consulta = "INSERT INTO registro_medicos (email, cuildni, contrasena) VALUES ('$email','$cuildni','$contrasena')";
        $resultado = mysqli_query($conex, $consulta);

        if ($resultado) {
            ?> 
            <h3 class="ok">¡Te has inscripto correctamente!</h3>
           <?php
        } else {
            ?> 
            <h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
        }
    } else {
        ?> 
        <h3 class="bad">¡Por favor complete los campos!</h3>
       <?php
    }
}
?>

