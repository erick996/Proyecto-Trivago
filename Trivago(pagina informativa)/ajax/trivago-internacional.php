<?php
include("../class/class-trivago-internacional.php");
switch($_GET["accion"]){
    case 'listar';
    echo TrivagoInternacional::obtenerTrivagoInternacional();
    break;
}

?>