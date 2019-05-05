<?php
   include("../class/class-hotel.php");
   switch ($_GET["accion"]) {
      case 'obtener':
      echo Hotel::obtenerHoteles();
         break;
   }
   

?>