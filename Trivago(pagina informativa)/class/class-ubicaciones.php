<?php

class Ubicacion{
    private $codigoLocalizacion;
    private $localizacion;

    public function __construct(
        $codigoLocalizacion,
        $localizacion
    ){
        $this->codigoLocalizacion=$codigoLocalizacion;
        $this->localizacion=$localizacion;
    }

    

    /**
     * Get the value of codigoLocalizacion
     */ 
    public function getCodigoLocalizacion()
    {
        return $this->codigoLocalizacion;
    }

    /**
     * Set the value of codigoLocalizacion
     *
     * @return  self
     */ 
    public function setCodigoLocalizacion($codigoLocalizacion)
    {
        $this->codigoLocalizacion = $codigoLocalizacion;

        return $this;
    }

    /**
     * Get the value of localizacion
     */ 
    public function getLocalizacion()
    {
        return $this->localizacion;
    }

    /**
     * Set the value of localizacion
     *
     * @return  self
     */ 
    public function setLocalizacion($localizacion)
    {
        $this->localizacion = $localizacion;

        return $this;
    }

    public static function obtenerUbicacion(){
        return file_get_contents("../data/ubicaciones.json");
    }
}

?>