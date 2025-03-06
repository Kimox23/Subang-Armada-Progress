/* Getting the element in the html */
const characterSelection = document.querySelector("ul");
let characterPreview = document.getElementById("character-preview");

/* Array of objects Greek mythology characters with their details or properties */
const greekMythologyCharacters = [
  {
    name: "Zeus",
    alt: "The king of the gods, god of the sky and thunder.",
    src: "assets/img/8.jpg",
    active: "selected",
    description:
      "Ruler of Mount Olympus and god of the sky, lightning, and thunder.",
    specialAbility: "Control over lightning and storms.",
    strength: 100,
    hp: 250,
  },
  {
    name: "Ares",
    alt: "God of war and violence.",
    src: "assets/img/4.jpg",
    description:
      "Personification of war, associated with the brutal and chaotic aspect of battle.",
    specialAbility: "Ability to incite chaos and bloodlust in battle.",
    strength: 90,
    hp: 200,
  },
  {
    name: "Poseidon",
    alt: "God of the sea, earthquakes, and horses.",
    src: "assets/img/6.jpg",
    description: "Ruler of the seas and protector of all waters.",
    specialAbility: "Control over the oceans and ability to create storms.",
    strength: 95,
    hp: 240,
  },
  {
    name: "Hades",
    alt: "God of the underworld and the dead.",
    src: "assets/img/5.jpg",
    description: "Ruler of the underworld, where souls reside after death.",
    specialAbility: "Control over the dead and the ability to summon spirits.",
    strength: 85,
    hp: 220,
  },
  {
    name: "Athena",
    alt: "Goddess of wisdom, warfare, and crafts.",
    src: "assets/img/3.jpg",
    description:
      "Goddess of strategic warfare, wisdom, and the protector of heroes.",
    specialAbility: "Unmatched wisdom and tactical prowess.",
    strength: 80,
    hp: 210,
  },
  {
    name: "Apollo",
    alt: "God of the sun, music, and prophecy.",
    src: "assets/img/2.jpg",
    description:
      "God of light, music, healing, and prophecy, known for his beauty.",
    specialAbility: "Ability to foretell the future and heal the sick.",
    strength: 75,
    hp: 200,
  },
  {
    name: "Artemis",
    alt: "Goddess of the hunt, wilderness, and childbirth.",
    src: "assets/img/1.jpg",
    description: "Protector of wild animals and the guardian of young women.",
    specialAbility:
      "Exceptional hunting skills and the ability to control nature.",
    strength: 70,
    hp: 190,
  },
  {
    name: "Aphrodite",
    alt: "Goddess of love and beauty.",
    src: "assets/img/7.jpg",
    description: "Goddess who represents love, beauty, and desire.",
    specialAbility: "Ability to inspire love and passion in others.",
    strength: 60,
    hp: 180,
  },
  {
    name: "Hermes",
    alt: "Messenger of the gods, god of speed and commerce.",
    src: "assets/img/9.jpg",
    description: "God of travel, trade, and communicating messages.",
    specialAbility:
      "Unmatched speed and the ability to move freely between the realms.",
    strength: 70,
    hp: 185,
  },
];

/* Loop through each character in the array to create and display them */
for (let x = 0; x < greekMythologyCharacters.length; x++) {
  /* This section create an element for the character */
  const character = document.createElement("li");
  const img = document.createElement("img");

  /* If the character has the 'active' property, add the 'selected' class to the list item */
  if (greekMythologyCharacters[x].active) {
    character.classList = greekMythologyCharacters[x].active;
  }

  /* Set the image source and alt text from the character data */
  img.src = greekMythologyCharacters[x].src;
  img.alt = greekMythologyCharacters[x].alt;
  character.appendChild(img);

  /* In these section are setting up the values of characterPreview children elements*/
  characterPreview.children[0].children[0].src =
    greekMythologyCharacters[x].src;
  characterPreview.children[1].innerHTML = greekMythologyCharacters[x].name;
  characterPreview.children[2].innerHTML =
    "Description: " + greekMythologyCharacters[x].description;
  characterPreview.children[3].innerHTML =
    "Special Ability: " + greekMythologyCharacters[x].specialAbility;
  characterPreview.children[4].innerHTML =
    "HP: " + greekMythologyCharacters[x].hp;
  characterPreview.children[5].innerHTML =
    "Strengh: " + greekMythologyCharacters[x].strength;

  characterSelection.appendChild(character);

  /* This section add a click event listener to the list item created */
  character.addEventListener("click", function () {
    for (let x = 0; x < greekMythologyCharacters.length; x++) {
      if (characterSelection.children[x].className) {
        characterSelection.children[x].classList.remove("selected");
      }
    }
    character.classList = "selected";

    /* This section update the preview elements with the character details */
    characterPreview.children[0].children[0].src =
      greekMythologyCharacters[x].src;
    characterPreview.children[1].innerHTML = greekMythologyCharacters[x].name;
    characterPreview.children[2].innerHTML =
      "Description: " + greekMythologyCharacters[x].description;
    characterPreview.children[3].innerHTML =
      "Special Ability: " + greekMythologyCharacters[x].specialAbility;
    characterPreview.children[4].innerHTML =
      "HP: " + greekMythologyCharacters[x].hp;
    characterPreview.children[5].innerHTML =
      "Strengh: " + greekMythologyCharacters[x].strength;
  });
}
