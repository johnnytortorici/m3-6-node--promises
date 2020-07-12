// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
const env = require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: env.parsed.OPENCAGE_API_KEY,
    q: `${lat}, ${lng}`,
  };

  return opencage.geocode(requestObj)
  .then((response) => {
    let formatted = response.results[0].formatted;
    return formatted;
  })
}

// Eiffel Tower
getAddressFromPosition('48.8582602', '2.2944991').then((response) =>
  console.log(response) // 5 Avenue Anatole France, 75007 Paris, France
);

// Pantheon
getAddressFromPosition('41.8986', '12.4769').then((response) =>
  console.log(response) // Pantheon, Piazza della Rotonda, 00186 Rome Roma Capitale, Italy
);

// Taj Mahal
getAddressFromPosition('27.1751', '78.0421').then((response) =>
  console.log(response) // Taj Mahal, Taj Mahal Internal Path, Taj Ganj, Agra - 282001, Uttar Pradesh, India
);