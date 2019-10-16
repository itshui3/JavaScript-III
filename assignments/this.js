/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever 'this' is called in global scope, it refers to window. The global object
* 2. Whenever a function(method) is called by a preceding dot, the object on the left of the dot is referred to by the 'this' used by invoked function. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this); // it's not inside of anything, it's in the global scope

// Principle 2

// code example for Implicit Binding

const coolAnimals = {
  animal: 'Anaconda',
  favThings: {
    food: 'Indian',
    animal: 'Panda',
    games: 'Overwatch',
    logFavFood: function() {
      console.log('Favorite Food: ', this.food)
    },
    logFavAnimal: () => {
      console.log('Favorite Animal: ', this.animal);
    },
    arrowLogThis: () => {
      console.log(this);
    }
  }
}
// const favThings = {
//   food: 'Indian',
//   animal: 'Panda',
//   games: 'Overwatch',
//   logFavFood: function() {
//     console.log('Favorite Food: ', this.food)
//   },
//   logFavAnimal: () => {
//     console.log('Favorite Animal: ', this.animal);
//   },
//   arrowLogThis: () => {
//     console.log(this);
//   }
// }

// coolAnimals.favThings.logFavFood();
// coolAnimals.favThings.logFavAnimal();
// coolAnimals.favThings.arrowLogThis();

// share this today

// Principle 3

// code example for New Binding

// I'm attempting to amass a large number of bags from various establishments
// this is a constructor that will let me generate ledgers to keep track of 
// my bag napping shenanigans
function Bag(obj) {
  this.material= obj.material,
  this.size= obj.size,
  this.store= obj.store,
  this.count= obj.count,
  this.steal= function(num) {
    return this.count += num;
  }
}

const safewayBag = new Bag({material: 'paper', size: 'large', store: 'safeway', count: 0});

// safewayBag.steal(5);
// console.log(safewayBag.steal(3));


// Principle 4

// code example for Explicit Binding

const whatAboutBoxes = {
  count: 0
}
safewayBag.steal.call(whatAboutBoxes, 10);
// console.log(safewayBag.steal.call(whatAboutBoxes, 5));

const whatAboutBurgers = {
  count: 0
}

