<?php
include("../class/class-puntuacion.php");

switch ($_GET["accion"]) {
    case 'puntos':
        echo Puntuacion::obtenerCalificaciones();
        break;

    case 'puntuacionSeleccionada':
        echo Puntuacion::obtenerPuntos($_GET["codigoCalificacion"]);
        break;
}
             
    
?>