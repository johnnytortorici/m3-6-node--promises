// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
const env = require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: env.parsed.OPENCAGE_API_KEY,
    q: address,
  };

  return opencage.geocode(requestObj)
    .then((response) => { 
      let geometry = response.results[0].geometry;
      return geometry;
    })
    .catch((err) => {
      return err.message;
    });
};

// Concordia
getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response)); // { lat: 45.497118, lng: -73.579044 }

// Eiffel Tower
getPositionFromAddress(
  '5 Avenue Anatole France, 75007 Paris, France'
).then((response) => console.log(response)); // { lat: 48.8582602, lng: 2.2944991 }

// Colosseum
getPositionFromAddress(
  'Piazza del Colosseo, 1, 00184 Roma RM, Italy'
).then((response) => console.log(response)); // { lat: 41.8915062, lng: 12.4925537 }