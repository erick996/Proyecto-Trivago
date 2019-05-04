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

	}
?>