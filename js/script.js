document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        var form = document.getElementById("geoForm");

        form.addEventListener("submit", function (evt) {

            evt.preventDefault();

            var name = form.elements["name"].value;
            var email = form.elements["email"].value;
            var description = form.elements["description"].value;
            var lat = form.elements["latitude"].value;
            var long = form.elements["longitude"].value;
            var map = document.getElementById("googleMap");

            map.style.display = "block";
            myMap(lat, long, name, description);

        });



    };
};
function myMap(lat, long, name, description) {
    var mapProp = {
        center: new google.maps.LatLng(lat, long),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        map: map,
        title: name + ' ' + description
    });
};