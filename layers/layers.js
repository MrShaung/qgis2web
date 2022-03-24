var wms_layers = [];


        var lyr_StamenTonerLite_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });
var format_Myanmar_1 = new ol.format.GeoJSON();
var features_Myanmar_1 = format_Myanmar_1.readFeatures(json_Myanmar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Myanmar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Myanmar_1.addFeatures(features_Myanmar_1);
var lyr_Myanmar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Myanmar_1, 
                style: style_Myanmar_1,
                interactive: true,
                title: '<img src="styles/legend/Myanmar_1.png" /> Myanmar'
            });

lyr_StamenTonerLite_0.setVisible(true);lyr_Myanmar_1.setVisible(true);
var layersList = [lyr_StamenTonerLite_0,lyr_Myanmar_1];
lyr_Myanmar_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', });
lyr_Myanmar_1.set('fieldImages', {'COUNTRY': 'TextEdit', });
lyr_Myanmar_1.set('fieldLabels', {'COUNTRY': 'no label', });
lyr_Myanmar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});