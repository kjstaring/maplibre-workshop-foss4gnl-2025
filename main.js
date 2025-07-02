import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

console.log("Ook hallo wereld vanaf Javascript!");
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});