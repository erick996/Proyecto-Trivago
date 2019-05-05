<?php

include("../class/class-monedas.php");
switch($_GET["accion"]){
    case 'listar':
        echo Moneda::obtenerMonedas();
    break;
}

?>