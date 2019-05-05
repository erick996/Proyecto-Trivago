<?php
include("../class/class-ubicacion.php");

switch ($_GET["accion"]) {
    case 'ubicacion':
        echo Ubicacion::obtenerUbicaciones();
        break;

    case 'listaSeleccionada':
        echo Ubicacion::hotelesSegunUbicaciones($_GET["codigoLocalizacion"]);
        break;
}
?>