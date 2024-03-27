var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_LACMurshidabad_2 = new ol.format.GeoJSON();
var features_LACMurshidabad_2 = format_LACMurshidabad_2.readFeatures(json_LACMurshidabad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LACMurshidabad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LACMurshidabad_2.addFeatures(features_LACMurshidabad_2);
var lyr_LACMurshidabad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LACMurshidabad_2, 
                style: style_LACMurshidabad_2,
                popuplayertitle: "LAC Murshidabad",
                interactive: true,
                title: '<img src="styles/legend/LACMurshidabad_2.png" /> LAC Murshidabad'
            });
var format_LAC_3 = new ol.format.GeoJSON();
var features_LAC_3 = format_LAC_3.readFeatures(json_LAC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAC_3.addFeatures(features_LAC_3);
var lyr_LAC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAC_3, 
                style: style_LAC_3,
                popuplayertitle: "LAC",
                interactive: true,
                title: '<img src="styles/legend/LAC_3.png" /> LAC'
            });
var format_PolingStation_4 = new ol.format.GeoJSON();
var features_PolingStation_4 = format_PolingStation_4.readFeatures(json_PolingStation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolingStation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolingStation_4.addFeatures(features_PolingStation_4);
var lyr_PolingStation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolingStation_4, 
                style: style_PolingStation_4,
                popuplayertitle: "Poling Station",
                interactive: true,
    title: 'Poling Station<br />\
    <img src="styles/legend/PolingStation_4_0.png" /> 43-Habibpur (ST)<br />\
    <img src="styles/legend/PolingStation_4_1.png" /> 44-Gazole (SC)<br />\
    <img src="styles/legend/PolingStation_4_2.png" /> 45-Chanchal<br />\
    <img src="styles/legend/PolingStation_4_3.png" /> 46-Harishchandrapur<br />\
    <img src="styles/legend/PolingStation_4_4.png" /> 47-Malatipur<br />\
    <img src="styles/legend/PolingStation_4_5.png" /> 48-Ratua<br />\
    <img src="styles/legend/PolingStation_4_6.png" /> 49-Manikchak<br />\
    <img src="styles/legend/PolingStation_4_7.png" /> 50-Maldah (SC)<br />\
    <img src="styles/legend/PolingStation_4_8.png" /> 51-English Bazar<br />\
    <img src="styles/legend/PolingStation_4_9.png" /> 52-Mothabari<br />\
    <img src="styles/legend/PolingStation_4_10.png" /> 53-Sujapur<br />\
    <img src="styles/legend/PolingStation_4_11.png" /> 54-Baishnabnagar<br />\
    <img src="styles/legend/PolingStation_4_12.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_LACMurshidabad_2.setVisible(true);lyr_LAC_3.setVisible(true);lyr_PolingStation_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_LACMurshidabad_2,lyr_LAC_3,lyr_PolingStation_4];
lyr_LACMurshidabad_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'LAC_No': 'LAC_No', });
lyr_LAC_3.set('fieldAliases', {'LAC': 'LAC', 'LAC_Name': 'LAC_Name', 'LAC_No': 'LAC_No', 'PC_No': 'PC_No', 'Gander_Rat': 'Gander_Rat', 'EP_Ratio': 'EP_Ratio', });
lyr_PolingStation_4.set('fieldAliases', {'FID_Electi': 'FID_Electi', 'Sub_Divisi': 'Sub_Divisi', 'Block_name': 'Block_name', 'New_PS_No': 'New_PS_No', 'Building': 'Building', 'PC': 'PC', 'AC': 'AC', });
lyr_LACMurshidabad_2.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'LAC_No': 'TextEdit', });
lyr_LAC_3.set('fieldImages', {'LAC': 'TextEdit', 'LAC_Name': 'TextEdit', 'LAC_No': 'TextEdit', 'PC_No': 'TextEdit', 'Gander_Rat': 'TextEdit', 'EP_Ratio': 'TextEdit', });
lyr_PolingStation_4.set('fieldImages', {'FID_Electi': 'TextEdit', 'Sub_Divisi': 'TextEdit', 'Block_name': 'TextEdit', 'New_PS_No': 'TextEdit', 'Building': 'TextEdit', 'PC': 'TextEdit', 'AC': 'TextEdit', });
lyr_LACMurshidabad_2.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'LAC_No': 'no label', });
lyr_LAC_3.set('fieldLabels', {'LAC': 'no label', 'LAC_Name': 'no label', 'LAC_No': 'no label', 'PC_No': 'no label', 'Gander_Rat': 'no label', 'EP_Ratio': 'no label', });
lyr_PolingStation_4.set('fieldLabels', {'FID_Electi': 'no label', 'Sub_Divisi': 'no label', 'Block_name': 'no label', 'New_PS_No': 'inline label - always visible', 'Building': 'no label', 'PC': 'no label', 'AC': 'no label', });
lyr_PolingStation_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});