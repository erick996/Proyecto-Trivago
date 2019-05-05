<?php

include("../class/class-paises.php");
switch($_GET["accion"]){
    case 'listar':
    echo Pais::obtenerPaises();
    break;
}

?>