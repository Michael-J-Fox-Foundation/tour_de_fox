var icon_size = 15;
var icon_zoomed_size = 30;

var geojson = [{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-66.922118, 46.904452 ]
      },
      "properties": {
        "icon": {
            "iconUrl": "http://secure3.convio.net/mjff/images/content/pagebuilder/start.png",
            "iconSize": [1, 1], // size of the icon
           // "iconAnchor": [15, 15], // point of the icon which will correspond to marker's location
           // "popupAnchor": [-12, -23], // point from which the popup should open relative to the iconAnchor
          //  "className": "dot"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-127.922118, 49.904452 ]
      },
      "properties": {
        "icon": {
            "iconUrl": "http://secure3.convio.net/mjff/images/content/pagebuilder/finish.png",
            "iconSize": [1, 1], // size of the icon
           // "iconAnchor": [15, 15], // point of the icon which will correspond to marker's location
           // "popupAnchor": [-12, -23], // point from which the popup should open relative to the iconAnchor
          //  "className": "dot"
        }
      }
    }];


   function MapMarker(kmlUrl, iconPath, iconZoomedPath) {
       this.kmlUrl = kmlUrl;
       this.iconPath = iconPath;
       this.iconZoomedPath = iconZoomedPath;
   }

   function MapRoute(kmlUrl, color) {
       this.kmlUrl = kmlUrl;
       this.color = color;
   }