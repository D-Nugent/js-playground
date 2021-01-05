let shaniaTwain = {
    givenName: {
        first: 'Eileen',
        middle: 'Regina',
        last: 'Edwards'
    },
    chosenName: {
        first: 'Eileen',
        middle: 'Shania',
        last: 'Twain'
    },
    born: 1965,
    birthday: 'August 28',
    died: null,
    placeOfBirth: 'Windsor, Ontario, CA',
    spouses: [
        {
            name: 'Robert John "Mutt" Lange',
            married: 1993,
            divorced: 2010
        },
        {
            name: 'Frédéric Thiébaud',
            married: 2011,
            divorced: null
        }
    ],
    children: [
        {
            name: "Eja D'Anglelo Lange",
            born: 2001,
            died: null,
            birthday: 'August 12',
            parents: ['Robert John "Mutt" Lange', 'Shania Twain']
        }
    ],
    albums: [
        {
            id: 0,
            title: 'Beginnings',
            releaseYear: 1989,
            label: 'Jomato Records',
            genres: ['Electronic', 'Rock'],
            producer: ['Paul Sabu', 'Harry Hinde']
        },
        {
            id: 1,
            title: 'Shania Twain',
            releaseYear: 1993,
            label: 'Mercury',
            genres: ['Country', 'Rock'],
            producer: ['Harold Shedd', 'Norro Wilson']
        },
        {
            id: 2,
            title: 'The Woman in Me',
            releaseYear: 1995,
            label: 'Mercury Nashville',
            genres: ['Country', 'Rock', 'Pop'],
            producer: ['Robert John "Mutt" Lange']
        },
        {
            id: 3,
            title: 'Come On Over',
            releaseYear: 1997,
            label: 'Mercury',
            genres: ['Country', 'Rock', 'Pop'],
            producer: ['Robert John "Mutt" Lange']
        },
        {
            id: 4,
            title: 'Up!',
            releaseYear: 2002,
            label: 'Mercury',
            genres: ['Country', 'Rock', 'Pop'],
            producer: ['Robert John "Mutt" Lange', 'Simon & Diamond Duggal']
        }
    ]
}

// ===== control flow =====
//for loop
// write a for loop that iterates through each Shania Twain album and prints the title to the console.

