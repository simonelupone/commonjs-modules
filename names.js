/**
 * function to generate an object with firstName and lastName parameters
 * 
 * @param {string} firstName - person name
 * @param {string} lastName - person surname
 * @returns {{firstName: string, lastName: string}} - object with fist name and last name
 */
const namesObj = (firstName, lastName) => ({ firstName, lastName });
// console.log(namesObj('simone', 'lupone'));

module.exports = namesObj;