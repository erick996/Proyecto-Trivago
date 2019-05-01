
<body>
        <header class="header">
                <img id="logo" src="img/trivago.svg">   
        </header>
        <main>
                <form>
             
                    <div id="login" class="caja">                       
                        <h1 class="textsub">Inicia sesión con tu email</h1>                              
                        <h2 id="email" class="textmed">Email</h2>                        
                        <input type="text" placeholder="Email"><br>                
                        <h2 id="password" class="textmed">Contraseña<a id="olvido" href="forgot-password.php">¿Olvidaste tu contraseña?</a></h2>
                        <input type="password" placeholder="Contraseña">
                        <div id="checkbox">
                             <input type="checkbox"> Mostrar contraseña<br>
                        </div>                        
                        <button class="enviar" type="submit" ><span class="icon-lock"></span> Iniciar sesión</button><br>
                        <div id="cuenta">
                             <span >¿No tienes una cuenta?<a href="register.php">Registrarse.</a></span><br>
                        </div>
                        <span class="textsub">También puedes acceder con:</span><br>
                        <div style="position:ceter">
                        <a class="boton" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=236995639668665&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.0%2Fdialog%2Foauth%3Fredirect_uri%3Dhttps%253A%252F%252Faccess.trivago.com%252Foauth%252Foauth-login%252Fcheck-facebook%26state%3DeyJyYW5kb20iOiIyODIzYzJlZTJmM2JjODIxMzdjMzJjNjE2OTYzZjVhNSIsImNvdW50cnkiOiJVUyIsImxhbmd1YWdlIjoiZXMifQ%253D%253D%26scope%3Dpublic_profile%252Cemail%26response_type%3Dcode%26return_scopes%26force_confirmation%26client_id%3D236995639668665%26ret%3Dlogin%26logger_id%3D72c2ce56-e8bc-dd94-5695-794aaef57d93&cancel_url=https%3A%2F%2Faccess.trivago.com%2Foauth%2Foauth-login%2Fcheck-facebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DeyJyYW5kb20iOiIyODIzYzJlZTJmM2JjODIxMzdjMzJjNjE2OTYzZjVhNSIsImNvdW50cnkiOiJVUyIsImxhbmd1YWdlIjoiZXMifQ%253D%253D%23_%3D_&display=page&locale=en_US&logger_id=72c2ce56-e8bc-dd94-5695-794aaef57d93"><span class="icon-facebook"></span>Facebook</a>
                        <a class="boton" href="https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=363634697571-lj09qn82grlkcma3sud1c11bo7srajd3.apps.googleusercontent.com&as=KlmJeCqII91Sf-CqSm_KVA&destination=https%3A%2F%2Faccess.trivago.com&approval_state=!ChRLT3VneVF3dHljbllsMHBTOG1JXxIfQXhTVUtqRTZCM2dSVUU3MWpGWk5XazBEMXBMV2xoWQ%E2%88%99AJDr988AAAAAXIfS0zNvI8uZordMgNMI5I2P8LR8WFML&oauthgdpr=1&xsrfsig=ChkAeAh8T-JO6W_gu7lzDtdyQtVb2VCc7kvNEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow"><span class="icon-google"></span>Google</a >
                        </div>
                        <p class="footnote">No publicaremos nada en tu Facebook o Google+ sin consultarte primero.</p>          
                  </div>
                </form>

        </main>
        
</body>
<script src="js/jquery-3.3.1.min.js" ></script>
<script src="js/controlador2.js"></script>
    
</html>