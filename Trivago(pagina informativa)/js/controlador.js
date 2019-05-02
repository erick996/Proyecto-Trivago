var informacion=[
    {destino:'Hoteles en Montrea',urlHotel:'img/Montreal.jpg',numeroHoteles:'15235 hoteles',prom:'$563'},
    {destino:'Hoteles en Roatan',urlHotel:'img/Roatán.jpg',numeroHoteles:'6235 hoteles',prom:'$800'},
    {destino:'Hoteles en La Ceiba',urlHotel:'img/LaCeiba.jpg',numeroHoteles:'8962 hoteles',prom:'$623'},
    {destino:'Hoteles en Lago de Yojoa',urlHotel:'img/LagoDeYojoa.jpg',numeroHoteles:'851 hoteles',prom:'$460'},
    {destino:'Hoteles en San Pedro Sula',urlHotel:'img/SPS.jpg',numeroHoteles:'3562 hoteles',prom:'$1025'},
    {destino:'Hoteles en Acapulco',urlHotel:'img/Acapulco.jpg',numeroHoteles:'24638 hoteles',prom:'$2089'}
];

var destacados=[
    {destino:'Hoteles en Sydney',urlHotel:'img/Sydney.jpg',numeroHoteles:'15235 hoteles',prom:'$1963'},
    {destino:'Hoteles en India',urlHotel:'img/TajMahal.jpg',numeroHoteles:'16235 hoteles',prom:'$1895'},
    {destino:'Hoteles en Sudáfrica',urlHotel:'img/SouthAfrica.jpg',numeroHoteles:'8972 hoteles',prom:'$1823'},
    {destino:'Hoteles en Roma',urlHotel:'img/Roma.jpg',numeroHoteles:'2851 hoteles',prom:'$2460'},
    {destino:'Hoteles en Rio de Janeiro',urlHotel:'img/RioDeJaneiro.jpg',numeroHoteles:'3962 hoteles',prom:'$1925'},
    {destino:'Hoteles en San Francisco',urlHotel:'img/SanFrancisco.jpg',numeroHoteles:'6632 hoteles',prom:'$1549'}
]

$(document).ready(function(){
    console.log('Obtener lista de monedas');
    $.ajax({
        url:'ajax/procesar.php?accion=listar-monedas',
        dataType:'json',
        success:function(respuesta){
            console.log('respuesta');
            for(var i=0; i<respuesta.length; i++){
                if(respuesta[i].principal=='true' && respuesta[i].value!="USD"){
                    $('#moneda-principal').append(`
                    <option class="option" value="${respuesta[i].value}">${respuesta[i].nombre}</option>`);
                } else if(respuesta[i].principal=='true' && respuesta[i].value=="USD"){
                    $('#moneda-principal').append(`
                    <option class="option" value="${respuesta[i].value}" selected>${respuesta[i].nombre}</option>`);}
                    else {
                    $('#todas-monedas').append(`<option class="option" value="${respuesta[i].value}">${respuesta[i].nombre}</option>
                    `);
                };

            }
        },
        error:function(error){
            console.log(error);
        }
    });
});

$(document).ready(function(){
    console.log('Obtener lista de ciudades');
    $.ajax({
        url:'ajax/procesar.php?accion=listar-topcities',
        dataType:'json',
        success:function(respuestaCities){
            console.log('respuesta');
            for(var i=0; i<respuestaCities.length; i++){
                $('#top-cities').append(`
                <li class="cities"><a class="link-cities" href="#">${respuestaCities[i].nombre}</a></li>`);
            };
        },
        error:function(error){
            console.log(error);
        }
    });
});

$(document).ready(function(){
    console.log("Obtener trivago internacional");
    $.ajax({
        url:'ajax/procesar.php?accion=listar-trivago-internacional',
        dataType:'json',
        success:function(respuestaInternacional){
            for(var i=0; i<respuestaInternacional.length; i++){
                $('#trivago-internacional').append(`
                <li class="internacional"><a href="#" class="link-trivago-inter">${respuestaInternacional[i].nombre}</a></li>`);
            };
        },
        error:function(error){
            console.log(error);
        }
    });
});

$(document).ready(function(){
    console.log("Obtener países");
    $.ajax({
        url:"ajax/procesar.php?accion=listar-paises",
        dataType: 'json',
        success:function(respuestaPais){
            for(var i=0; i<respuestaPais.length; i++){
                if(respuestaPais[i].value=="us"){
                    $("#select-country").append(`
                    <option value="${respuestaPais[i].value}" class="country-options" selected>${respuestaPais[i].nombre}</option>`);
                }
                else{
                    $("#select-country").append(`
                    <option value="${respuestaPais[i].value}" class="country-options">${respuestaPais[i].nombre}</option>`);
                };
            }
        }
    });
});



