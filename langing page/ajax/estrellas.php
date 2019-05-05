<?php
   include("../class/class-estrella.php");
   switch ($_GET["accion"]) {
      case 'estrella':
      echo Estrella::numeroEstrellas();
         break;

      case 'estrellaSeleccionada':
      echo Estrella::obtenerEstrellas($_GET["codigoEstrella"]);
         break;
   

   }
   

?>