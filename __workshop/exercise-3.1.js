// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return { latitude: lat, longitude: lng } = parsedResponse.iss_position;
    })
    .catch((err) => {
      return JSON.parse(err);
    });
};

getIssPosition().then((result) => console.log(`Current ISS position: Latitude ${lat}, Longitude ${lng}`));