$('#idioma-btn').click(function(){
    $('#idioma-option').toggle();

});


function mostrarHoteles(){
    document.getElementsByClassName('destinations').innerHTML='';
    for (var i=0; i<3; i++){
        console.log('Mostrar Hoteles');
        document.getElementsByClassName('destinations').innerHTML += `<ul class="list-des">
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

function mostrarHoteles1(){
    document.getElementById('destacados').innerHTML='';
    for (var i=0; i<4; i++){
        console.log('Mostrar Hoteles 1');
        document.getElementById('destacados').innerHTML += `<ul class="list-des">
        <li class="destinos">
            <a href="#" class="link-hoteles">
                <div class="destinos-ciudades" style="background-image: url(${destacados[i].urlHotel});">
                </div>
                <div class="hoteles-en">${destacados[i].destino}</div>
                <div class="hoteles-promos"> ${destacados[i].numeroHoteles} <strong>Prom.</strong> ${destacados[i].prom} </div>
            </a>
        </li>`;
    }
}
mostrarHoteles1();

$('#tabbtn').click(function(){
    $('#destinations').removeAttr('style');
    $('#destinations').css('display', 'block');
    $('#destacados').css('display', 'none');
    $('#destinations-btn').removeAttr('style');
    $('#destinations-btn').css('display', 'block');
    $('#destacados-btn').css('display', 'none');
    $('#tabbtn').removeClass("btn-list-active");
    $('#tabbtn1').removeClass("btn-list-active");
    $('#tabbtn').addClass("btn-list-active");
});

$('#tabbtn1').click(function(){
    $('#destacados').removeAttr('style');
    $('#destacados').css('display', 'block');
    $('#destinations').css('display', 'none');
    $('#destacados-btn').removeAttr('style');
    $('#destacados-btn').css('display', 'block');
    $('#destinations-btn').css('display', 'none');
    $('#tabbtn').removeClass("btn-list-active");
    $('#tabbtn1').removeClass("btn-list-active");
    $('#tabbtn1').addClass("btn-list-active");
}); 

function slide1(){
    document.getElementById('dot-slider2').classList.remove('dot-slider-active');
    document.getElementById('dot-slider3').classList.remove('dot-slider-active');
    document.getElementById('arrow-right').classList.remove('arrow-slider-unactive')
    document.getElementById('arrow-left').classList.add('arrow-slider-unactive');
    document.getElementById('dot-slider1').classList.add('dot-slider-active');
    document.getElementById('arrow-right').removeAttribute('onclick', 'slide3()');
    document.getElementById('arrow-right').setAttribute('onclick', 'slide2()');
    function mostrarHoteles(){
        document.getElementById('destinations').innerHTML='';
        for (var i=0; i<4; i++){
            console.log('Mostrar Hoteles');
            document.getElementById('destinations').innerHTML += `<ul class="list-des" style="transition: webkit-transition .4s ease-in-out">
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
}


function slide2(){
    document.getElementById('dot-slider1').classList.remove('dot-slider-active');
    document.getElementById('dot-slider3').classList.remove('dot-slider-active');
    document.getElementById('arrow-right').classList.remove('arrow-slider-unactive')
    document.getElementById('arrow-left').classList.remove('arrow-slider-unactive');
    document.getElementById('dot-slider2').classList.add('dot-slider-active');
    document.getElementById('arrow-left').removeAttribute('onclick', 'slide1()');
    document.getElementById('arrow-right').removeAttribute('onclick', 'slide2()');
    document.getElementById('arrow-right').setAttribute('onclick', 'slide3()');
    document.getElementById('arrow-left').setAttribute('onclick', 'slide1()');
    function mostrarHoteles(){
        document.getElementById('destinations').innerHTML='';
        for (var i=1; i<5; i++){
            console.log('Mostrar Hoteles');
            document.getElementById('destinations').innerHTML += `<ul class="list-des" style="transition: transform .4s ease-in-out">
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
}

function slide3(){
    document.getElementById('dot-slider1').classList.remove('dot-slider-active');
    document.getElementById('dot-slider2').classList.remove('dot-slider-active');
    document.getElementById('arrow-right').classList.add('arrow-slider-unactive')
    document.getElementById('arrow-left').classList.remove('arrow-slider-unactive');
    document.getElementById('dot-slider3').classList.add('dot-slider-active');
    document.getElementById('arrow-left').removeAttribute('onclick', 'slide1()');
    document.getElementById('arrow-right').removeAttribute('onclick', 'slide3()');
    document.getElementById('arrow-left').setAttribute('onclick', 'slide2()');
    function mostrarHoteles(){
        document.getElementById('destinations').innerHTML='';
        for (var i=2; i<6; i++){
            console.log('Mostrar Hoteles');
            document.getElementById('destinations').innerHTML += `<ul class="list-des" style="transition: -webkit-transition .4s ease-in-out">
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
}

function slide4(){
    document.getElementById('dot-slider5').classList.remove('dot-slider-active');
    document.getElementById('dot-slider6').classList.remove('dot-slider-active');
    document.getElementById('arrow-right-1').classList.remove('arrow-slider-unactive')
    document.getElementById('arrow-left-1').classList.add('arrow-slider-unactive');
    document.getElementById('dot-slider4').classList.add('dot-slider-active');
    document.getElementById('arrow-right-1').removeAttribute('onclick', 'slide6()');
    document.getElementById('arrow-right-1').setAttribute('onclick', 'slide5()');
    function mostrarHoteles1(){
        document.getElementById('destacados').innerHTML='';
        for (var i=0; i<4; i++){
            console.log('Mostrar Hoteles 1');
            document.getElementById('destacados').innerHTML += `<ul class="list-des" style="transition: webkit-transition .4s ease-in-out">
            <li class="destinos">
                <a href="#" class="link-hoteles">
                    <div class="destinos-ciudades" style="background-image: url(${destacados[i].urlHotel});">
                    </div>
                    <div class="hoteles-en">${destacados[i].destino}</div>
                    <div class="hoteles-promos"> ${destacados[i].numeroHoteles} <strong>Prom.</strong> ${destacados[i].prom} </div>
                </a>
            </li>`;
        }
}
mostrarHoteles1();
}


function slide5(){
    document.getElementById('dot-slider4').classList.remove('dot-slider-active');
    document.getElementById('dot-slider6').classList.remove('dot-slider-active');
    document.getElementById('arrow-right-1').classList.remove('arrow-slider-unactive')
    document.getElementById('arrow-left-1').classList.remove('arrow-slider-unactive');
    document.getElementById('dot-slider5').classList.add('dot-slider-active');
    document.getElementById('arrow-left-1').removeAttribute('onclick', 'slide4()');
    document.getElementById('arrow-right-1').removeAttribute('onclick', 'slide5()');
    document.getElementById('arrow-right-1').setAttribute('onclick', 'slide6()');
    document.getElementById('arrow-left-1').setAttribute('onclick', 'slide4()');
    function mostrarHoteles1(){
        document.getElementById('destacados').innerHTML='';
        for (var i=1; i<5; i++){
            console.log('Mostrar Hoteles 1');
            document.getElementById('destacados').innerHTML += `<ul class="list-des" style="transition: transform .4s ease-in-out">
            <li class="destinos">
                <a href="#" class="link-hoteles">
                    <div class="destinos-ciudades" style="background-image: url(${destacados[i].urlHotel});">
                    </div>
                    <div class="hoteles-en">${destacados[i].destino}</div>
                    <div class="hoteles-promos"> ${destacados[i].numeroHoteles} <strong>Prom.</strong> ${destacados[i].prom} </div>
                </a>
            </li>`;
        }
}
mostrarHoteles1();
}

function slide6(){
    document.getElementById('dot-slider4').classList.remove('dot-slider-active');
    document.getElementById('dot-slider5').classList.remove('dot-slider-active');
    document.getElementById('arrow-right-1').classList.add('arrow-slider-unactive')
    document.getElementById('arrow-left-1').classList.remove('arrow-slider-unactive');
    document.getElementById('dot-slider6').classList.add('dot-slider-active');
    document.getElementById('arrow-left-1').removeAttribute('onclick', 'slide4()');
    document.getElementById('arrow-right-1').removeAttribute('onclick', 'slide6()');
    document.getElementById('arrow-left-1').setAttribute('onclick', 'slide5()');
    function mostrarHoteles1(){
        document.getElementById('destacados').innerHTML='';
        for (var i=2; i<6; i++){
            console.log('Mostrar Hoteles 1');
            document.getElementById('destacados').innerHTML += `<ul class="list-des" style="transition: -webkit-transition .4s ease-in-out">
            <li class="destinos">
                <a href="#" class="link-hoteles">
                    <div class="destinos-ciudades" style="background-image: url(${destacados[i].urlHotel});">
                    </div>
                    <div class="hoteles-en">${destacados[i].destino}</div>
                    <div class="hoteles-promos"> ${destacados[i].numeroHoteles} <strong>Prom.</strong> ${destacados[i].prom} </div>
                </a>
            </li>`;
        }
}
mostrarHoteles1();
}