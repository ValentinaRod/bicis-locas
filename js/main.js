function validateForm(){


//hacer las validaciones
function nombre(){
    var nombre = document.getElementById("name").value;
    if(!(/^[A-Z][a-z]{3,19}$/).test(nombre)) {

    }
    var cajaDiv = document.getElementsByClassName("name-container input-box")[0];
    var x = document.createElement("span");
    var t = document.createTextNode("Escribe tu nombre correcto");
    x.appendChild(t);
    cajaDiv.appendChild(x);
}
nombre();

function apellido(){
var apellido = document.getElementById('lastname').value;
if(!(/^[A-Z][a-z]{3,19}$/).test(apellido)) {

    }
    var cajaDiv = document.getElementsByClassName("lastname-container input-box")[0];
    var x = document.createElement("span");
    var t = document.createTextNode("Escribe tu apellido correcto");
    x.appendChild(t);
    cajaDiv.appendChild(x);
}
apellido();

function correo(){
 if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {

}
 var correo = document.getElementById('input-email').value;
 if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {
 
}
	var cajaDiv = document.getElementsByClassName("email-container input-box")[0];
    var x = document.createElement("span");
    var t = document.createTextNode("Escribe un Correo Electronico valido");
    x.appendChild(t);
    cajaDiv.appendChild(x);

}
correo();

function contrasenia (){
	var patronPass= /^[a-zA-Z0-9]*$/;
	var contrasenia = document.getElementById('input-password').value;
		if (patronPass.test(contrasenia) !== "password" || contrasenia.length >= 6){

}
	var cajaDiv = document.getElementsByClassName("form-group input-box")[0];
    var x = document.createElement("span");
    var t = document.createTextNode("Escribe una contraseña valida");
    x.appendChild(t);
    cajaDiv.appendChild(x);
}
contrasenia();

}