import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";

console.log("Ook hallo wereld vanaf Javascript!");

const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: './assets/style.json',
    center: [5.66509, 51.96857], // starting position [lng, lat]
    zoom: 13 // starting zoom
});

map.on('load', () => {
        map.addSource('route', {
            'type': 'geojson',
            'data': './assets/wandeling.geojson'
            }
        );
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#356307',
                'line-width': 4,
                'line-dasharray': [2,2]
            }
        })});