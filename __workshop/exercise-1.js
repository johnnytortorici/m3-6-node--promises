// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  let promise = new Promise((resolve, reject) => {
    let allCapsArray = array.map((word) => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject(`${word} is not a string!`);
      }
    });
    resolve(allCapsArray);
  });
  return promise;
};

const sortWords = (array) => {
  let promise = new Promise((resolve) => {
    resolve(array.sort());
  });
  return promise;
};

// Calling (testing)

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
