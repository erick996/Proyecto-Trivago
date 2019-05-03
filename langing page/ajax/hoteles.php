<?php
   include("../class/class-hotel.php");
   switch ($_GET["accion"]) {
      case 'listar':
      echo Hotel::listar();
         break;
      
      case 'listaSeleccionada':
      echo Hotel::obtenerListas($_GET["codigoLocalizacion"]);
         break;

      case 'puntuacionSeleccionada':
      echo Hotel::obtenerPuntos($_GET["codigoCalificacion"]);
         break;


   }
   

?>