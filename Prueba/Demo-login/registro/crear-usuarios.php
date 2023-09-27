<!DOCTYPE html>
<html lang="en">
<head>
    <title>Registrar usuario</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../assets/crear-usuario-style.css">
</head>
<body>
    <section>
        <div class="form-box">
            <div class="form-value">       
                <form method="post">    
           
                    <h2 class="h2">Registrar medicos</h2>
            
                    <div class="inputbox">
                        <input type="email" name="email" placeholder="Email" required>
                    </div>

                    <div class="inputbox">       
                        <input type="text" name="cuildni" placeholder="Dni sin puntos/espacios" required>
                    </div>

                    <div class="inputbox">
                        <input type="password" name="contrasena" placeholder="Contraseña" required>
                    </div>
            
                    <div class="inputbox-submit">
                        <input class="button" type="submit" name="register">
                    </div>

                    <div class="register">
                        <p>¿Ya tenes usuario?<a href="../login-administrador/login-admin.php"> Click Aqui</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <?php 
        include("registrar.php");
    ?>
</body>
</html>