<?php

	class Estrella{

		private $codigoEstrella;
		private $estrellas;

		public function __construct($codigoEstrella,
					$estrellas){
			$this->codigoEstrella = $codigoEstrella;
			$this->estrellas = $estrellas;
		}
		public function getCodigoEstrella(){
			return $this->codigoEstrella;
		}
		public function setCodigoEstrella($codigoEstrella){
			$this->codigoEstrella = $codigoEstrella;
		}
		public function getEstrellas(){
			return $this->estrellas;
		}
		public function setEstrellas($estrellas){
			$this->estrellas = $estrellas;
		}
		public function toString(){
			return "CodigoEstrella: " . $this->codigoEstrella . 
				" Estrellas: " . $this->estrellas;
        }
        public static function numeroEstrellas(){
            return file_get_contents("../data/estrellas.json");
				}
        public static function obtenerEstrellas($codigoEstrella){
            $registros = json_decode(file_get_contents("../data/hoteles1.json"),true);
            $res = array();
            for ($i=0;$i<count($registros);$i++){
                            if ($registros[$i]["codigoEstrella"]==$codigoEstrella){
                                            $res[] = $registros[$i];
                            }
            }
            $registros = null;
            return json_encode($res);
    }
    


	}
?>