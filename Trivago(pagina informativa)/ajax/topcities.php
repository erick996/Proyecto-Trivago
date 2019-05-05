<?php
include("../class/class-topcities.php");
switch($_GET["accion"]){
    case 'listar':
    echo TopCities::obtenerTopCities();
    break;
}

?>