<?php include('../core/header.php'); ?>

<!-- AQUI VA LOGIN -->

<P>AQUI VA EL LOGIN</P>
<div class="container">
    <div class="row">
        <div class="col-xs-6">
            <div class="log-head">
                <div class="row">
                    <div class="col-xs-6">
                        <a href="#">Iniciar Sesión</a>
                    </div>
                    <div class="col-xs-6">
                        <a href="#">Registrarse</a>
                    </div>
                </div>
                <div class="log-body">
                    <div class="row">
                        <div class="col-xs-12">
                            <form action="#" method="post">
                                <input type="text" name="user" placeholder="Usuario" required>
                                <input type="password" name="pass" placeholder="Contraseña" required>
                                <input type="submit" value="Ingresar">
                            </form>
                            <form action="#" method="post">
                                <input type="text"  name="user" placeholder="Usuario" required>
                                <input type="email" name="email"placeholder="Correo Electronico" required>
                                <input type="password" name="pass" placeholder="Contraseña" required>
                                <input type="password" name="repeatpass" placeholder="Confirmar Contraseña" required>
                                <input type="submit" value="Crear Cuenta">
                            </form>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</div>


<?php include('../core/footer.php'); ?>
