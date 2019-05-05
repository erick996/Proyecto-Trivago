<?php
class Moneda{
    private $nombre;
    private $value;
    private $principal;


    public function __construct(
        $nombre,
        $value,
        $principal
    ){
        $this->nombre=$nombre;
        $this->value=$value;
        $this->principal=$principal;
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

    /**
     * Get the value of principal
     */ 
    public function getPrincipal()
    {
        return $this->principal;
    }

    /**
     * Set the value of principal
     *
     * @return  self
     */ 
    public function setPrincipal($principal)
    {
        $this->principal = $principal;

        return $this;
    }

    public static function obtenerMonedas(){

        return file_get_contents("../data/monedas.json");
    }
}

?>