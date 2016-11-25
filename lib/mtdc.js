/*
 * Converter for Maps.Taipei ver. 0.1
 * Copyright (C) 2016 Chung-Dau Wang(王崇道)
*/

var fs = require('fs');
var c2g= require('csv2geojson');
var k2g = require('togeojson');
var dom_parser = require('xmldom').DOMParser;


//input: shapefile, csv, kml, or  geojson
//output: geojson, kml, csv
//WGS84 EPSG:3857 <-> WGS84 EPSG:4326


function MTDC(name) {
	this.name = name;
}

MTDC.prototype.greet = function() {
	return "hello world";
}							

MTDC.prototype.csv2geojson = function(raw) {
	c2g.csv2geojson(raw, function(err, data) {
	});
}  	  
MTDC.prototype.kml2geojson = function(raw_path) {
	kml = new dom_parser().parseFromString(fs.readFileSync(raw_path, 'utf8'));
	var converted = k2g.kml(kml);
}


module.exports = MTDC;

