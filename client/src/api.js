"use strict";

const API_KEY = "AIzaSyBqt7iKC_GUzNScBkKMF9vi52WIUYFw-m4";
const RELAY_KEY = "9a178d38-6296-11ed-a09d-8692b700d4d6";

const GEOCODE_ENDPOINT = "https://maps.googleapis.com/maps/api/geocode/json";
const SEARCH_ENDPOINT = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const RELAY_ENDPOINT = "http://localhost:3000";

async function callEndpoint(endpoint, request) {
    const data = await (fetch(endpoint + "?" + new URLSearchParams({
        key: API_KEY,
        ...request
    })).then((response) => response.json()));

    if (data.status === "OK") {
        return data.results;
    } else {
        throw new Error(data.status);
    }
}

async function getCoord(address) {
    return (await callEndpoint(GEOCODE_ENDPOINT, {
        address
    }))[0].geometry.location;
}

async function getCentre(addresses) {
    const coords = await Promise.all(addresses.map(getCoord));
    let latsum = 0, lngsum = 0;
    for (let coord of coords) {
        latsum += coord.lat;
        lngsum += coord.lng;
    }

    return { lat: latsum / coords.length, lng: lngsum / coords.length };
}

async function nearby(request) {
    const data = await callEndpoint(request);
}

export default async function getPlaces(query, addresses, extraAddr) {
    const centre = await getCentre(addresses.map((addr) => addr + extraAddr));
    return callEndpoint(RELAY_ENDPOINT, {
        relayKey: RELAY_KEY,
        endpoint: SEARCH_ENDPOINT,
        location: `${centre.lat},${centre.lng}`,
        radius: 5000,
        query
    });
}
