
$(function(){
	var geocoder = new GClientGeocoder();
	var map = new google.maps.Map2(document.getElementById("mapa"));
	geocoder.getLatLng('plaza mayor, madrid españa', function(posicion){
			if (posicion) map.setCenter(posicion, 13);
	});
  map.setUIToDefault(); 
   
  $('#b_buscar').live('click', function(){
 	 var direccion = $('#direccion').val() || null;
 	 if (direccion){
 		 geocoder.getLatLng(direccion, function(posicion){
 			 if (posicion){ 
 			 	map.setCenter(posicion, 16);
 			 	var marca = new GMarker(posicion, G_DEFAULT_ICON, true);
 			 	map.addOverlay(marca);
 			 }
 		 });
 	 }
  });
});