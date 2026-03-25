ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-13508369.061021, 4145099.459569, -13299274.367330, 4277482.409328]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_District5Focus_1 = new ol.format.GeoJSON();
var features_District5Focus_1 = format_District5Focus_1.readFeatures(json_District5Focus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District5Focus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District5Focus_1.addFeatures(features_District5Focus_1);
var lyr_District5Focus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District5Focus_1,
maxResolution:28004.466152261964,
 minResolution:7.00111653806549,

                style: style_District5Focus_1,
                popuplayertitle: 'District 5 Focus',
                interactive: false,
                title: '<img src="styles/legend/District5Focus_1.png" /> District 5 Focus'
            });
var format_CrestonURLCrestonVRL_2 = new ol.format.GeoJSON();
var features_CrestonURLCrestonVRL_2 = format_CrestonURLCrestonVRL_2.readFeatures(json_CrestonURLCrestonVRL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrestonURLCrestonVRL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrestonURLCrestonVRL_2.addFeatures(features_CrestonURLCrestonVRL_2);
var lyr_CrestonURLCrestonVRL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrestonURLCrestonVRL_2, 
                style: style_CrestonURLCrestonVRL_2,
                popuplayertitle: 'CrestonURL — Creston VRL',
                interactive: false,
                title: '<img src="styles/legend/CrestonURLCrestonVRL_2.png" /> CrestonURL — Creston VRL'
            });
var format_CannabisApplicationsDistrict5_3 = new ol.format.GeoJSON();
var features_CannabisApplicationsDistrict5_3 = format_CannabisApplicationsDistrict5_3.readFeatures(json_CannabisApplicationsDistrict5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CannabisApplicationsDistrict5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CannabisApplicationsDistrict5_3.addFeatures(features_CannabisApplicationsDistrict5_3);
var lyr_CannabisApplicationsDistrict5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CannabisApplicationsDistrict5_3, 
                style: style_CannabisApplicationsDistrict5_3,
                popuplayertitle: 'Cannabis Applications — District 5',
                interactive: true,
                title: '<img src="styles/legend/CannabisApplicationsDistrict5_3.png" /> Cannabis Applications — District 5'
            });
var format_ProjectSites_4 = new ol.format.GeoJSON();
var features_ProjectSites_4 = format_ProjectSites_4.readFeatures(json_ProjectSites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectSites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectSites_4.addFeatures(features_ProjectSites_4);
cluster_ProjectSites_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ProjectSites_4
});
var lyr_ProjectSites_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ProjectSites_4, 
                style: style_ProjectSites_4,
                popuplayertitle: 'Project Sites',
                interactive: false,
                title: '<img src="styles/legend/ProjectSites_4.png" /> Project Sites'
            });
var group_ProjectSites = new ol.layer.Group({
                                layers: [lyr_CannabisApplicationsDistrict5_3,lyr_ProjectSites_4,],
                                fold: 'open',
                                title: 'Project Sites'});
var group_Boundaries = new ol.layer.Group({
                                layers: [lyr_District5Focus_1,lyr_CrestonURLCrestonVRL_2,],
                                fold: 'open',
                                title: 'Boundaries'});
