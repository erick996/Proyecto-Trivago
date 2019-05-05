<?php

	class Ubicacion{

		private $codigoLocalizacion;
		private $localizacion;

		public function __construct($codigoLocalizacion,
					$localizacion){
			$this->codigoLocalizacion = $codigoLocalizacion;
			$this->localizacion = $localizacion;
		}
		public function getCodigoLocalizacion(){
			return $this->codigoLocalizacion;
		}
		public function setCodigoLocalizacion($codigoLocalizacion){
			$this->codigoLocalizacion = $codigoLocalizacion;
		}
		public function getLocalizacion(){
			return $this->localizacion;
		}
		public function setLocalizacion($localizacion){
			$this->localizacion = $localizacion;
		}
        public static function obtenerUbicaciones(){
            return file_get_contents("../data/ubicaciones.json");
		}
		public static function hotelesSegunUbicaciones($codigoLocalizacion){
			$registros = json_decode(file_get_contents("../data/hoteles1.json"),true);
			$resultado = array();
			for ($i=0;$i<count($registros);$i++){
					if ($registros[$i]["codigoLocalizacion"]==$codigoLocalizacion){
							$resultado[] = $registros[$i];
					}
			}
			$registros = null;
			return json_encode($resultado);
	}


	}
?>