

//$("#login > #cuenta ").html(`¿No tienes una cuenta?<a href="register.html">Registrarse.</a>`);
console.log('estoy bien');
$(document).ready(function(){ 
  
generarPagina($('title').attr('id'));

    
});

function generarPagina(id){
    if(id == 'regis'){
        console.log(id);
        $(".caja").attr("id","register");
        $("h1.textsub").html(`Regístrate con tu email`);
        $("#password a").remove();
        $(':password').attr('placeholder', 'Mínimo: 6 caracteres');       
        $(':submit').html(`<span class="icon-user-plus"></span>Registrarse`);
        $('#cuenta span').html(`¿Ya tienes una cuenta?`);
       
        $('#cuenta span').append('<a href="login.php">lnicia sesión.</a>');
        $('.footnote').after('<p class="footnote">  Recuerda: al registrarte, aceptas nuestra política de privacidad y los términos de uso. </p>');
    }

}