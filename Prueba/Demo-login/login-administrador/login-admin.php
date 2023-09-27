<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/login-admin.css">
    <title>Iniciar Sesión</title>
</head>
<body>
    <section>
        <div class="form-box">
            <div class="form-value">
                <form action="loginadmin_be.php" method="POST">
                    
                    <h2>Inicio de Sesión</h2>
                    <h2>Administradores</h2>
            
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
                        <p>¿No recuerdas tu contraseña?<a href="#"> Click Aqui</a></p>
                    </div>
            
                </form>
            </div>
        </div>
    </section>
</body>
</html>
