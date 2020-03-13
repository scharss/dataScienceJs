let myMap;
let canvas;
const mappa = new Mappa('Leaflet');


const options = {
    lat: 3.5289336,
    lng: -76.2966477,
    zoom: 4,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);



    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
}

function draw() {

    clear();

    var palmira = myMap.latLngToPixel(3.5289336, -76.2966477);

    fill("red");

    ellipse(palmira.x, palmira.y, 20, 20);
}