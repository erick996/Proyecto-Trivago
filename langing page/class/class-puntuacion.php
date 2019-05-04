<?php

	class Puntuacion{

		private $codigoCalificacion ;
		private $calificacion;

		public function __construct($codigoCalificacion ,
					$calificacion){
			$this->codigoCalificacion  = $codigoCalificacion ;
			$this->calificacion = $calificacion;
		}
		public function getCodigoCalificacion (){
			return $this->codigoCalificacion ;
		}
		public function setCodigoCalificacion ($codigoCalificacion ){
			$this->codigoCalificacion  = $codigoCalificacion ;
		}
		public function getCalificacion(){
			return $this->calificacion;
		}
		public function setCalificacion($calificacion){
			$this->calificacion = $calificacion;
		}
		public function toString(){
			return "CodigoCalificacion : " . $this->codigoCalificacion  . 
				" Calificacion: " . $this->calificacion;
        }
    public static function obtenerCalificaciones(){
            return file_get_contents("../data/puntuaciones.json");
				}
		public static function obtenerPuntos($codigoCalificacion){
					$registros = json_decode(file_get_contents("../data/hoteles1.json"),true);
					$res = array();
					for ($i=0;$i<count($registros);$i++){
									if ($registros[$i]["codigoCalificacion"]==$codigoCalificacion){
													$res[] = $registros[$i];
									}
					}
					$registros = null;
					return json_encode($res);
			}
			

	}
?>