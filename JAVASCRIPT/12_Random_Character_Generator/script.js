const characterClass = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
const specialAbility = [
  "Fireball",
  "Healing Touch",
  "Stealth",
  "Lightning Strike",
  "Power Slash",
];
const defaultNameCharacter = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];

let character = {
  name: "Hero",
  health: 100,
  strength: 40,
  randomHealth: () => {
    return (this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50);
  },
  class: randomGenerator(characterClass),
  specialAbility: randomGenerator(specialAbility),
  attack: function () {
    return Math.floor(Math.random() * this.strength);
  },
  randomStrength: () => {
    return (this.strength =
      Math.floor(Math.random() * this.strength - 25 + 1) + 25);
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

//This will return or print randomly base on the length of an array
function randomGenerator(arr) {
  return arr[Math.floor(Math.random() * characterClass.length)];
}

function generateCharacter(name) {
  let genCharacter = { ...character };
  genCharacter.health = genCharacter.randomHealth();
  genCharacter.class = randomGenerator(characterClass);
  genCharacter.specialAbility = randomGenerator(specialAbility);
  if (name) {
    genCharacter.name = name;
    return genCharacter;
  } else {
    genCharacter.name = randomGenerator(defaultNameCharacter);
    return genCharacter;
  }
}

let character1 = generateCharacter();
let character2 = generateCharacter("Kim");

character1.battle(character2);
character2.battle(character1);

character1.battle(character2);
character2.battle(character1);
function generateMultipleCharacter(num) {
  let arr = [];
  for (let x = 0; x < num; x++) {
    arr.push(generateCharacter());
  }
  return arr;
}

console.log(generateMultipleCharacter(5));
