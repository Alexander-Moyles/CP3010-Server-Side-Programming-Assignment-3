// MongoDB Playground

// Select the database to use.
use('rickmorty');

// Insert a few documents into the sales collection.
db.getCollection('characters').insertMany([
  {
    "id":1,
    "name":"Rick Sanchez",
    "image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    "id":2,
    "name":"Morty Smith",
    "image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  },
]);

// Test to see if it's working
console.log(db.getCollection('characters').find({}));
