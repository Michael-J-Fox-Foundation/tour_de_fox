var map = L.mapbox.map('map', 'sfaomx09.l37c7kb2', {
    shareControl: true,
    // SETTING ZOOM LEVELS
    maxZoom: 13,
    minZoom: 4,
    legendControl: {
        position: 'bottomleft'
    }
})
.setView([43.329, -71.411], 7)
.addControl(L.mapbox.geocoderControl('sfaomx09.jklmc311'));

var layerClimb = omnivore.kml(climbMarkers.kmlUrl)
    .on('ready', function () {
        map.fitBounds(layerClimb.getBounds());

        layerClimb.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: climbMarkers.iconPath,
                iconSize: [icon_size, icon_size]
            }))
        });

        layerClimb.eachLayer(function (layer) {
            //Date: June 7, 2015
            //Elevation: 4,393 ft.
            //<img
            //src="http://www2.michaeljfox.org/images/content/pagebuilder/VTpic.jpg"/>
            //<a
            //href="http://www2.michaeljfox.org/site/TR?company_id=1024&fr_id=1440&pg=company">http://www2.michaeljfox.org/site/TR?company_id=1024&fr_id=1440&pg=company
            //</a>

            var markerDesc = layer.feature.properties.description;
            var markerDescArray = markerDesc.split("\n");

            var markerDate;
            var markerElevation;
            var markerImage;
            var markerUrl;

            if (markerDescArray.length == 7) {
                markerDate = markerDescArray[0];
                markerElevation = markerDescArray[1];
                markerImage = markerDescArray[2] + " " + markerDescArray[3];
                markerUrl = markerDescArray[4] + " " + markerDescArray[5] + " " + markerDescArray[6];

                var markerHref = markerUrl.match(/href="([^"]*)/)[1];

                markerImage = markerImage.replace("<img", "<img width='280' height='150'");

                var markerDescFinal = "<div><div class='marker-desc'><span>" + layer.feature.properties.name + "</span><br>";
                markerDescFinal += markerElevation + "<br>";
                markerDescFinal += markerDate + "<br></div>";
                markerDescFinal += "<div style='float:right;'><img src='" + climbMarkers.iconZoomedPath + "' class='icon-detail' /></div>";
                markerDescFinal += "<div style='clear:both;'></div>" + markerImage;
                markerDescFinal += "<a class='viewClimbLink' target='_blank' href='" + markerHref + "'>Join Sam</a>";

                layer.bindPopup(markerDescFinal, { closeButton: false, keepInView: true });
            }
            else {
                console.log("Invalid KML placemark description: " + markerDesc);
            }
        });
    })
    .addTo(map);

var layerCelebrate = omnivore.kml(celebrationMarkers.kmlUrl)
    .on('ready', function () {
        map.fitBounds(layerCelebrate.getBounds());

        layerCelebrate.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: climbMarkers.iconPath,
                iconSize: [icon_size, icon_size]
            }))
        });

        layerCelebrate.eachLayer(function (layer) {
            //Date: June 4, 2015
            //<a
            //href="http://www2.michaeljfox.org/site/TR?company_id=1022&fr_id=1440&pg=company">http://www2.michaeljfox.org/site/TR?company_id=1022&fr_id=1440&pg=company
            //</a>

            var markerDesc = layer.feature.properties.description;
            var markerDescArray = markerDesc.split("\n");

            var markerDate;
            var markerUrl;

            // removed logic for broken kml files
            if (markerDescArray.length == 4) {
                markerDate = markerDescArray[0];
                markerUrl = markerDescArray[1] + " " + markerDescArray[2] + " " + markerDescArray[3];

                var markerHref = markerUrl.match(/href="([^"]*)/)[1];

                var markerDescFinal = "<div><div class='marker-desc'><span>" + layer.feature.properties.name + "</span><br>";
                markerDescFinal += markerDate + "<br></div>";
                markerDescFinal += "<div style='float:right;'><img src='" + celebrationMarkers.iconZoomedPath + "' class='icon-detail' /></div>";
                markerDescFinal += "<div style='clear:both;'></div>";
                markerDescFinal += "<a class='viewClimbLink' target='_blank' href='" + markerHref + "'>Join Sam</a>";

                layer.bindPopup(markerDescFinal, { closeButton: false, keepInView: true });
            } 
            else {
                console.log("Invalid KML placemark description: " + markerDesc);
            }
        });
    })
    .addTo(map);


var layerRide = omnivore.kml(rideMarkers.kmlUrl)
    .on('ready', function () {
        map.fitBounds(layerRide.getBounds());

        layerRide.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: rideMarkers.iconPath,
                iconSize: [icon_size, icon_size]
            }))
        });

        layerRide.eachLayer(function (layer) {
            //Date: July 21-22, 2015
            //Jackson, WY - Cooke City, MT
            //<img
            //src="http://www2.michaeljfox.org/images/content/pagebuilder/Yellowstone.jpg"/>
            //<a
            //href="http://www2.michaeljfox.org/site/TR?company_id=1053&fr_id=1440&pg=company">http://www2.michaeljfox.org/site/TR?company_id=1053&fr_id=1440&pg=company
            //</a>

            var markerDesc = layer.feature.properties.description;
            var markerDescArray = markerDesc.split("\n");

            var markerDate;
            var markerLocation
            var markerImage;
            var markerUrl;

            if (markerDescArray.length == 7) {
                markerDate = markerDescArray[0];
                markerLocation = markerDescArray[1];
                markerImage = markerDescArray[2] + " " + markerDescArray[3];
                markerUrl = markerDescArray[4] + " " + markerDescArray[5] + " " + markerDescArray[6];

                var markerHref = markerUrl.match(/href="([^"]*)/)[1];

                markerImage = markerImage.replace("<img", "<img width='280' height='150'");

                var markerDescFinal = "<div><div class='marker-desc'><span>" + layer.feature.properties.name + "</span><br>";
                markerDescFinal += markerDate + "<br>";
                markerDescFinal += markerLocation + "<br></div>";
                markerDescFinal += "<div style='float:right;'><img src='" + rideMarkers.iconZoomedPath + "' class='icon-detail' /></div>";
                markerDescFinal += "<div style='clear:both;'></div>" + markerImage;
                markerDescFinal += "<a class='viewClimbLink' target='_blank' href='" + markerHref + "'>Join Sam</a>";

                layer.bindPopup(markerDescFinal, { closeButton: false, keepInView: true });
            }
            else {
                console.log("Invalid KML placemark description: " + markerDesc);
            }
        });
    })
    .addTo(map);


