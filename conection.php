<?php

$con = mysqli_connect("localhost", "root", "admin") or die("No se pudo conectar");
$database = mysqli_select_db($con, "ProyectoBDM") or die("No existe la base de datos");

?>
