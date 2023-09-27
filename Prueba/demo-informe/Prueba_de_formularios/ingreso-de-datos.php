<?php
include("conexion-formulario.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['nombre_del_paciente']) >= 1 && strlen($_POST['hora_ingreso']) >=1 && strlen($_POST['motivo_de_ingreso']) >= 1 && strlen($_POST['informe']) >=1) {       
        $nombre_del_paciente = trim($_POST['nombre_del_paciente']);
        $hora_ingreso = trim($_POST['hora_ingreso']);
        $motivo_de_ingreso = trim($_POST['motivo_de_ingreso']);
        $informe = trim($_POST['informe']);
        $fecha_del_informe = date("d/m/y");

        $consulta = "INSERT INTO registro_informes (nombre_del_paciente, hora_ingreso, motivo_de_ingreso ,informe, fecha_del_informe) VALUES ('$nombre_del_paciente','$hora_ingreso','$motivo_de_ingreso','$informe','$fecha_del_informe')";
        $resultado = mysqli_query($conex, $consulta);

        if ($resultado) {
            ?> 
            <h3 class="ok">¡Has subido el informe correctamente!</h3>
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