var group_SupportingLayers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Supporting Layers'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_OSMStandard_0.setVisible(true);lyr_District5Focus_1.setVisible(true);lyr_CrestonURLCrestonVRL_2.setVisible(true);lyr_CannabisApplicationsDistrict5_3.setVisible(true);lyr_ProjectSites_4.setVisible(true);
var layersList = [group_Basemap,group_Boundaries,group_ProjectSites];
lyr_District5Focus_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'DISTRICT': 'DISTRICT', 'ADJ_POPULA': 'ADJ_POPULA', 'ADJ_HISPAN': 'ADJ_HISPAN', 'ADJ_18_POP': 'ADJ_18_POP', 'ADJ_NH_WHT': 'ADJ_NH_WHT', 'ADJ_NH_BLK': 'ADJ_NH_BLK', 'ADJ_NH_IND': 'ADJ_NH_IND', 'ADJ_NH_ASN': 'ADJ_NH_ASN', 'ADJ_NH_HWN': 'ADJ_NH_HWN', 'ADJ_NH_OTH': 'ADJ_NH_OTH', 'IDEAL_VALU': 'IDEAL_VALU', 'DEVIATION': 'DEVIATION', 'F_DEVIATIO': 'F_DEVIATIO', 'F_ADJ_HISP': 'F_ADJ_HISP', 'F_ADJ_18_P': 'F_ADJ_18_P', 'F_ADJ_NH_W': 'F_ADJ_NH_W', 'F_ADJ_NH_B': 'F_ADJ_NH_B', 'F_ADJ_NH_I': 'F_ADJ_NH_I', 'F_ADJ_NH_A': 'F_ADJ_NH_A', 'F_ADJ_NH_H': 'F_ADJ_NH_H', 'F_ADJ_NH_O': 'F_ADJ_NH_O', 'DISTRICT_L': 'DISTRICT_L', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_CrestonURLCrestonVRL_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'COMMUNITY': 'COMMUNITY', 'URL_VRL': 'URL_VRL', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', 'last_edite': 'last_edite', });
lyr_CannabisApplicationsDistrict5_3.set('fieldAliases', {'fid': 'fid', 'apn': 'apn', 'assmt': 'assmt', 'assessee': 'assessee', 'in_care_of': 'in_care_of', 'address_1': 'address_1', 'address_2': 'address_2', 'address_3': 'address_3', 'city': 'city', 'state_abbr': 'state_abbr', 'zip_code': 'zip_code', 'zip_plus_4': 'zip_plus_4', 'legal_desc': 'legal_desc', 'stat_date': 'stat_date', 'tra': 'tra', 'tax_prcl': 'tax_prcl', 'tax_code': 'tax_code', 'base_date': 'base_date', 'prim_luc': 'prim_luc', 'scnd_luc_1': 'scnd_luc_1', 'scnd_luc_2': 'scnd_luc_2', 'scnd_luc_3': 'scnd_luc_3', 'roll_year': 'roll_year', 'land_value': 'land_value', 'imps_value': 'imps_value', 'pers_value': 'pers_value', 'fixt_value': 'fixt_value', 'exemp_amt': 'exemp_amt', 'net_value': 'net_value', 'STArea__': 'STArea__', 'STLength__': 'STLength__', 'Parcel Number': 'Parcel Number', 'Address': 'Address', 'Project Links': 'Project Links', 'Project Numbers': 'Project Numbers', 'Address (approximate)': 'Address (approximate)', });
lyr_ProjectSites_4.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'APN(s)': 'APN(s)', 'Business Name': 'Business Name', 'Currently Operational Components of Approval': 'Currently Operational Components of Approval', 'Date approved for operations': 'Date approved for operations', 'lat': 'lat', 'long': 'long', 'doc': 'doc', });
lyr_District5Focus_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ID': 'Range', 'DISTRICT': 'TextEdit', 'ADJ_POPULA': 'Range', 'ADJ_HISPAN': 'Range', 'ADJ_18_POP': 'Range', 'ADJ_NH_WHT': 'Range', 'ADJ_NH_BLK': 'Range', 'ADJ_NH_IND': 'Range', 'ADJ_NH_ASN': 'Range', 'ADJ_NH_HWN': 'Range', 'ADJ_NH_OTH': 'Range', 'IDEAL_VALU': 'Range', 'DEVIATION': 'Range', 'F_DEVIATIO': 'TextEdit', 'F_ADJ_HISP': 'TextEdit', 'F_ADJ_18_P': 'TextEdit', 'F_ADJ_NH_W': 'TextEdit', 'F_ADJ_NH_B': 'TextEdit', 'F_ADJ_NH_I': 'TextEdit', 'F_ADJ_NH_A': 'TextEdit', 'F_ADJ_NH_H': 'TextEdit', 'F_ADJ_NH_O': 'TextEdit', 'DISTRICT_L': 'TextEdit', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_CrestonURLCrestonVRL_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'COMMUNITY': 'TextEdit', 'URL_VRL': 'TextEdit', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', 'last_edite': 'DateTime', });
lyr_CannabisApplicationsDistrict5_3.set('fieldImages', {'fid': 'TextEdit', 'apn': 'TextEdit', 'assmt': 'TextEdit', 'assessee': 'TextEdit', 'in_care_of': 'TextEdit', 'address_1': 'TextEdit', 'address_2': 'TextEdit', 'address_3': 'TextEdit', 'city': 'TextEdit', 'state_abbr': 'TextEdit', 'zip_code': 'TextEdit', 'zip_plus_4': 'TextEdit', 'legal_desc': 'TextEdit', 'stat_date': 'TextEdit', 'tra': 'TextEdit', 'tax_prcl': 'TextEdit', 'tax_code': 'TextEdit', 'base_date': 'TextEdit', 'prim_luc': 'TextEdit', 'scnd_luc_1': 'TextEdit', 'scnd_luc_2': 'TextEdit', 'scnd_luc_3': 'TextEdit', 'roll_year': 'TextEdit', 'land_value': 'TextEdit', 'imps_value': 'TextEdit', 'pers_value': 'TextEdit', 'fixt_value': 'TextEdit', 'exemp_amt': 'TextEdit', 'net_value': 'TextEdit', 'STArea__': 'TextEdit', 'STLength__': 'TextEdit', 'Parcel Number': 'TextEdit', 'Address': 'TextEdit', 'Project Links': 'TextEdit', 'Project Numbers': 'TextEdit', 'Address (approximate)': '', });
lyr_ProjectSites_4.set('fieldImages', {'fid': 'TextEdit', 'Address': 'TextEdit', 'APN(s)': 'TextEdit', 'Business Name': 'TextEdit', 'Currently Operational Components of Approval': 'TextEdit', 'Date approved for operations': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'doc': 'TextEdit', });
lyr_District5Focus_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ID': 'hidden field', 'DISTRICT': 'hidden field', 'ADJ_POPULA': 'hidden field', 'ADJ_HISPAN': 'hidden field', 'ADJ_18_POP': 'hidden field', 'ADJ_NH_WHT': 'hidden field', 'ADJ_NH_BLK': 'hidden field', 'ADJ_NH_IND': 'hidden field', 'ADJ_NH_ASN': 'hidden field', 'ADJ_NH_HWN': 'hidden field', 'ADJ_NH_OTH': 'hidden field', 'IDEAL_VALU': 'hidden field', 'DEVIATION': 'hidden field', 'F_DEVIATIO': 'hidden field', 'F_ADJ_HISP': 'hidden field', 'F_ADJ_18_P': 'hidden field', 'F_ADJ_NH_W': 'hidden field', 'F_ADJ_NH_B': 'hidden field', 'F_ADJ_NH_I': 'hidden field', 'F_ADJ_NH_A': 'hidden field', 'F_ADJ_NH_H': 'hidden field', 'F_ADJ_NH_O': 'hidden field', 'DISTRICT_L': 'hidden field', 'ShapeSTAre': 'hidden field', 'ShapeSTLen': 'hidden field', });
lyr_CrestonURLCrestonVRL_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'COMMUNITY': 'no label', 'URL_VRL': 'no label', 'ShapeSTAre': 'no label', 'ShapeSTLen': 'no label', 'last_edite': 'no label', });
lyr_CannabisApplicationsDistrict5_3.set('fieldLabels', {'fid': 'hidden field', 'apn': 'hidden field', 'assmt': 'hidden field', 'assessee': 'hidden field', 'in_care_of': 'hidden field', 'address_1': 'hidden field', 'address_2': 'hidden field', 'address_3': 'hidden field', 'city': 'hidden field', 'state_abbr': 'hidden field', 'zip_code': 'hidden field', 'zip_plus_4': 'hidden field', 'legal_desc': 'hidden field', 'stat_date': 'hidden field', 'tra': 'hidden field', 'tax_prcl': 'hidden field', 'tax_code': 'hidden field', 'base_date': 'hidden field', 'prim_luc': 'hidden field', 'scnd_luc_1': 'hidden field', 'scnd_luc_2': 'hidden field', 'scnd_luc_3': 'hidden field', 'roll_year': 'hidden field', 'land_value': 'hidden field', 'imps_value': 'hidden field', 'pers_value': 'hidden field', 'fixt_value': 'hidden field', 'exemp_amt': 'hidden field', 'net_value': 'hidden field', 'STArea__': 'hidden field', 'STLength__': 'hidden field', 'Parcel Number': 'header label - always visible', 'Address': 'hidden field', 'Project Links': 'inline label - always visible', 'Project Numbers': 'header label - always visible', 'Address (approximate)': 'header label - always visible', });
lyr_ProjectSites_4.set('fieldLabels', {'fid': 'hidden field', 'Address': 'hidden field', 'APN(s)': 'hidden field', 'Business Name': 'hidden field', 'Currently Operational Components of Approval': 'hidden field', 'Date approved for operations': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'doc': 'hidden field', });
lyr_ProjectSites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});