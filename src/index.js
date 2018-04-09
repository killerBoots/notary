function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 38.958010, lng: -84.572022},
    mapTypeId: 'terrain'
  });

  // Define the LatLng coordinates for the polygon's path.
  var coverageCoords = [
    {lat: 39.141906, lng: -84.748697},
    {lat: 39.055453, lng: -84.890102},
    {lat: 38.970343, lng: -84.826409},
    {lat: 38.908154, lng: -84.876233},
    {lat: 38.886376, lng: -84.788171},
    {lat: 38.858641, lng: -84.791018},
    {lat: 38.780534, lng: -84.661928},
    {lat: 38.794186, lng: -84.603628},
    {lat: 38.806760, lng: -84.422011},
    {lat: 38.876017, lng: -84.233750},
    {lat: 39.031688, lng: -84.336116},
    {lat: 39.050262, lng: -84.425987},
    {lat: 39.118300, lng: -84.457465},
    {lat: 39.071570, lng: -84.617239}
  ];

  // Construct the polygon.
  var notaryCoverage = new google.maps.Polygon({
    paths: coverageCoords,
    strokeColor: '#2f9083',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#20d2bc',
    fillOpacity: 0.15
  });
  notaryCoverage.setMap(map);
}
