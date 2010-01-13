require 'GeneradorKml'

class KmlController < ApplicationController
	layout "principal"

  def index
  end
  
  def localizacion
  	redirect_to :action => "descripcion", :lat => params['latitud'], :lng => params['longitud']
  end
  
  def descripcion
	end
	
	def enviar_fichero
		@descripcion = params['descripcion']
		@latitud = params['latitud']
		@longitud = params['longitud']
	end
	
	def descargar
		kml = GeneradorKml::Simple_kml.new(params['descripcion'], params['latitud'], params['longitud'])
  	send_data kml.to_s, {:filename => "fichero.kml", :disposition => "inline", :type => "application/vnd.google-earth.kml+xml"}
	end

end
