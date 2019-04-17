<?php
class Hotel{
    private $codigoHotel;
    private $nombreHotel;
    private $img1;
    private $img2;
    private $img3;
    private $img4;
    private $tipo;
    private $localizacion;
    private $calificacionNumerica;
    private $calificacion;
    private $opiniones;
    private $calificacionTotal;
    private $agencia1;
    private $precio1;
    private $agencia2;
    private $precio2;
    private $agencia3;
    private $precio3;
    private $masOfertas;

    public function __construct(
       $codigoHotel,
       $nombreHotel,
       $img1,
       $img2,
       $img3,
       $img4,
       $tipo,
       $localizacion,
       $calificacionNumerica,
       $calificacion,
       $opiniones,
       $calificacionTotal,
       $agencia1,
       $precio1,
       $agencia2,
       $precio2,
       $agencia3,
       $precio3,
       $masOfertas
    ){
       $this->codigoHotel = $codigoHotel;
       $this->nombreHotel = $nombreHotel;
       $this->img1 = $img1;
       $this->img2 = $img2;
       $this->img3 = $img3;
       $this->img4 = $img4;
       $this->tipo = $tipo;
       $this->localizacion = $localizacion;
       $this->calificacionNumerica = $calificacionNumerica;
       $this->calificacion = $calificacion;
       $this->opiniones = $opiniones;
       $this->calificacionTotal = $calificacionTotal;
       $this->agencia1 = $agencia1;
       $this->precio1 = $precio1;
       $this->agencia2 = $agencia2;
       $this->precio2 = $precio2;
       $this->agencia3 = $agencia3;
       $this->precio3 = $precio3;
       $this->masOfertas = $masOfertas;

    }
    public function getCodigoHotel(){
        return $this->codigoHotel       ;
    }
    public function setCodigoHotel       ($codigoHotel       ){
        $this->codigoHotel        = $codigoHotel       ;
    }
    public function getNombreHotel(){
        return $this->nombreHotel;
    }
    public function setNombreHotel($nombreHotel){
        $this->nombreHotel = $nombreHotel;
    }
    public function getImg1(){
        return $this->img1;
    }
    public function setImg1($img1){
        $this->img1 = $img1;
    }
    public function getImg2(){
        return $this->img2;
    }
    public function setImg2($img2){
        $this->img2 = $img2;
    }
    public function getImg3(){
        return $this->img3;
    }
    public function setImg3($img3){
        $this->img3 = $img3;
    }
    public function getImg4(){
        return $this->img4;
    }
    public function setImg4($img4){
        $this->img4 = $img4;
    }
    public function getTipo(){
        return $this->tipo;
    }
    public function setTipo($tipo){
        $this->tipo = $tipo;
    }
    public function getLocalizacion(){
        return $this->localizacion;
    }
    public function setLocalizacion($localizacion){
        $this->localizacion = $localizacion;
    }
    public function getCalificacionNumerica(){
        return $this->calificacionNumerica;
    }
    public function setCalificacionNumerica($calificacionNumerica){
        $this->calificacionNumerica = $calificacionNumerica;
    }
    public function getCalificacion(){
        return $this->calificacion;
    }
    public function setCalificacion($calificacion){
        $this->calificacion = $calificacion;
    }
    public function getOpiniones(){
        return $this->opiniones;
    }
    public function setOpiniones($opiniones){
        $this->opiniones = $opiniones;
    }
    public function getCalificacionTotal(){
        return $this->calificacionTotal;
    }
    public function setCalificacionTotal($calificacionTotal){
        $this->calificacionTotal = $calificacionTotal;
    }
    public function getAgencia1(){
        return $this->agencia1;
    }
    public function setAgencia1($agencia1){
        $this->agencia1 = $agencia1;
    }
    public function getPrecio1(){
        return $this->precio1;
    }
    public function setPrecio1($precio1){
        $this->precio1 = $precio1;
    }
    public function getAgencia2(){
        return $this->agencia2;
    }
    public function setAgencia2($agencia2){
        $this->agencia2 = $agencia2;
    }
    public function getPrecio2(){
        return $this->precio2;
    }
    public function setPrecio2($precio2){
        $this->precio2 = $precio2;
    }
    public function getAgencia3(){
        return $this->agencia3;
    }
    public function setAgencia3($agencia3){
        $this->agencia3 = $agencia3;
    }
    public function getPrecio3(){
        return $this->precio3;
    }
    public function setPrecio3($precio3){
        $this->precio3 = $precio3;
    }
    public function getMasOfertas(){
        return $this->masOfertas;
    }
    public function setMasOfertas($masOfertas){
        $this->masOfertas = $masOfertas;
    }
    

    public static function listar(){
        $archivo = fopen("../data/hoteles.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
            $respuesta[] = json_decode($linea,true); 
        }
        fclose($archivo);
        return json_encode($respuesta);
    }
    
}

?>