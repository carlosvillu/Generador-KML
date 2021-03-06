require "xmlsimple"

module GeneradorKml
	class Simple_kml
	
		# Constructor a partir de una descripción, latitud y longitud
		def initialize(descripcion, lat, lng)
			@placemark = {
										 'name' => 'Nombre de prueba', 
										 'description' => "#{descripcion}", 
										 'Point' => {'coordinates' => "#{lng},#{lat}"}
										}
		end
		
		def crear_fichero
			File.open("tmp/ficheros/fichero.kml", "w") do |f|
				f << self.to_s
			end
		end
		
		# Devuelve el XML que representa al objeto KML
		def to_s
			res = "<?xml version='1.0' encoding='UTF-8'?>"
			res += "<kml xmlns='http://www.opengis.net/kml/2.2'>"
			#res += XmlSimple.xml_out(@placemark, {"RootName" => "Placemark", "NoAttr" => true}) 
			res += "<Placemark>"
			res += "<name>Simple placemark</name>"
    	res += "<description>#{@placemark['description']}</description>"
    	res += "<Point>"
     	res += "<coordinates>#{@placemark['Point']['coordinates']}</coordinates>"
    	res += "</Point>"
    	res += "</Placemark>"
			res += "</kml>"
		end
	end
end