// General Route
var customLayerGeneral = L.geoJson(null, {
    style: function (feature) {
        return {
            color: generalRouteObj.color,
            opacity: 100
        };
    }
});

var routeLayerGeneral = omnivore.kml(generalRouteObj.kmlUrl, null, customLayerGeneral)
    .on('ready', function () {
        map.fitBounds(this.getBounds());
    })
.addTo(map);


// Climb Route
var customLayerClimb = L.geoJson(null, {
    style: function (feature) {
        return {
            color: climbRouteObj.color,
            opacity: 100
        };
    }
});

var routeLayerClimb = omnivore.kml(climbRouteObj.kmlUrl, null, customLayerClimb)
    .on('ready', function () {
        map.fitBounds(this.getBounds());
    })
.addTo(map);


// Ride Route
var customLayerRide = L.geoJson(null, {
    style: function (feature) {
        return {
            color: rideRouteObj.color,
            opacity: 100
        };
    }
});

var routeLayerRide = omnivore.kml(rideRouteObj.kmlUrl, null, customLayerRide)
    .on('ready', function () {
        map.fitBounds(this.getBounds());
    })
.addTo(map);


map.markerLayer.on('layeradd', function (e) {
    var marker = e.layer,
        feature = marker.feature;

    marker.setIcon(L.icon(feature.properties.icon));
});

map.on('ready', function () {
    map.fitBounds(map.markerLayer.getBounds());
});
map.markerLayer.setGeoJSON(geojson);

// Change icon on zoom level
map.on('zoomend', function () {
    if (map.getZoom() >= 7) {
        layerClimb.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: climbMarkers.iconZoomedPath,
                iconSize: [icon_zoomed_size, icon_zoomed_size]
            }))
        });

        layerCelebrate.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: celebrationMarkers.iconZoomedPath,
                iconSize: [icon_zoomed_size, icon_zoomed_size]
            }))
        });

        layerRide.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: rideMarkers.iconZoomedPath,
                iconSize: [icon_zoomed_size, icon_zoomed_size]
            }))
        });
    }
    else {
        layerClimb.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: climbMarkers.iconPath,
                iconSize: [icon_size, icon_size]
            }))
        });

        layerCelebrate.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: celebrationMarkers.iconPath,
                iconSize: [icon_size, icon_size]
            }))
        });

        layerRide.eachLayer(function (marker) {
            marker.setIcon(L.icon({
                iconUrl: rideMarkers.iconPath,
                iconSize: [icon_size, icon_size]
            }))
        });
    }
});


// Filter Climb
var filter_climb = document.getElementById('filter-climb');

filter_climb.onclick = function (e) {
    var hideMarkers = false;

    if (filter_climb.innerHTML == "Hide") {
        filter_climb.innerHTML = "Show";
        hideMarkers = true;
    }
    else {
        filter_climb.innerHTML = "Hide";
        hideMarkers = false;
    }

    if (true == hideMarkers) {
        map.removeLayer(layerClimb);
    }
    else {
        map.addLayer(layerClimb);
    }

    return false;
};

// Filter Celebrate
var filter_celebrate = document.getElementById('filter-celebrate');

filter_celebrate.onclick = function (e) {
    var hideMarkers = false;

    if (filter_celebrate.innerHTML == "Hide") {
        filter_celebrate.innerHTML = "Show";
        hideMarkers = true;
    }
    else {
        filter_celebrate.innerHTML = "Hide";
        hideMarkers = false;
    }

    if (true == hideMarkers) {
        map.removeLayer(layerCelebrate);
    }
    else {
        map.addLayer(layerCelebrate);
    }

    return false;
};


// Filter Ride
var filter_ride = document.getElementById('filter-ride');

filter_ride.onclick = function (e) {
    var hideMarkers = false;

    if (this.innerHTML == "Hide") {
        this.innerHTML = "Show";
        hideMarkers = true;
    }
    else {
        this.innerHTML = "Hide";
        hideMarkers = false;
    }

    if (true == hideMarkers) {
        map.removeLayer(layerRide);
    }
    else {
        map.addLayer(layerRide);
    }

    return false;
};


// Filter Route. This functionality was removed so was the div with id of filter-route
// var filter_route = document.getElementById('filter-route');

// filter_route.onclick = function (e) {
//     var hideRoute = false;

//     if (this.innerHTML == "Hide") {
//         this.innerHTML = "Show";
//         hideRoute = true;
//     }
//     else {
//         this.innerHTML = "Hide";
//         hideRoute = false;
//     }

//     if (true == hideRoute) {
//         map.removeLayer(routeLayerGeneral);
//         map.removeLayer(routeLayerClimb);
//         map.removeLayer(routeLayerRide);
//     }
//     else {
//         map.addLayer(routeLayerGeneral);
//         map.addLayer(routeLayerClimb);
//         map.addLayer(routeLayerRide);
//     }

//     return false;
// };

