// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...
const greeting = (langCode) => {
    return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
        .then((response) => JSON.parse(response))
        .then((parsedResponse) => {
            return parsedResponse.data; // 2
        })
        .catch((err) => {
            // if err.error is true (contains info), convert that info
            // from string back to object (via parse) and return obj
            return err.error ? JSON.parse(err.error) : err;
        });
};

// Testing
greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3
greeting('it').then((result) => console.log(result)); // { lang: 'Italian', code: 'IT', text: 'Salve' }
greeting('ja').then((result) => console.log(result)); // { lang: 'Japanese', code: 'JA', text: 'Konnichiwa' }

// 4 - Test error
greeting('jp').then((result) => console.log(result)); // { lang: 'Japanese', code: 'JA', text: 'Konnichiwa' }