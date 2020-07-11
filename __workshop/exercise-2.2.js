// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data; // 2
    })
    .catch((err) => console.log('Error: ', err));
};

// Testing
greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3
greeting('it').then((result) => console.log(result)); // { lang: 'Italian', code: 'IT', text: 'Salve' }
greeting('ja').then((result) => console.log(result)); // { lang: 'Japanese', code: 'JA', text: 'Konnichiwa' }