// ********************** BIND ***********************

var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + "I choose you!");
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

var logPokemon = pokemonName.bind(pokemon);
logPokemon("You", "Miss_You");

//--------------------- X ----------------------

var a = {
  firstname: "Bala",
  lastname: "Murugan",
  getFull: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var manoj = function (b, c) {
  console.log(this.getFull() +" "+ "Where are You");
  console.log(this.getFull() + " "+"I Am " + b + " and " + c);
};

var details = manoj.bind(a);
details("FINE", "YOU");

// ********************** CALL & APPLY ***********************

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function () {
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   },
// };

// var pokemonName = function (snack, hobby) {
//   console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
// };

// pokemonName.call(pokemon, "sushi", "algorithms"); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon, ["sushi", "algorithms"]); // Pika Chu  loves sushi and algorithms
