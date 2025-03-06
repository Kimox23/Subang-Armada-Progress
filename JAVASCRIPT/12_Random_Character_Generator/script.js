/* In this section we are defining an array of character classes, abilities and default names */
const characterClass = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
const specialAbility = [
  "Fireball",
  "Healing Touch",
  "Stealth",
  "Lightning Strike",
  "Power Slash",
];
const defaultNameCharacter = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];

/* In this section we are defining a base character object with default properties and methods */
let character = {
  name: "Hero",
  health: 100,
  strength: 40,
  /* This method generate random health between 50 and 150 */
  randomHealth: function () {
    return Math.floor(Math.random() * (150 - 50 + 1)) + 50;
  },
  class: randomGenerator(characterClass), // Randomly assign a class
  specialAbility: randomGenerator(specialAbility), // Randomly assign a special ability
  // This method calculate a random attack damage based on strength
  attack: function () {
    return Math.floor(Math.random() * this.strength);
  },
  /* This method generate random strength between 25 and the current strength */
  randomStrength: function () {
    return Math.floor(Math.random() * (this.strength - 25 + 1)) + 25;
  },
  battle: function (char) {
    let health = char.health;

    let damageHealth = char.health - this.attack();
    char.health = damageHealth;
    console.log(
      `Character ${this.name} attacked Character ${char.name} with ${this.specialAbility}. ${char.name}'s health dropped from ${health} to ${damageHealth}`
    );
  },
};

/* Function to randomly select an element from an array */
function randomGenerator(arr) {
  return arr[Math.floor(Math.random() * characterClass.length)];
}

function generateCharacter(name) {
  /* In here this will create a copy of the base character object 
  after that we will assign values such as random class, health and special ability*/
  let genCharacter = { ...character };
  genCharacter.health = genCharacter.randomHealth();
  genCharacter.class = randomGenerator(characterClass);
  genCharacter.specialAbility = randomGenerator(specialAbility);
  genCharacter.strength = genCharacter.randomStrength();

  /*  If a name is provided, this will execute 
  Otherwise, this will assign a random name*/
  if (name) {
    genCharacter.name = name;
    return genCharacter;
  } else {
    genCharacter.name = randomGenerator(defaultNameCharacter);
    return genCharacter;
  }
}

/* Generate two characters, one with a default name and one named "Kim" */
let character1 = generateCharacter();
let character2 = generateCharacter("Kim");

/* Simulate battles between the two characters*/
character1.battle(character2);
character2.battle(character1);

character1.battle(character2);
character2.battle(character1);

/*  Function to generate multiple characters */
function generateMultipleCharacter(num) {
  let arr = [];
  for (let x = 0; x < num; x++) {
    arr.push(generateCharacter()); // This will add a new character to the array
  }
  return arr;
}

// Generate and log 5 random characters
console.log(generateMultipleCharacter(5));
