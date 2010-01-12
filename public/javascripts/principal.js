// Variables globales
var geocoder;
var map;
var marca;

// Inicializa el mapa, mostrando una vista general de españa
// y mostrando los controles por defecto
function inicializar(){
	geocoder = new GClientGeocoder();
	map = new google.maps.Map2(document.getElementById("mapa"));
	geocoder.getLatLng('plaza mayor, madrid españa', function(posicion){
			if (posicion) map.setCenter(posicion, 5);
	});
	// añadimos un listener sobre el evento click, para recolocar la marca
	GEvent.addListener(map, "click", cambiar_marca); 
  map.setUIToDefault();
}

// colocamos una nueva marca, con el icono por defecto
function cambiar_marca(overlay, latlng){
	map.clearOverlays();
	map.addOverlay(new GMarker(latlng, G_DEFAULT_ICON, true));
	actualizar_inputs_posicion(latlng);
}

// actualiza el valor de las campos ocultos que guardan la posición 
// en la que se encuentra la marca
function actualizar_inputs_posicion(latlng){
	$('#latitud').val(latlng.lat());
	$('#longitud').val(latlng.lng());
}

$(function(){
	
  inicializar();
	
  // Centro el mapa, en la dirección indicada por el usuario
  $('#b_buscar').live('click', function(){
 	 var direccion = $('#direccion').val() || null;
 	 if (direccion){
 		 geocoder.getLatLng(direccion, function(posicion){
 			 if (posicion){ 
 			 	ocultar_mensajes();
 			 	map.setCenter(posicion, 16);
 			 	actualizar_inputs_posicion(posicion);
 			 	cambiar_marca(map, posicion);
 			 }else{
 			 	mostrar_mensaje('error', 'La dirección indicada no existe');
 			 	$('#latitud').val('');
				$('#longitud').val('');
 			 }
 		 });
 	 }
  });
  
  // solo se realiza el submit si hay una dirección válida
  // el otro caso se presenta un mensaje de error
  $('#b_introducir').live('click', function(){
  	var lat = !!$('#latitud').val();
  	var lng = !!$('#longitud').val();
  	(!lat || !lng) ? mostrar_mensaje('error', 'Para continuar debe seleccionar una dirección correcta') : $('#formulario').submit();
  });
});