<?php

class Pais{
    private $nombre;
    private $value;

    public function __construct(
        $nombre,
        $value   
    ){
        $this->nombre=$nombre;
        $this->value=$value;
    }
    

        /**
         * Get the value of nombre
         */ 
        public function getNombre()
        {
                return $this->nombre;
        }

        /**
         * Set the value of nombre
         *
         * @return  self
         */ 
        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }

        /**
         * Get the value of value
         */ 
        public function getValue()
        {
                return $this->value;
        }

        /**
         * Set the value of value
         *
         * @return  self
         */ 
        public function setValue($value)
        {
                $this->value = $value;

                return $this;
        }

        public static function obtenerPaises(){
            return file_get_contents("../data/paises.json");
        }
}

?>