var informacion=[
    {destino:'Hoteles en Montreal',urlHotel:'img/Montreal.jpg',numeroHoteles:'15235 hoteles',prom:'$563'},
    {destino:'Hoteles en Roatan',urlHotel:'img/Roatán.jpg',numeroHoteles:'6235 hoteles',prom:'$800'},
    {destino:'Hoteles en La Ceiba',urlHotel:'img/LaCeiba.jpg',numeroHoteles:'8962 hoteles',prom:'$623'},
    {destino:'Hoteles en Lago de Yojoa',urlHotel:'img/LagoDeYojoa.jpg',numeroHoteles:'851 hoteles',prom:'$460'},
    {destino:'Hoteles en San Pedro Sula',urlHotel:'img/SPS.jpg',numeroHoteles:'3562 hoteles',prom:'$1025'},
    {destino:'Hoteles en Acapulco',urlHotel:'img/Acapulco.jpg',numeroHoteles:'24638 hoteles',prom:'$2089'},
    {destino:'Hoteles en San Francisco',urlHotel:'img/SanFrancisco.jpg',numeroHoteles:'5632 hoteles',prom:'$1589'}
];

function mostrarHoteles(){
        document.getElementById('destinations').innerHTML='';
        for (var i=0; i<4; i++){
            console.log('Mostrar Hoteles');
            document.getElementById('destinations').innerHTML += `<ul class="list-des">
            <li class="destinos">
                <a href="#" class="link-hoteles">
                    <div class="destinos-ciudades" style="background-image: url(${informacion[i].urlHotel});">
                    </div>
                    <div class="hoteles-en">${informacion[i].destino}</div>
                    <div class="hoteles-promos"> ${informacion[i].numeroHoteles} <strong>Prom.</strong> ${informacion[i].prom} </div>
                </a>
            </li>`;
        }
}

mostrarHoteles();