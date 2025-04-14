const names = require('./names.js');
const hobbies = require('./hobbies.js');

// string version
// const personInfo = names('simone', 'lupone');
// const personHobbies = hobbies('dormire', 'mangiare', 'giocare');
// const newObject = () => ({ fullName: personInfo.firstName + ' ' + personInfo.lastName, hobbies: personHobbies.join(', ') });

const newObject = () => ({ fullName: names('simone', 'lupone'), hobbies: hobbies('dormire', 'mangiare', 'giocare') })
console.log(newObject());