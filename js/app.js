var cor1, cor2;

$(function() {
    $.getJSON('properties.json', function (data) {
        var elems = $('.json');
        for (key in data) {
            for (let i = 0; i < elems.length; i++) {
                if (elems[i].className.substr(5) === key) {
                    elems[i].innerText = data[key];
                }
            }
            cor1 = data.address[0];
            cor2 = data.address[1];
        }
        for (key in data.availability) {
            for (item in data.availability[key]){
                for (let i = 0; i < elems.length; i++) {
                    if (elems[i].className.substr(5) === item) {
                        elems[i].innerText = (data.availability[key])[item];
                    }
                }
            }
        }
    })
});

function initMap() {
    var dallas = {lat: cor1, lng: cor2};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: dallas});
    var marker = new google.maps.Marker({position: dallas, map: map});
}

$('.counter').text($('.availabilities table tr').length-1);
