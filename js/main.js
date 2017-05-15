function validateForm(){
var nombre = document.getElementById('name').value;
var apellido = document.getElementById('lastname').value;
var correo = document.getElementById('input-email').value;
var contrasenia = document.getElementById('input-password').value;
var twitter = document.getElementById('input-social').value;
var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

//hacer las validaciones
if(nombre.toUpperCase() === "" || apellido.toUpperCase() === "" || correo === "" || contrasenia === "" ||twitter===""){
	alert("Todos los campos son obligatorios");
	return false;
}
else if 
	(!regex.test(correo)){
	alert('El correo no es valido');
	return false;
}
else if
	(contrasenia != "password" && contrasenia.length >= 6){
		alert ("ingrese una contrasenia valida");
	return false;
}



}	


		



