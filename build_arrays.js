/*
 * LEVEL 1 - Standard Arrays
 **/

// Create an empty array.
var empty_array = [];

// Create an array of the colors of the rainbow.
var rainbow = ["red","orange","yellow","green","blue","indigo","violet"];

// Create an array of gems.
var gems = ["diamond","sapphire","ruby","carnelite","emerald","opal"];

// Create an array of military ranks.
var military_ranks = ["private","sergeant","corporal","lieutenant","general","commander"];

// Create an array of road signs.
var road_signs = ["stop","slow","no right turn","yield"];

// Create an array containing components of a tree.
var tree_parts = ["bark","roots","canopy","trunk"];

// Create an array of prime numbers less than 20.
var primenum = [1,2,3,5,7,11,13,17,19];

// Create an array of words programmers typically say while programming.
var progwords = ["shit","dammit","why is it not working","i dont get it","syntax error","debug","my god why","commit"];

// Create an array of elements of the periodic table.
var elements = ["iron","carbon","hydrogen","oxygen","uranium"];

// Create an array representing the coins currently in your pocket.
var coins = ["quarter","penny","dime","nickel"];

// Create an array of items you bring to class daily.
var dailyitems = ["laptop","coffee","phone","edc knife"];

// Create an array of web developer role titles.
var webtitles = ["designer","UI developer","script kiddy"];

// Create an array of good luck charms.
var luckcharm = ["coin","rabbit foot","4 leaf clover","hair","war trophy"];

// Create an array of mythical animals.
var mythanimals = ["phoenix","chimera","dragon","hydra","wyvern","basilisk","ogre"];

// Create an array of drinks.
var drinks = ["soda","milk","juice","beer","wine"];

// Create an array of emoticons.
var emoticons = ["happy","sad","dealwithit"];

// Create an array with the letters of the word 'array'.
var spellarray = ["a","r","r","a","y"];



/*
 * LEVEL 2 - Object Arrays
 **/

// Create an array of Objects that represent Famous People.
// Each Object should have a Name, Age, and their Profession as properties
var famous_people = [{
  abraham :{
    name : "Abraham",
    age : 170, // no idea
    job : "POTUS"
  },
  brandon :{
    name : "Brandon",
    age : 30,
    job : "dork"
  },
  hitler :{
    name : "Hitler",
    age : 100, // no idea v2
    job : "Artist"
  }
}];
// Create an array of songs you'd like Jon to add to the playlist of music 
// to listen to in class.  Each song should be an object with at least 
// a title and an artist.
var songs = [{
  somesong1 : {
    title : "sometitle1",
    artist : "someartist1"
  },
  somesong2 : {
    title : "sometitle2",
    artist : "someartist2"
  }
}];

// Create an array of functions. Define any functions you want, they can 
// be anything! But make sure the syntax is correct :D
var manapua = [{
  duck : {
    meat : "duck",
    bread : "baked",
    cheap : false
  },
  pork : {
    meat : "pork",
    bread : "steamed",
    cheap : true
  },
  curry : {
    meat : "chicken",
    bread : "baked",
    cheap : true
  }
}];

// Create an array of Sublime shortcuts.  Each item should have a keystroke 
// combination and a textual description of what the key combination does. 
// You can find Sublime Text Shortcuts by traversing the Sublime Text's GUI
// e.g. File Menu options.

var sublime_keys = [{
  select_word : {
    combo : "ctrl + d",
    text : "Selects word"
  },
  select_line : {
    combo : "ctrl + l",
    text : "Selects line"
  },
  select_all : {
    combo : "ctrl + a",
    text : "selects all"
  }
}];


/*
 * LEVEL 3 - Nested Arrays
 **/

// Create an array of gem arrays, where each gem array contains gems that 
// are of a similar color.
var gem_colors = [{
  red_gems : ["ruby","hyacinth","garnet"],
  blue_gems : ["sapphire","cobalt","turqoise"],
  yellow_gems : ["Topaz","Citrine"]
}];

// Create an array of aisles at a supermarket.  Each aisle is an array of 
// items you might find in an aisle together.  (e.g. flour and baking 
// powder would be found in an aisle together so would Apples and Bananas.)
var aisles = [{
  fruits : ["apples","bananas","oranges"],
  cleaners : ["detergeant","soap","bleach"],
  baking : ["flour","baking","cake mix"]
}];

// Create an array of three arrays, each array having numbers that add up 
// to 15, but having no element listed more than once in any array.
// e.g. each element can only be in one array, and at most once in each array
var fifteensum = [{
  combo1 : [1,2,3,4,5],
  combo2 : [6,9],
  combo3 : [0,15]
}];



