<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ingreso de datos</title>
    <link rel="stylesheet" href="assets/Ingreso-datos.css">
</head>
<body>
     <section>
        <div class="form-box">
            <div class="form-value">       
                <form method="post">    
           
                    <h2 class="h2">Registro de Formularios</h2>
            
                    <div class="inputbox">
                        <input type="text" name="nombre_del_paciente" placeholder="Ingrese el nombre del paciente" required>
                    </div>

                    <div class="inputbox">       
                        <input type="text" name="hora_ingreso" placeholder="Hora de ingreso" required>
                    </div>

                    <div class="inputbox">
                        <input type="text" name="motivo_de_ingreso" placeholder="Motivo de ingreso" required>
                    </div>

                    <div class="inputbox">
                        <input type="text" name="informe" placeholder="Escriba el informe de lo sucedido" required>
                    </div>
            
                    <div class="inputbox-submit">
                        <input class="button" type="submit" name="register">
                    </div>

                </form>
            </div>
        </div>
    </section>
    <?php 
    include("ingreso-de-datos.php");
?>
    
</body>
</html>