<?php

class TrivagoInternacional{
    private $nombre;

    public function __construct($nombre){
        $this->nombre=$nombre;
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

    public static function obtenerTrivagoInternacional(){
        return file_get_contents("../data/trivago-internacional.json");
    }
}

?>