/*
Exercise File for Week 1 Source, see Week1.txt for details
*/

/*
These are functions, but why the weird syntax?
*/
const personOne = favoriteFoods => {
  /*insert functionality here*/
    for(let x = 0; x < favoriteFoods.length; x++)
      console.log(favoriteFoods[x])
};

const personTwo = favoriteMovies => {
  /*insert functionality here*/
  for(let x = 0; x < favoriteMovies.length; x++)
    console.log(favoriteMovies[x])
};

const personThree = favoriteAnimals => {
  /*insert functionality here*/
  for(let x = 0; x < favoriteAnimals.length; x++)
    console.log(favoriteAnimals[x])
};

/*
What does this variable syntax do?
*/
const favoriteFoods = ["Apples","Oranges","Soup"],
  favoriteMovies = ["Spongebob", "Star Wars", "Spiderman"],
  favoriteAnimals = ["Dog", "Cheetah", "Cat"];

const iceBreaker = () => {
  personOne(favoriteFoods);
  personTwo(favoriteMovies);
  personThree(favoriteAnimals);
};

iceBreaker();
