function SignX() {
    if (document.getElementById("signLink").innerHTML == "Registrarte") {
        document.getElementById("signLink").innerHTML = "Entrar";
        document.getElementById("signUpHeader").innerHTML = "Registrate para compartir fotos y videos con tus amigos.";
        document.getElementById("signLinkLabel").innerHTML = "¿Ya tienes cuenta?";
        
        document.getElementById("infoPersonal").style.display = "block";
        document.getElementById("SeparadorInfoP").style.display = "block";
        document.getElementById("SeparadorInfoImg").style.display = "block";
        document.getElementById("txtNombreCuenta").style.display = "block";
        document.getElementById("txtNombreUsuario").style.display = "block";
        document.getElementById("infoImg").style.display = "block";
        document.getElementById("btnAceptar").value = "Registrarte";
    } else {
        document.getElementById("signLink").innerHTML = "Registrarte";
        document.getElementById("signUpHeader").innerHTML = "Inicia sesion para compartir fotos y videos con tus amigos.";
        document.getElementById("signLinkLabel").innerHTML = "¿No tienes cuenta aun?";

        document.getElementById("infoPersonal").style.display = "none";
        document.getElementById("SeparadorInfoP").style.display = "none";
        document.getElementById("SeparadorInfoImg").style.display = "none";
        document.getElementById("txtNombreCuenta").style.display = "none";
        document.getElementById("txtNombreUsuario").style.display = "none";
        document.getElementById("infoImg").style.display = "none";
        document.getElementById("btnAceptar").value = "Entrar";
    }
}

function CreatePost(mediaSource, title, description) {
    document.writeln("<div id='Publicacion'>");
        document.writeln("<img src=mediaSource alt='media not found' id='imgPerfil'>");
        document.writeln("<h4 class='Text'>title</h4>");
        document.writeln("<h5 class='Text'>description</h5>");
        document.writeln("<hr class='Separador'>");
        document.writeln("<h6>Comentarios</h6>");
        document.writeln("<div id='cajaComentario>'");
            document.writeln("<div id='infoComentario'>");
                document.writeln("<img src='Images/hype.gif' alt='not found'>");
                document.writeln("<textarea rows=2></textarea>");
            document.writeln("</div>");
            document.writeln("<div id='inputComentario'>");
                document.writeln("<input type='button' class='botonAceptar' name='btnPublicar' value='Publicar'>");
            document.writeln("</div>");
        document.writeln("</div>");
        document.writeln("<div id='comentarios'>");
        document.writeln("</div>");
    document.writeln("</div>");
}

function LoadComment(imgPerfil, comment, date, hour) {

}