function GetElementInsideContainer(containerID, childID) {
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}

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
        //document.getElementById("infoImg").style.display = "block";
        document.getElementById("btnRegistrar").value = "Registrarte";

        document.getElementById("loginForm").style.height = "600px";
    } else {
        document.getElementById("signLink").innerHTML = "Registrarte";
        document.getElementById("signUpHeader").innerHTML = "Inicia sesion para compartir fotos y videos con tus amigos.";
        document.getElementById("signLinkLabel").innerHTML = "¿No tienes cuenta aun?";

        document.getElementById("infoPersonal").style.display = "none";
        document.getElementById("SeparadorInfoP").style.display = "none";
        document.getElementById("SeparadorInfoImg").style.display = "none";
        document.getElementById("txtNombreCuenta").style.display = "none";
        document.getElementById("txtNombreUsuario").style.display = "none";
        // document.getElementById("infoImg").style.display = "none";
        document.getElementById("btnRegistrar").value = "Entrar";

        document.getElementById("loginForm").style.height = "300px";
    }
}

var idPublicacion = 0;
var columnaActual = 0;

function CreatePost(mediaSource, title, description) {
    document.getElementById("columna" + columnaActual).innerHTML += "" +
        "<div class='publicacion' id='publicacion_" + idPublicacion + "'>" +
            "<img src=" + mediaSource + " alt='media not found' id='imgPubli'>" +
            "<h4 class='Text Title'>" + title + "</h4>" +
            "<h5 class='Text Description'>" + description + "</h5>" +
            "<hr class='Separador'>" +
            "<h6 class='Text'>Comentarios</h6>" +
            "<div id='cajaComentario'>" +
                "<div class='infoComentario'>" +
                    "<img class='imgComentario' src='Images/loginBackground2.jpg' alt='not found'>" +
                    "<textarea rows=2></textarea>" +
                "</div>" +
                "<div id='inputComentario'>" +
                    "<input type='button' class='botonAceptar' name='btnPublicar' value='Publicar'>" +
                "</div>" +
            "</div>" +
            "<div id='comentarios'>" +
            "</div>" +
        "</div>" +
    + "";
    idPublicacion++;
    if (columnaActual == 0) {
        columnaActual = 1;
    } else {
        columnaActual = 0;
    }
}

function LoadComment(idPubli, imgPerfil, usuario, comentario, fecha, hora) {
    GetElementInsideContainer(idPubli, "comentarios").innerHTML += "" +
        "<div class='comentario'>" +
            "<img class='imgComentario' src='Images/loginBackground2.jpg' alt='not found'>" + 
            "<div class='infoComentario'>" +
                "<a href=''>" +
                "<span>" + usuario + "</span>" +
                "</a>" +
                "<span>" + comentario + "</span>" +
            "</div>" +
        "</div>"
    + "";
}