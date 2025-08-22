var wms_layers = [];

var lyr_AmericadoSulPM252016_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'America do Sul PM2.5 2016<br />\
    <img src="styles/legend/AmericadoSulPM252016_0_0.png" /> <= 5,0000<br />\
    <img src="styles/legend/AmericadoSulPM252016_0_1.png" /> 5,0000 - 8,0000<br />\
    <img src="styles/legend/AmericadoSulPM252016_0_2.png" /> 8,0000 - 10,0000<br />\
    <img src="styles/legend/AmericadoSulPM252016_0_3.png" /> 10,0000 - 12,0000<br />\
    <img src="styles/legend/AmericadoSulPM252016_0_4.png" /> 12,0000 - 14,0000<br />\
    <img src="styles/legend/AmericadoSulPM252016_0_5.png" /> 14,0000 - 16,0000<br />\
    <img src="styles/legend/AmericadoSulPM252016_0_6.png" /> 16,0000 - 18,0000<br />\
    <img src="styles/legend/AmericadoSulPM252016_0_7.png" /> > 18,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AmericadoSulPM252016_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9344158.057187, -7556425.196423, -3210454.114478, 1527219.831866]
        })
    });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.403000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_AmericadoSulPM252016_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);
var layersList = [lyr_AmericadoSulPM252016_0,lyr_OSMStandard_1];
