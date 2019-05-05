<?php

include("../class/class-ubicaciones.php");
switch($_GET["accion"]){
    case 'listar':
     echo Ubicacion::obtenerUbicacion();
     break;
}

?>