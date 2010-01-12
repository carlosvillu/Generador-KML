class KmlController < ApplicationController
	layout "principal"

  def index
  end
  
  def localizacion
  	redirect_to :action => "descripcion", :lat => params['latitud'], :lng => params['longitud']
  end
  
  def descripcion
	end
end
