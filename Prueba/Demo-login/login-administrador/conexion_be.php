<?php
$conexion = mysqli_connect("localhost", "root", "", "registro_de_usuarios");

if (!$conexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}
?>
