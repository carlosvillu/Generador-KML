var map;
var punto;
var marcador;

function inicializar(){
	geocoder = new GClientGeocoder();
	var lat = $('#latitud').val();
	var lng = $('#longitud').val();
	punto = new GLatLng(lat, lng);
	map = new google.maps.Map2(document.getElementById("vista_previa"));
	map.clearOverlays();
	map.setCenter(punto, 16);
	marcador = new GMarker(punto, G_DEFAULT_ICON, true)
	map.addOverlay(marcador);
	marcador.openInfoWindowHtml('<h1>Edita la descripción<br/>puedes usar HTML y CSS</h1>', {noCloseOnClick: true});
}


function actualizar_globo(){
	var contenido = $('#descripcion').val();
	if (contenido) ocultar_mensajes();
	marcador.closeInfoWindow();
	marcador.openInfoWindowHtml(contenido, {noCloseOnClick: true});
}

$(function(){
	inicializar();

	// Cuando pierde el foco el cuadro de descripción se actualiza la vista
	$('#descripcion').blur(function(){
		actualizar_globo();
		return false;
	});
	$('#actualizar').click(function(){
		actualizar_globo();
		return false;
	});
	
	
	// Controlamos el submit de la aplicacion
	$('#b_obtener').click(function(){
		var descripcion = $('#descripcion').val();
		(!!descripcion) ? $('#formulario').submit() : mostrar_mensaje('error', 'Debes introducir alguna descripción')
	});
});