var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_fontanelle_qfield_1 = new ol.format.GeoJSON();
var features_fontanelle_qfield_1 = format_fontanelle_qfield_1.readFeatures(json_fontanelle_qfield_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fontanelle_qfield_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fontanelle_qfield_1.addFeatures(features_fontanelle_qfield_1);
var lyr_fontanelle_qfield_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fontanelle_qfield_1, 
                style: style_fontanelle_qfield_1,
                popuplayertitle: 'fontanelle_qfield',
                interactive: true,
                title: '<img src="styles/legend/fontanelle_qfield_1.png" /> fontanelle_qfield'
            });

lyr_OSMStandard_0.setVisible(true);lyr_fontanelle_qfield_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_fontanelle_qfield_1];
lyr_fontanelle_qfield_1.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Wheelchair': 'Wheelchair', 'Drink_Wat': 'Drink_Wat', 'Capacity': 'Capacity', 'Accesso': 'Accesso', 'data_ril': 'data_ril', 'note': 'note', });
lyr_fontanelle_qfield_1.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Wheelchair': 'ValueMap', 'Drink_Wat': 'ValueMap', 'Capacity': 'Range', 'Accesso': 'ValueMap', 'data_ril': 'DateTime', 'note': '', });
lyr_fontanelle_qfield_1.set('fieldLabels', {'id': 'hidden field', 'Nome': 'inline label - visible with data', 'Wheelchair': 'inline label - visible with data', 'Drink_Wat': 'no label', 'Capacity': 'no label', 'Accesso': 'no label', 'data_ril': 'no label', 'note': 'no label', });
lyr_fontanelle_qfield_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});