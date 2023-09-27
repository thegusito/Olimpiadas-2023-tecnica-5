<?php
include 'conexion_be.php';

$cuildni = $_POST['cuildni'];
$contrasena = $_POST['contrasena'];

// Utiliza una consulta parametrizada
$query = "SELECT * FROM `registro_medicos` WHERE cuildni = ? AND contrasena = ?";
$stmt = mysqli_prepare($conexion, $query);

if ($stmt) {
    mysqli_stmt_bind_param($stmt, "ss", $cuildni, $contrasena);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    //cambiar acá para ir a otra pagina
    if (mysqli_stmt_num_rows($stmt) > 0) {
        header("Location: ../../demomedical");
        exit;
    //-------------------------------------------------------------------------------------//

    } else {
        echo '
            <script>
            alert("Usuario no existe, por favor verifique los datos introducidos");
            window.location = "login-user.php";
            </script>
        ';
    }
    mysqli_stmt_close($stmt);
} else {
    die("Error en la consulta: " . mysqli_error($conexion));
}

exit;
?>