for (let i = 0; i < shaniaTwain.albums.length; i++) {
    console.log(shaniaTwain.albums[i].title);
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
//while loop
// write a while loop that iterates through each Shania Twain album and prints the release year to the console
let albumCount = 0
while (albumCount < shaniaTwain.albums.length) {
    console.log(shaniaTwain.albums[albumCount].releaseYear);
    albumCount++
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

//ternary operator
// write a function that accepts a year as an input, and returns whether or not Shania was born in that year.

const yearCheck = (year) => {
    year === shaniaTwain.born ? console.log(`Shania was born this year, in ${year}`) : console.log(`Shania was not born this year, in ${year} - you're ${Math.abs(year-shaniaTwain.born)} years off`)
}

yearCheck(2003);
yearCheck(1945);
yearCheck(1965);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

//short circut
/* write a function that takes a year as an input, and if there was a Shania Twain album released in that year,
 it will print 'The album [title] was released in the year [year]' to the console - otherwise it will print
 'There was no album released in the year [year]'.*/

const albumArray = [...shaniaTwain.albums]

const albumYearCheck = (year) => {
    let currentAlbum
    const albumShift = () => {
        currentAlbum = albumArray.shift()
        return currentAlbum
    }
    year === albumShift().releaseYear || year === albumShift().releaseYear || year === albumShift().releaseYear || year === albumShift().releaseYear || year === albumShift().releaseYear ?
    console.log(`The album ${currentAlbum.title} was released in the year ${year}`)
    :
    console.log(`There was no album released in the year ${year}`);
}

albumYearCheck(1995)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

// ===== data within objects/arrays =====
// object: dot notation
// use dot notation for the next 2 questions:
    // 1. print Shania's birthday to the console
    console.log(shaniaTwain.birthday);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    // 2. print Shania's place of birth to the console
    console.log(shaniaTwain.placeOfBirth);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
// object: bracket notation
//use the following variables & bracket notation for the next 2 questions:
    let f = 'first';
    let m = 'middle';
    let l = 'last';

    // 1. print Shania's given name to the console
    console.log(`${shaniaTwain.givenName[f]} ${shaniaTwain.givenName[m]} ${shaniaTwain.givenName[l]}`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    // 2. print Shania's chosen/current name to the console
    console.log(`${shaniaTwain.chosenName[f]} ${shaniaTwain.chosenName[m]} ${shaniaTwain.chosenName[l]}`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

// array: bracket notation w index
// use bracket notation and index values to retrieve the following information:
    // 1. print the title of the first album released to the console
    let a = 'albums'
    let t = 'title'
    console.log(shaniaTwain.albums[0].title);
    console.log(shaniaTwain[a][0][t]);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    // 2. print the title of the last album released to the console
    console.log(shaniaTwain[a][shaniaTwain[a].length-1][t]);
    console.log(shaniaTwain[a][4][t]);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    
    
    // ===== array methods =====
    // use your knowledge of array methods to complete the next set of questions:
    
    // How many albums has Shania released?
    console.log(`Shania has released ${shaniaTwain.albums.length} albums`);
    
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    // Create a variable that holds only the albums that were produced by Robert Lange.
    const rLangeAlbums = shaniaTwain.albums.filter(album => album.producer.toString().includes('Lange'))

    console.log(rLangeAlbums);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    // Turns out the album 'Beginnings' was released under her given name. Remove the album from the array of albums using the album's index value.
    const removedAlbum = shaniaTwain.albums.splice(0,1) 
    console.log(removedAlbum);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    /* Looks like we forgot to add an album to the list! Shania released the album 'Now' in 2017 under the label
    Mercury Nashville. The genres for the album are Country, Rock, Pop & Folk and was produced by Ron Aniello,
    Jake Gosling, Jacquire King, Matthew Koma & Shania Twain herself. Go and create an object for this album
    and add it to the end of the array.*/
    const nowAlbum = {
        id: shaniaTwain.albums.length+1,
        title: 'Now',
        releaseYear: 2017,
        label: 'Mercury Nashville',
        genres: ['Country', 'Rock', 'Pop', 'Folk'],
        producer: ['Ron Aniello', 'Jake Gosling', 'Jacquire King', 'Matthew Koma', 'Shania Twain']
    };
    shaniaTwain.albums.push(nowAlbum);
    console.log(shaniaTwain.albums);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    // Seems like we're having a change of heart. What is a name anyways? Go and find the information for the album 'Beginnings' and add it back to the beginning of the array. 
    shaniaTwain.albums.unshift(removedAlbum.shift());
    console.log(shaniaTwain.albums);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

// ===== using array methods that are HOF =====
// We're builidng a site that needs a few tidbits of information to display:

// The first is a list of the titles of all Shania's albums. Create an array that holds all the titles.
let albumTitles = shaniaTwain.albums.map(album => album.title)
console.log(albumTitles);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
/* We'll also need to display the years as well, but no need to store them in a variable. 
Let's just iterate through the albums and print the year to the console. */
shaniaTwain.albums.forEach(album => {
    console.log(album.releaseYear);
});
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
/* We want to write a small article about Shania's marriages, but let's find out a few things first just to make
 sure our article is accurate. */
/* Has at least one of her marriages ended in divorce? Has every marriage ended in divorce? Find a way to return
 a boolean for these.*/
console.log('Has at least one marriage ended in divorce?');

singleDivorce = [...shaniaTwain.spouses]
 
singleDivorce.shift().divorced || singleDivorce.shift().divorced ? console.log(true) : console.log(false);

console.log('Has every marriage ended in divorce?');

allDivorce = [...shaniaTwain.spouses]
 
allDivorce.shift().divorced && allDivorce.shift().divorced ? console.log(true) : console.log(false);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
/* Maybe we should check that our albums array has the proper information in it. Does it include the album titled
 'Beginnings'? and the album 'Now'? Those are the two we removed/added. Let's check this by using code and not
  printing our object to the console.*/

const titlesToCheck = ['Beginnings', 'Now']

const titleChecker = (array) => {
    array.every((val) => shaniaTwain.albums.map(album => album.title).includes(val))?
    console.log("All of the albums are accounted for!"):console.log("Uh-oh it looks like there's an album missing");
};

titleChecker(titlesToCheck);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
/* Let's go and take all the genres of music that are listed on Shania's albums and condense them into one singular
 array - remember to not include duplicates!*/

let genreArray = [].concat.apply([], shaniaTwain.albums.map(album => album.genres)).sort().filter((genre, index, array) => genre !== array[index-1]);
console.log(genreArray);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
/* Maybe we should sort that array so all the genres are in alphabetical order?*/
/* Let's go and take the code we used to compile the genres and rewrite it to be a function that accepts a parameter
 for the array location for each album genre, and reuse it for the producers in order to compile a list of all the
 producers that she's worked with. */

 const removeDuplicates = (array, keyName) => {
    return [].concat.apply([], array.map(items => items[keyName])).sort().filter((item, index, array) => item !== array[index-1]);
 }
 console.log(removeDuplicates(shaniaTwain.albums, 'producer'));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');

