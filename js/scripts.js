function mysqlDateFormat(date) {
    var isoDate = date.toISOString();
    var dateNT = isoDate.split("T").shift();
    var pieces = dateNT.split('-');
    pieces.reverse();
    return pieces.join('-');
}

jQuery(document).ready(function() {
    $(".publicacion > div:first-of-type div img").click(function() {
        var idPubli = $(this).closest('.publicacion').attr('id');
        $("#" + idPubli + " > div:first-of-type div img").attr('src', '../Images/lovingIcon.png');
    });
});


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

function Post() {
    var title = $('#ingresar div:last-child input').get(0).value;
    var description = $("#ingresar div:last-child textarea").get(0).value;
    var mediaSource = $("#ingresar input[type = 'file']").get(0).value;
    CreatePost("../Images/loginBackground2.jpg", title, description);
}

function CreatePost(mediaSource, title, description) {
    var columna = document.getElementById("columna" + columnaActual);
    var oldHtml = columna.innerHTML;
    columna.innerHTML = "" +
        "<div class='publicacion' id='publicacion_" + idPublicacion + "'>" +
            "<img src=" + mediaSource + " alt='media not found'>" +
            "<h4 class='Title'>" + title + "</h4>" +
            "<h5 class='Description'>" + description + "</h5>" +
            "<hr class='Separador'>" +
            "<div>" +
                "<span>" + mysqlDateFormat(new Date()) + "</span>" +
                "<div><img src='../Images/LoveIcon.png' alt='not found'><span>(count)</span></div>" +
            "</div>" + 
            "<h6>Comentarios</h6>" +
            "<div id='commentBox'>" +
                "<div>" +
                    "<img src='../Images/loginBackground2.jpg' alt='not found'>" +
                    "<textarea rows=2></textarea>" +
                "</div>" +
                "<div>" +
                    "<input type='button' name='btnPublicar' value='Publicar'>" +
                "</div>" +
            "</div>" +
            "<div id='comentarios_" + idPublicacion + "'>" +
            "</div>" +
        "</div>" + oldHtml;
    idPublicacion++;
    columnaActual == 0 ? columnaActual = 1 : columnaActual = 0;
    Notificate(0, "Yamil");
}

function Notificate(type, idUsuario, idPubli) {
    var newItem = document.createElement("li");
    newItem.innerHTML = "<img src='../Images/NotificationIcon.png' alt='not found'>" +
                        "<p>UsuarioX ha X.</p>";

    var list = document.getElementById("notificacion");  
    list.insertBefore(newItem, list.childNodes[0]);
}

function LoadComment(idPubli, imgPerfil, usuario, comentario, fecha, hora) {
    var idCom = idPubli.split("_").pop();
    GetElementInsideContainer(idPubli, "comentarios_" + idCom).innerHTML += "" +
        "<div class='comentario'>" +
            "<img src='../Images/loginBackground2.jpg' alt='not found'>" + 
            "<div>" +
                "<a href=''>" +
                "<p>" + usuario + "</p>" +
                "</a>" +
                "<p>" + comentario + "</p>" +
            "</div>" +
        "</div>"
    + "";
}