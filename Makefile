#
# Makefile for WandT
#

setup:
	# Install non-Meteor NPM packages.
	sudo npm install

zip_path = wandt/private/shapefiles/cb_2013_us_state_500k/cb_2013_us_state_500k.zip
unzip_path = wandt/private/shapefiles/cb_2013_us_state_500k/cb_2013_us_state_500k.shp
states_json_path = wandt/private/shapefiles/cb_2013_us_state_500k/states.json

map:
	# 1. Download and unzip the U.S. TIGER/Line zip file from the U.S. Census Bureau.
	mkdir -p $(dir $(zip_path))
	curl -o $(zip_path) http://www2.census.gov/geo/tiger/GENZ2013/$(notdir $(zip_path))
	unzip $(zip_path) -d $(dir $(unzip_path))

	# 2. Convert the contained shapefile into TopoJSON.
	node_modules/.bin/topojson \
		-o $(states_json_path) \
		--projection='width = 960, height = 600, d3.geo.albersUsa().scale(1280).translate([width / 2, height / 2])' \
		--simplify=.6 \
		-- states=$(unzip_path)

	# 3. Remove artifacts.
	mv $(states_json_path) wandt/private/shapefiles
	rm $(dir $(states_json_path))/*
	mv wandt/private/shapefiles/states.json $(dir $(states_json_path))

setup-nosudo:
	# Install non-Meteor NPM packages.
	npm install
