console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// - Create an empty array named `myCollection`.
let myCollection = [];
console.log('This is my collection of albums', myCollection);

/*
- Create a function named `addToCollection`. It should have this basic structure:
  - ```js
      function addToCollection(collection, title, artist, yearPublished) {
        // your code here...
      }
    ```
  - This function should:
    - Take in a `collection` parameter. (This allows the function to be reused to add an album to any array of album objects.)
    - Take in the album's `title`, `artist`, `yearPublished` as parameters.
    - Create a new object having the above properties.
      - *NOTE*: Your object's properties **must** have `title`, `artist`, and `yearPublished` in order for this assignment's automated tests to work correctly!
    - Add the new object to the end of the `collection` array.
    - `return` the newly created object.
*/

function addToCollection(collection, title, artist, yearPublished) {
  // Creating a new object with the properties: title, artist, yearpublished
  const newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  // Adding object to the end of the my collection array
  collection.push(newAlbum);

  // Return the newly created object
  return newAlbum;
}

const newAlbum = addToCollection(myCollection, "Thriller", "Michael Jackson", 1982);

console.log('Collection with new album', myCollection); // console log array with new object
console.log('This is my new album', newAlbum);     // console log new album object


// - Use and Test the `addToCollection` function:
//   - Add 6 albums to the `myCollection` array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - `console.log` each album as added using the function's returned value.
//   - After all are added, console.log the `myCollection` array.


// Adding 6 albums to myCollection
const album1 = addToCollection(myCollection, "MBDTF", "Kanye West", 2010);
const album2 = addToCollection(myCollection, "Blueprint", "Jay-Z", 2001);
const album3 = addToCollection(myCollection, "Take Care", "Drake", 2011);
const album4 = addToCollection(myCollection, "Is This It", "The Strokes", 2001);
const album5 = addToCollection(myCollection, "Views", "Drake", 2016);
const album6 = addToCollection(myCollection, "Stadium Arcadium", "Red Hot Chili Peppers", 2006);

// Logging each album as added
console.log('This is an album', album1);
console.log('This is an album', album2);
console.log('This is an album', album3);
console.log('This is an album', album4);
console.log('This is an album', album5);
console.log('This is an album', album6);

// Logging the myCollection array
console.log(myCollection);

// - Create a function named `showCollection`. This function should:
//   - Take in a `collection` parameter. (This allows it to be reused to show any array of album objects.)
//   - Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEAR`.
function showCollection(collection) {
for (let albums of collection) {
  // console.log(albums);
  console.log(`${albums.title} by ${albums.artist} published in ${albums.yearPublished}`)
}
}

// - Test the `showCollection` function.
let displayCollection = showCollection(myCollection);
console.log(displayCollection);

// - Add a function named `findByArtist`. This function should:
//   - Take in a `collection` parameter. Remember, we want to be able to search any collection!
//   - Take in an `artist` (string) parameter.
//   - Create an empty array to hold any matching results, if any.
//   - Loop through the `collection` and add any album objects with a matching artist to the array.
//   - Return the array with the matching results. (If no results are found, an empty array should be returned.)

let findByArtist = function (collection, matchingArtist) {
  //This is my empty array
  let newAlbumsCollection = [];
  //console logging new array and collection im taking in
  console.log('This is my empty collection of albums looking to match Drake', newAlbumsCollection);
  console.log('This is my collection of albums', collection);
  //Looping over the array
  for (let collectionItem of collection) {
    console.log('Going through my albums', collectionItem);
    //Filtering results for a match with conditional
    if (collectionItem.artist === matchingArtist) {
        console.log('Found my Drake albums', collectionItem);
        //pushing matched results to the new list
        newAlbumsCollection.push(collectionItem);
    }
  }
  //Returning new list with matching results
  return newAlbumsCollection;
}


// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.

let filteredCollection = findByArtist(myCollection, 'Drake');
console.log('These are all my Drake albums', filteredCollection);



// - Create a function called `search` that will allow for searching by `artist` **and** `year`. This function should:
//   - Take in a `collection` parameter.
//   - Take in a `searchCriteria` parameter. Create your solution based on a *search object* that has these properties:
//     - ```
//       { artist: 'Ray Charles', year: 1957 }
//       ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching **all** of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object, an empty search object, or missing `artist`/`year` data provided as input, `return` **all albums** from the `collection` being searched.

let searchObject = {
  artist: 'Drake',
  yearPublished: 2011,
}

console.log(`This is the object I'm searching for`, searchObject);

let search = function (collection, searchCriteria) {
  let favoriteAlbumSet = []
  console.log('This is my favorite album set', favoriteAlbumSet);

  for (let favoriteAlbums of collection) {
    console.log('Looking for my favorite album', favoriteAlbums);
    if (favoriteAlbums.artist === searchCriteria.artist && favoriteAlbums.yearPublished === searchCriteria.yearPublished) {
        console.log('My favorite album match', favoriteAlbums);
        //pushing matched results to the new list
        favoriteAlbumSet.push(favoriteAlbums);
      }
    }
    return favoriteAlbumSet;
}


let showFavoriteAlbums = search(myCollection, searchObject);
console.log('This is my favorite album', showFavoriteAlbums);


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
