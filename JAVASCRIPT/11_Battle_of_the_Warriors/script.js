function randomAttack(strength) {
  let damage = Math.floor(Math.random() * strength);
  return damage;
}

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

function checkWinner(warriors, delay) {
  setTimeout(() => {
    if (warriors[0].health == warriors[1].health) {
      console.log("Its a draw");
    } else if (warriors[0].health > warriors[1].health) {
      console.log(warriors[0].name + " WINS the battle!");
    } else {
      console.log(warriors[1].name + " WINS the battle!");
    }
  }, delay * 10);
}

function startFight(warriors, delay) {
  let current = 0;
  function delayFight() {
    if (current < 10) {
      console.log("=== ROUND " + (current + 1) + " ===");
      console.log(
        warriors[1].name +
          " attacks " +
          warriors[0].name +
          " and does " +
          (warriors[0].health -= randomAttack(warriors[1].strength)) +
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
      console.log(
        warriors[0].name +
          " attacks " +
          warriors[1].name +
          " and does " +
          (warriors[1].health -= randomAttack(warriors[0].strength)) +
          " damage!\n" +
          warriors[0].name +
          " HP: " +
          warriors[0].health +
          " | " +
          warriors[1].name +
          " HP: " +
          warriors[1].health +
          "\n"
      );
      current++;
      setTimeout(delayFight, delay);
    }
  }
  delayFight();
}

function runApp(warriors, delay, startFight, checkWinner) {
  startFight(warriors, delay);
  checkWinner(warriors, delay);
}

runApp(warriors, 1000, startFight, checkWinner);
