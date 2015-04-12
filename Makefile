#
# Makefile for WandT
#

setup:
	# Install non-Meteor NPM packages.
	sudo npm install

zip_path = wandt/private/shapefiles/gz_2010_us_050_00_500k/gz_2010_us_050_00_500k.zip
unzip_path = wandt/private/shapefiles/gz_2010_us_050_00_500k/gz_2010_us_050_00_500k.shp
counties_json_path = wandt/private/shapefiles/gz_2010_us_050_00_500k/counties.json
states_json_path = wandt/private/shapefiles/gz_2010_us_050_00_500k/states.json

map:
	# 1. Download and unzip the U.S. TIGER/Line zip file from the U.S. Census Bureau.
	mkdir -p $(dir $(zip_path))
	curl -o $(zip_path) http://www2.census.gov/geo/tiger/GENZ2010/$(notdir $(zip_path))
	unzip $(zip_path) -d $(dir $(unzip_path))

	# 2. Convert the contained shapefile into TopoJSON.
	node_modules/.bin/topojson \
		-o $(counties_json_path) \
		--projection='width = 960, height = 600, d3.geo.albersUsa().scale(1280).translate([width / 2, height / 2])' \
		--simplify=.5 \
		-- counties=$(unzip_path)

	# 3. Merge counties into states lines.
	node_modules/.bin/topojson-merge \
		-o $(states_json_path) \
		--in-object=counties \
		--out-object=states \
		-- $(counties_json_path)

	# 3. Remove artifacts.
	rm $(dir $(zip_path))/gz_2010_us_050_00_500k.zip $(dir $(zip_path))/gz_2010_us_050_00_500k.dbf $(dir $(zip_path))/gz_2010_us_050_00_500k.prj $(dir $(zip_path))/gz_2010_us_050_00_500k.shp $(dir $(zip_path))/gz_2010_us_050_00_500k.shx $(dir $(zip_path))/gz_2010_us_050_00_500k.xml $(counties_json_path)

merge:


setup-nosudo:
	# Install non-Meteor NPM packages.
	npm install