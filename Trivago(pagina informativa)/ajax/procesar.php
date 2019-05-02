<?php

switch($_GET["accion"]){
    case "listar-monedas":
        $archivo=fopen('../data/monedas.json', 'r');
        $respuesta=array();
        while($linea=fgets($archivo)){
            $respuesta[]=json_decode($linea, true);
        };
        echo json_encode($respuesta);
        fclose($archivo);
    break;
    case "listar-topcities":
        $cities=fopen('../data/topcities.json', 'r');
        $respuestaCities=array();
        while($lineaC=fgets($cities)){
            $respuestaCities[]=json_decode($lineaC, true);
        };
        echo json_encode($respuestaCities);
        fclose($cities);
    break;
    case "listar-trivago-internacional":
        $internacional=fopen('../data/trivago-internacional.json', 'r');
        $respuestaInternacional=array();
        while($lineaI=fgets($internacional)){
            $respuestaInternacional[]=json_decode($lineaI, true);
        };
        echo json_encode($respuestaInternacional);
        fclose($internacional);
    break;
    case "listar-paises":
        $pais=fopen('../data/paises.json', 'r');
        $respuestaPais=array();
        while($lineaP=fgets($pais)){
            $respuestaPais[]=json_decode($lineaP, true);
        };
        echo json_encode($respuestaPais);
        fclose($pais);
    break;
}

?>