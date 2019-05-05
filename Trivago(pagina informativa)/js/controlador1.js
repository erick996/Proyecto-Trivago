var informacion=[
    {nombreHotel:"Grand Roatan Caribbean",img1:"img/imagen1.jpg", prom:'$244'},
    {nombreHotel:'Paradise Beach',img1:'img/imagen5.jpg',prom:'$163'},
    {nombreHotel:'Caribe Tesoro',img1:'img/imagen9.jpg',prom:'$182'},
    {nombreHotel:'Colonial',img1:'img/imagen13.jpg',prom:'$69'},
    {nombreHotel:'Cocolobo',img1:'img/imagen17.jpg',prom:'$135'},
    {nombreHotel:'Turtle Bay Eco Resort',img1:'img/imagen21.jpg',prom:'$235'}
];

var destacados=[
    {nombreHotel:"Cabanas Laru Beya",img1:"img/imagen25.jpg", prom:'$140'},
    {nombreHotel:'Coral Beach Village',img1:'img/imagen29.jpg',prom:'$335'},
    {nombreHotel:'La Utila',img1:'img/imagen33.jpg',prom:'$144'},
    {nombreHotel:'Barefoot Cay Resort & Spa',img1:'img/imagen37.jpg',prom:'$140'},
    {nombreHotel:'Reef House Resort',img1:'img/imagen24.jpg',prom:'$100'},
    {nombreHotel:'Caribe Tesoro',img1:'img/imagen9.jpg',prom:'$182'}
]

$(document).ready(function(){
    console.log("respuesta");
    // var aleatorio= Math.round(Math.random()*4);
    //  console.log(aleatorio);
    $.ajax({
        url:"ajax/ubicaciones.php?accion=listar",
        dataType:"json",
        success:function(respuesta2){
            var aleatorio= Math.round(Math.random()*respuesta2.length-1);
            console.log(aleatorio);
            $('#searchingbar').append(`<input type="text" placeholder="Ej.: ${respuesta2[aleatorio].localizacion}" class="search-bar search-bar-icon">
            <div id="essentials">
                            <div class="calendar">
                                <label class="uselessLabel" for="checkin"></label>
                                <input class="essentials" id="checkin" type="date" title="Seleccione fecha de registro" name="date"
                                    min="2018-12-01" max="2019-12-31" required>
                                <label class="uselessLabel" for="checkout"></label>
                                <input class="essentials" id="checkout" type="date" title="Selecione fecha de salida" name="date"
                                    min="2018-12-01" max="2019-12-31" required>
                            </div>
                            <div>
                                <label class="uselessLabel" for="rooms"></label>
                                <select class="essentials" name="rooms" id="rooms">
                                    <option value="single"> Habitacion individual</option>
                                    <option value="double"> Habitacion doble</option>
                                    <option value="family" selected>  Familiar</option>
                                </select>
                            </div>
                        </div>
                    <div class="search-btn">
                            <button type="button" class="buscar-btn">
                                <a href="http://localhost/trivago-poo/landingpage/" class="buscar-btn-anchor">Buscar</a>
                            </button>
                     </div>`);
        },
        error:function(error){
            console.log(error);
        }
    });
});

