
// Object

// const person={
//     name:'Marc',
//     age: 38,
//     location:{
//         city:'Santpedor',
//         temp:32
//     } 
// }

// const {name ='Anonymous', age } = person

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location

// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book={
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// Array

// const address = ['cadi 33', 'Santpedor', 'Catalunya', '08251']

// const [, city, state] = address

// console.log(`You're in ${city}, ${state}`);

const item =['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`);