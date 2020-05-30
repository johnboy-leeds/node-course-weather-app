const request = require('request');

const mapbox_api_token = 'pk.eyJ1IjoiamhpY2tsaW5nIiwiYSI6ImNrYXBvMDY1dzFoMGgycm12ZGs0ejh6b3gifQ.z51omvWjCFC1zn1Cg2b_-Q';

const geocode = (address, callback) => { 
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapbox_api_token}&limit=1`
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to maps API");
      return;
    }
  
    const { features = [] } = response.body;
    if (features.length === 0) {
      callback('Location not found');
      return
    }

    const [longitude, latitude] = features[0].center;
    callback(undefined, {
      latitude,
      longitude,
      location: features[0].place_name,
    });
  })
}

module.exports = geocode;
