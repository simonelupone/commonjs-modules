const names = require('./names.js');
const hobbies = require('./hobbies.js');

const newObject = () => ({ fullName: names('simone', 'lupone'), hobbies: hobbies('dormire', 'mangiare', 'giocare') })
console.log(newObject());