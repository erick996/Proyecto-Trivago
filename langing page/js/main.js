$(document).ready(function() {
    $.ajax({
        url:"ajax/hoteles.php?accion=listar",
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
            var x=1;
            for(var i=0;i<respuesta.length;i++){
                $("#hotels").append(` <div class="hotel">
                <section class="hotelBasic">
                    <div id="carousel${x}" class="carousel slide carousel-fade" data-interval="false" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100 image" src="${respuesta[i].img1}" alt="Hotel Paradise Beach">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 image" src="${respuesta[i].img2}" alt="Hotel Paradise Beach">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 image" src="${respuesta[i].img3}" alt="Hotel Paradise Beach">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 image" src="${respuesta[i].img4}" alt="Hotel Paradise Beach">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel${x}" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel${x}" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <span class="heart">🖤</span>
                    <span class="range">1 / 4</span>
                    <section class="hotelInfo">
                        <span class="hotelName">${respuesta[i].nombreHotel}</span>
                        <span class="stars">⭐⭐⭐⭐⭐ <span class="hotelText">${respuesta[i].tipo}</span></span>
                        <span class="hotelLocation">${respuesta[i].localizacion}</span>
                        <span class="rates"><span class="rateNumber">${respuesta[i].calificacionNumerica}</span><span
                                class="rateText">${respuesta[i].calificacion}</span><span class="reviewsCount">${respuesta[i].opiniones}</span></span>
                        <span class="rateExtra">${respuesta[i].calificacionTotal}</span>
                    </section>
                </section>
                <section class="hotelOther">
                    <div class="offer btn btn-primary">
                        <span class="site">${respuesta[i].agencia1}</span><br />
                        <span class="otherSitePrice">${respuesta[i].precio1}</span>
                    </div>
                    <div class="offer btn btn-primary">
                        <span class="site">${respuesta[i].agencia2}</span><br />
                        <span class="otherSitePrice">${respuesta[i].precio2}</span>
                    </div>
                    <div class="offer btn btn-primary">
                        <span class="site">${respuesta[i].agencia3}</span><br />
                        <span class="otherSitePrice">${respuesta[i].precio3}</span>
                    </div>
                    <div class="moreDeals btn btn-primary">
                        <span class="moreDealsText">${respuesta[i].masOfertas}</span>
                    </div>
                </section>
                <section class="hotelFinal">
                    <div class="previousExpensive">
                        <div class="previousExpensiveSite">${respuesta[i].agencia1}</div>
                        <div class="previousExpensivePrice">${respuesta[i].precio1}</div>
                    </div>
                    <div class="websiteOffer">
                        <div class="websiteOfferHotel">${respuesta[i].agencia2}</div>
                        <div class="websiteOfferPrice">${respuesta[i].precio2}</div>
                        <span class="nights">1 noche por <span class="nightsPrice">${respuesta[i].precio1}</span></span>
                        <button class="breakfast btn btn-primary">Desayuno gratis</button>
                    </div>
                    <section class="deal">
                        <a href="#"><button class="viewDeal btn btn-primary" title="Ver oferta">Ver oferta</button></a>
                    </section>
                </section>
            </div>`);
            var x=x+1;
            
              // Define search variable
    const search = $("#search");

    // Remove previous search value when focus
    search.focus(function() {
        $(this).val('');
    });

    // Define dates and number of dates
    const checkin = $("#checkin");
    const checkout = $("#checkout");

    // Change rates based on days
    function today() {
        let now = new Date();
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);
        let today = now.getFullYear() + "-" + (month) + "-" + (day);
        checkin.val(today);
    }

    function tomorrow() {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let month = "0" + (tomorrow.getMonth() + 1);
        let date = "0" + tomorrow.getDate();
        month = month.slice(-2);
        date = date.slice(-2);
        checkout.val(tomorrow.getFullYear() + "-" + month + "-" + date);
    }

    today();
    tomorrow();
let days;

    function rates() {
        let date1 = new Date(checkin.val());
        let date2 = new Date(checkout.val());
        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        days = Math.ceil(timeDiff / (1000 * 3600 * 24));
        let toChange = $(".otherSitePrice").html().replace(/[$,\s]/g, '');
        let nightsCount = toChange * days;
        if (days === 1) { // To properly print "night" or "nights"
            $(".websiteOfferHotel").html(`${$(".site").html()}`);
            $(".websiteOfferPrice").html(`$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
            $(".nights").html(`${days} night for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>`);
        } else {
            $(".websiteOfferHotel").html(`${$(".site").html()}`);
            $(".websiteOfferPrice").html(`$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
            $(".nights").html(`${days} nights for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>`);
        }
    }

    rates();

    checkin.change(() => {
        let nextDay = new Date(checkin.val());
        nextDay.setDate(nextDay.getDate() + 1);
        let month = "0" + (nextDay.getMonth() + 1);
        let date = "0" + nextDay.getDate();
        month = month.slice(-2);
        date = date.slice(-2);
        checkout.val(nextDay.getFullYear() + "-" + month + "-" + date);
        rates();
    });

    checkout.change(() => {
        rates();
    });

    
    // Price slider "revitalization"
    const rangeFrom = $("#price");
    const rangeTo = $(".maxPrice");
    rangeTo.html(rangeFrom.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")); // Print initial price before sliding
    rangeFrom.on("input", function() {
        rangeTo.html(rangeFrom.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    });

    // Images counter "revitalization"
    $(".carousel-control-next").click(function() {
        let range = parseInt($(this).parent().next().next(".range").html()[0]);
        let final = range + 1;
        $(this).parent().next().next(".range").html(final.toString() + ' / 4');
        if (final > 4) {
            final = 1;
            $(this).parent().next().next(".range").html(final.toString() + ' / 4');
        }
    });

    $(".carousel-control-prev").click(function() {
        let range = parseInt($(this).parent().next().next(".range").html()[0]);
        let final = range - 1;
        $(this).parent().next().next(".range").html(final.toString() + ' / 4');
        if (final < 1) {
            final = 4;
            $(this).parent().next().next(".range").html(final.toString() + ' / 4');
        }
    });

    // What happens when clicking on offers
    const offer = $(".offer");
    const moreDeals = $(".moreDeals");

    function clearOtherOffers() {
        offer.removeClass("offerPressed");
        offer.children(".site").removeClass("site1");
        offer.children(".otherSitePrice").removeClass("otherSitePrice1");
        moreDeals.removeClass("moreDealsPressed");
        moreDeals.children(".moreDealsText").removeClass("site1");
    }

    offer.click(function() {
        clearOtherOffers();
        let toChange = $(this).children(".otherSitePrice").html().replace(/[$,\s]/g, '');
        let nightsCount = toChange * days;
        $(this).addClass("offerPressed");
        $(this).children(".site").addClass("site1");
        $(this).children(".otherSitePrice").addClass("otherSitePrice1");
        if (days === 1) { // To properly print "night" or "nights"
            if ($(this).parent().next().children(".websiteOffer").children().hasClass("breakfast")) {
                $(this).parent().next().children(".websiteOffer").empty().append(
                    `<div class="websiteOfferHotel">${$(this).children(".site").html()}</div>
        <div class="websiteOfferPrice">$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span class="nights">${days} night for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>
        <button class="breakfast btn btn-primary">Free breakfast</button>`
                );
            } else {
                $(this).parent().next().children(".websiteOffer").empty().append(
                    `<div class="websiteOfferHotel">${$(this).children(".site").html()}</div>
        <div class="websiteOfferPrice">$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span class="nights">${days} night for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>`
                );
            }
        } else {
            if ($(this).parent().next().children(".websiteOffer").children().hasClass("breakfast")) {
                $(this).parent().next().children(".websiteOffer").empty().append(
                    `<div class="websiteOfferHotel">${$(this).children(".site").html()}</div>
        <div class="websiteOfferPrice">$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span class="nights">${days} nights for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>
        <button class="breakfast btn btn-primary">Free breakfast</button>`
                );
            } else {
                $(this).parent().next().children(".websiteOffer").empty().append(
                    `<div class="websiteOfferHotel">${$(this).children(".site").html()}</div>
        <div class="websiteOfferPrice">$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span class="nights">${days} nights for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>`
                );
            }
        }
    });

    moreDeals.click(function() {
        clearOtherOffers();
        $(this).addClass("moreDealsPressed");
        $(this).children(".moreDealsText").addClass("site1");
    });
            }
            console.log(x);
        },
        error:function(error){
            console.log(error);
        }
    });

    $.ajax({
		url:"ajax/ubicaciones.php",
		dataType:"json",
		success:function(respuesta){
			console.log(respuesta);
			for(var i=0;i<respuesta.length;i++){
				$("#location").append(`<option value="${respuesta[i].codigoLocalizacion}">${respuesta[i].localizacion}</option>`);
				$("#location").val(null);
			}
		},
		error:function(error){
			console.error(error);
		}
	});


    
});

$("#location").change(function(){
	console.log('Peticion AJAX para obtener la listas de '+$("#location").val());
	$("#hotels").html("");
	$.ajax({
		url:"ajax/hoteles.php?accion=listaSeleccionada&codigoLocalizacion="+$("#location").val(),
		dataType:"json",
		success:function(respuesta){
            console.log(respuesta);
            var x=1;
			for(var i=0;i<respuesta.length;i++){
				$("#hotels").append(`
				<div class="hotel">
                <section class="hotelBasic">
                    <div id="carousel${x}" class="carousel slide carousel-fade" data-interval="false" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100 image" src="${respuesta[i].img1}" alt="Hotel Paradise Beach">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 image" src="${respuesta[i].img2}" alt="Hotel Paradise Beach">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 image" src="${respuesta[i].img3}" alt="Hotel Paradise Beach">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 image" src="${respuesta[i].img4}" alt="Hotel Paradise Beach">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel${x}" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel${x}" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <span class="heart">🖤</span>
                    <span class="range">1 / 4</span>
                    <section class="hotelInfo">
                        <span class="hotelName">${respuesta[i].nombreHotel}</span>
                        <span class="stars">⭐⭐⭐⭐⭐ <span class="hotelText">${respuesta[i].tipo}</span></span>
                        <span class="hotelLocation">${respuesta[i].localizacion}</span>
                        <span class="rates"><span class="rateNumber">${respuesta[i].calificacionNumerica}</span><span
                                class="rateText">${respuesta[i].calificacion}</span><span class="reviewsCount">${respuesta[i].opiniones}</span></span>
                        <span class="rateExtra">${respuesta[i].calificacionTotal}</span>
                    </section>
                </section>
                <section class="hotelOther">
                    <div class="offer btn btn-primary">
                        <span class="site">${respuesta[i].agencia1}</span><br />
                        <span class="otherSitePrice">${respuesta[i].precio1}</span>
                    </div>
                    <div class="offer btn btn-primary">
                        <span class="site">${respuesta[i].agencia2}</span><br />
                        <span class="otherSitePrice">${respuesta[i].precio2}</span>
                    </div>
                    <div class="offer btn btn-primary">
                        <span class="site">${respuesta[i].agencia3}</span><br />
                        <span class="otherSitePrice">${respuesta[i].precio3}</span>
                    </div>
                    <div class="moreDeals btn btn-primary">
                        <span class="moreDealsText">${respuesta[i].masOfertas}</span>
                    </div>
                </section>
                <section class="hotelFinal">
                    <div class="previousExpensive">
                        <div class="previousExpensiveSite">${respuesta[i].agencia1}</div>
                        <div class="previousExpensivePrice">${respuesta[i].precio1}</div>
                    </div>
                    <div class="websiteOffer">
                        <div class="websiteOfferHotel">${respuesta[i].agencia2}</div>
                        <div class="websiteOfferPrice">${respuesta[i].precio2}</div>
                        <span class="nights">1 noche por <span class="nightsPrice">${respuesta[i].precio1}</span></span>
                        <button class="breakfast btn btn-primary">Desayuno gratis</button>
                    </div>
                    <section class="deal">
                        <a href="#"><button class="viewDeal btn btn-primary" title="Ver oferta">Ver oferta</button></a>
                    </section>
                </section>
            </div>`);
            var x=x+1;
            
              // Define search variable
    const search = $("#search");

    // Remove previous search value when focus
    search.focus(function() {
        $(this).val('');
    });

    // Define dates and number of dates
    const checkin = $("#checkin");
    const checkout = $("#checkout");

    // Change rates based on days
    function today() {
        let now = new Date();
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);
        let today = now.getFullYear() + "-" + (month) + "-" + (day);
        checkin.val(today);
    }

    function tomorrow() {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let month = "0" + (tomorrow.getMonth() + 1);
        let date = "0" + tomorrow.getDate();
        month = month.slice(-2);
        date = date.slice(-2);
        checkout.val(tomorrow.getFullYear() + "-" + month + "-" + date);
    }

    today();
    tomorrow();
let days;

    function rates() {
        let date1 = new Date(checkin.val());
        let date2 = new Date(checkout.val());
        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        days = Math.ceil(timeDiff / (1000 * 3600 * 24));
        let toChange = $(".otherSitePrice").html().replace(/[$,\s]/g, '');
        let nightsCount = toChange * days;
        if (days === 1) { // To properly print "night" or "nights"
            $(".websiteOfferHotel").html(`${$(".site").html()}`);
            $(".websiteOfferPrice").html(`$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
            $(".nights").html(`${days} night for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>`);
        } else {
            $(".websiteOfferHotel").html(`${$(".site").html()}`);
            $(".websiteOfferPrice").html(`$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
            $(".nights").html(`${days} nights for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>`);
        }
    }

    rates();

    checkin.change(() => {
        let nextDay = new Date(checkin.val());
        nextDay.setDate(nextDay.getDate() + 1);
        let month = "0" + (nextDay.getMonth() + 1);
        let date = "0" + nextDay.getDate();
        month = month.slice(-2);
        date = date.slice(-2);
        checkout.val(nextDay.getFullYear() + "-" + month + "-" + date);
        rates();
    });

    checkout.change(() => {
        rates();
    });

    
    // Price slider "revitalization"
    const rangeFrom = $("#price");
    const rangeTo = $(".maxPrice");
    rangeTo.html(rangeFrom.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")); // Print initial price before sliding
    rangeFrom.on("input", function() {
        rangeTo.html(rangeFrom.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    });

    // Images counter "revitalization"
    $(".carousel-control-next").click(function() {
        let range = parseInt($(this).parent().next().next(".range").html()[0]);
        let final = range + 1;
        $(this).parent().next().next(".range").html(final.toString() + ' / 4');
        if (final > 4) {
            final = 1;
            $(this).parent().next().next(".range").html(final.toString() + ' / 4');
        }
    });

    $(".carousel-control-prev").click(function() {
        let range = parseInt($(this).parent().next().next(".range").html()[0]);
        let final = range - 1;
        $(this).parent().next().next(".range").html(final.toString() + ' / 4');
        if (final < 1) {
            final = 4;
            $(this).parent().next().next(".range").html(final.toString() + ' / 4');
        }
    });

    // What happens when clicking on offers
    const offer = $(".offer");
    const moreDeals = $(".moreDeals");

    function clearOtherOffers() {
        offer.removeClass("offerPressed");
        offer.children(".site").removeClass("site1");
        offer.children(".otherSitePrice").removeClass("otherSitePrice1");
        moreDeals.removeClass("moreDealsPressed");
        moreDeals.children(".moreDealsText").removeClass("site1");
    }

    offer.click(function() {
        clearOtherOffers();
        let toChange = $(this).children(".otherSitePrice").html().replace(/[$,\s]/g, '');
        let nightsCount = toChange * days;
        $(this).addClass("offerPressed");
        $(this).children(".site").addClass("site1");
        $(this).children(".otherSitePrice").addClass("otherSitePrice1");
        if (days === 1) { // To properly print "night" or "nights"
            if ($(this).parent().next().children(".websiteOffer").children().hasClass("breakfast")) {
                $(this).parent().next().children(".websiteOffer").empty().append(
                    `<div class="websiteOfferHotel">${$(this).children(".site").html()}</div>
        <div class="websiteOfferPrice">$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span class="nights">${days} night for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>
        <button class="breakfast btn btn-primary">Free breakfast</button>`
                );
            } else {
                $(this).parent().next().children(".websiteOffer").empty().append(
                    `<div class="websiteOfferHotel">${$(this).children(".site").html()}</div>
        <div class="websiteOfferPrice">$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span class="nights">${days} night for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>`
                );
            }
        } else {
            if ($(this).parent().next().children(".websiteOffer").children().hasClass("breakfast")) {
                $(this).parent().next().children(".websiteOffer").empty().append(
                    `<div class="websiteOfferHotel">${$(this).children(".site").html()}</div>
        <div class="websiteOfferPrice">$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span class="nights">${days} nights for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>
        <button class="breakfast btn btn-primary">Free breakfast</button>`
                );
            } else {
                $(this).parent().next().children(".websiteOffer").empty().append(
                    `<div class="websiteOfferHotel">${$(this).children(".site").html()}</div>
        <div class="websiteOfferPrice">$${toChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span class="nights">${days} nights for <span class="nightsPrice">$${nightsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>`
                );
            }
        }
    });

    moreDeals.click(function() {
        clearOtherOffers();
        $(this).addClass("moreDealsPressed");
        $(this).children(".moreDealsText").addClass("site1");
    });
            }
            console.log(x);
		},
		error:function(error){
			console.error(error);
		}
    });
});