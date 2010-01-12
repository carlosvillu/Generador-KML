// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Muestra el tipo del mensaje indicada, con el mensaje
// proporcionado, el tipo == id de la capa del mensaje que se quiere mostrar
function mostrar_mensaje(tipo, msj){
	$('#'+tipo).empty().text(msj).show();
}


// Por defecto oculta todos los mensajes, en caso de pasar
// algún tipo en concreto, solo oculta el de ese tipo
function ocultar_mensajes(tipo){	
	var clase = tipo || null;
	(clase) ? $('#'+clase).hide() : $('.mensaje').hide();
}
