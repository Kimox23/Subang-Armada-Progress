/* Array of warriors with their initial attributes */
let warriors = [
  {
    name: "Zeus",
    health: 100,
    strength: 12,
  },
  {
    name: "Thor",
    health: 100,
    strength: 12,
  },
];

/* Function to generate a random attack damage based on the warrior's strength */
function randomAttack(strength) {
  let damage = Math.floor(Math.random() * strength);
  return damage;
}

/* Function to simulate a fight between two warriors */
function startFight(warriors, delay) {
  let current = 0; // Track the current round

  /* Recursive function to execute battle rounds with delay */
  function delayFight() {
    if (current < 10) {
      // Limit the fight to 10 rounds
      let warriorAttack1 = randomAttack(warriors[0].strength); // Attack damage for Warrior 1
      let warriorAttack2 = randomAttack(warriors[1].strength); // Attack damage for Warrior 2
      console.log("=== ROUND " + (current + 1) + " ===");

      // Warrior 2 attacks Warrior 1
      warriors[0].health -= warriorAttack2;
      console.log(
        warriors[1].name +
          " attacks " +
          warriors[0].name +
          " and does " +
          warriorAttack2 +
          " damage!\n" +
          warriors[1].name +
          " HP: " +
          warriors[1].health +
          " | " +
          warriors[0].name +
          " HP: " +
          warriors[0].health +
          "\n"
      );

      // Warrior 1 attacks Warrior 2
      warriors[1].health -= warriorAttack1;
      console.log(
        warriors[0].name +
          " attacks " +
          warriors[1].name +
          " and does " +
          warriorAttack1 +
          " damage!\n" +
          warriors[1].name +
          " HP: " +
          warriors[1].health +
          " | " +
          warriors[0].name +
          " HP: " +
          warriors[0].health +
          "\n"
      );
      current++; // Increment round counter
      setTimeout(delayFight, delay); // Delay next round
    }
  }
  delayFight(); // Start the fight loop
}

/* Check Winner */
function checkWinner(warriors, delay) {
  setTimeout(() => {
    if (warriors[0].health == warriors[1].health) {
      console.log("Its a draw");
    } else if (warriors[0].health > warriors[1].health) {
      console.log(warriors[0].name + " WINS the battle!");
    } else {
      console.log(warriors[1].name + " WINS the battle!");
    }
  }, delay * 10); // Delay execution to ensure fight is complete
}

/* Function to determine the winner after the fight */
function runApp(warriors, delay, startFight, checkWinner) {
  startFight(warriors, delay); // Initiates the fight sequence
  checkWinner(warriors, delay); // Checks and announces the winner after the fight
}

/* Start the application */
runApp(warriors, 500, startFight, checkWinner);
