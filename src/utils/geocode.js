const request = require('request');
const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidmluZWV0OTQiLCJhIjoiY2p1dmgydzdiMDFteDN6and2bnBzODF3cSJ9.OSA_CiK7-xv2woU1AgP74w&limit=1`;
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback(`can't connect with the geocode service.`)
        }
        else if (body.features.length === 0) {
            callback(`unable to find the coordinates for locaion ${body.query[0]}`)
        }
        else {
            const lat = body.features[0].center[1];
            const long = body.features[0].center[0];
            const location = body.features[0].place_name
            callback(undefined, { lat: lat, long: long, location: location });
        }
    })
}

module.exports = geocode;