$(document).ready(function(){
    console.log('Obtener lista de monedas');
    $.ajax({
        url:'ajax/monedas.php?accion=listar',
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
        url:'ajax/topcities.php?accion=listar',
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
        url:'ajax/trivago-internacional.php?accion=listar',
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
        url:"ajax/paises.php?accion=listar",
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


$(document).ready(function(){
    $('#destinations-btn').append(`
                                <button  id="arrow-left" type="button" class="arrow-slider arrow-slider-unactive">
                                        <i class="fas fa-angle-left"></i>
                                </button>
                                <button id="dot-slider1" class="dot-slider dot-slider-active" type="button" onclick="slide1();" >
                                        <i class="fas fa-circle"></i>
                                </button>
                                <button id="dot-slider2" class="dot-slider" type="button" onclick="slide2();">
                                        <i class="fas fa-circle"></i>
                                </button>
                                <button id="dot-slider3" class="dot-slider" type="button" onclick="slide3();">
                                        <i class="fas fa-circle"></i>
                                </button>
                                <button  id="arrow-right" type="button" class="arrow-slider"  onclick="slide2();">
                                        <i class="fas fa-angle-right"></i>
                                </button>`)
});



$(document).ready(function(){
    $('#destacados-btn').append(`
                            <button  id="arrow-left-1" type="button" class="arrow-slider arrow-slider-unactive">
                                    <i class="fas fa-angle-left"></i>
                            </button>
                            <button id="dot-slider4" class="dot-slider dot-slider-active" type="button" onclick="slide4();" >
                                    <i class="fas fa-circle"></i>
                            </button>
                            <button id="dot-slider5" class="dot-slider" type="button" onclick="slide5();">
                                    <i class="fas fa-circle"></i>
                            </button>
                            <button id="dot-slider6" class="dot-slider" type="button" onclick="slide6();">
                                    <i class="fas fa-circle"></i>
                            </button>
                            <button  id="arrow-right-1" type="button" class="arrow-slider"  onclick="slide5();">
                                    <i class="fas fa-angle-right"></i>
                            </button>`)
});


 function mostrarHoteles(){
     document.getElementById('destinations').innerHTML='';
     for (var i=0; i<4; i++){
         console.log('Mostrar Hoteles');
         document.getElementById('destinations').innerHTML += `<ul class="list-des">
         <li class="destinos">
             <a href="#" class="link-hoteles">
                 <div class="destinos-ciudades" style="background-image: url(${informacion[i].img1});">
                 </div>
                 <div class="hoteles-en">${informacion[i].nombreHotel}<br>
                 <strong>Prom.</strong> ${destacados[i].prom}
                 </div>
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
                <div class="destinos-ciudades" style="background-image: url(${destacados[i].img1});">
                </div>
                <div class="hoteles-en">${destacados[i].nombreHotel}
                <br>
                <strong>Prom.</strong> ${destacados[i].prom}
                </div>
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
                    <div class="destinos-ciudades" style="background-image: url(${informacion[i].img1});">
                    </div>
                    <div class="hoteles-en">${informacion[i].nombreHotel}<br>
                    <strong>Prom.</strong> ${destacados[i].prom}
                    </div>
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
                    <div class="destinos-ciudades" style="background-image: url(${informacion[i].img1});">
                    </div>
                    <div class="hoteles-en">${informacion[i].nombreHotel}<br>
                    <strong>Prom.</strong> ${destacados[i].prom}
                    </div>
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
                    <div class="destinos-ciudades" style="background-image: url(${informacion[i].img1});">
                    </div>
                    <div class="hoteles-en">${informacion[i].nombreHotel}<br>
                    <strong>Prom.</strong> ${destacados[i].prom}
                    </div>
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
                    <div class="destinos-ciudades" style="background-image: url(${destacados[i].img1});">
                    </div>
                    <div class="hoteles-en">${destacados[i].nombreHotel}<br>
                    <strong>Prom.</strong> ${destacados[i].prom}
                    </div>
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
                    <div class="destinos-ciudades" style="background-image: url(${destacados[i].img1});">
                    </div>
                    <div class="hoteles-en">${destacados[i].nombreHotel}<br>
                    <strong>Prom.</strong> ${destacados[i].prom}
                    </div>
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
                    <div class="destinos-ciudades" style="background-image: url(${destacados[i].img1});">
                    </div>
                    <div class="hoteles-en">${destacados[i].nombreHotel}<br>
                    <strong>Prom.</strong> ${destacados[i].prom}
                    </div>
                </a>
            </li>`;
        }
}
mostrarHoteles1();
}