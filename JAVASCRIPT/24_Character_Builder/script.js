/* Getting the element in the html */
const characterPrev = document.getElementById("character-preview");
const armorSelection = document.getElementById("character-selection");

/* Creating an object default character */
const character = {
  helmet: "assets/img/Arctic_Hood.png",
  armor: "assets/img/Arctic_Jacket.png",
  leggings: "assets/img/Arctic_Leggings.png",
  boots: "assets/img/Arctic_Boots.png",
  nameSet: ["Arctic Hood, Arctic Jacket, Arctic Leggings, Arctic Boots"],
};

/* Creating an array of objects armor sets  */
const armorClothes = [
  {
    helmet: "assets/img/Fiery_Helmet.png",
    armor: "assets/img/Fiery_Chestplate.png",
    leggings: "assets/img/Fiery_Leggings.png",
    boots: "assets/img/Fiery_Boots.png",
    nameSet: ["Fiery Helmet, Fiery Chestplate, Fiery Leggings, Fiery Boots"],
  },
  {
    helmet: "assets/img/Ironwood_Helmet.png",
    armor: "assets/img/Ironwood_Chestplate.png",
    leggings: "assets/img/Ironwood_Leggings.png",
    boots: "assets/img/Ironwood_Boots.png",
    nameSet: [
      "Ironwood Helmet, Ironwood Chestplate, Ironwood Leggings, Ironwood Boots",
    ],
  },
  {
    helmet: "assets/img/Knightmetal_Helmet.png",
    armor: "assets/img/Knightmetal_Chestplate.png",
    leggings: "assets/img/Knightmetal_Greaves.png",
    boots: "assets/img/Knightmetal_Boots.png",
    nameSet: [
      "Knightmetal Helmet, Knightmetal Chestplate, Knightmetal Greaves, Knightmetal Boots",
    ],
  },
  {
    helmet: "assets/img/Steeleaf_Helmet.png",
    armor: "assets/img/Steeleaf_Chestplate.png",
    leggings: "assets/img/Steeleaf_Leggings.png",
    boots: "assets/img/Steeleaf_Boots.png",
    nameSet: [
      "Steeleaf Helmet, Steeleaf Chestplate, Steeleaf Leggings, Steeleaf Boots",
    ],
  },
  {
    helmet: "assets/img/Yeti_Horned_Helm.png",
    armor: "assets/img/Yeti_Jacket.png",
    leggings: "assets/img/Yeti_Leggings.png",
    boots: "assets/img/Yeti_Boots.png",
    nameSet: ["Yeti Horned Helm, Yeti Jacket, Yeti Leggings, Yeti Boots"],
  },
];

function characterSelection() {
  /* Create a <ul> element to hold the armor sets */
  const createUl = document.createElement("ul");

  /* Loop through each armor set and create a list item for it */
  armorClothes.forEach((armorSet) => {
    const createLi = document.createElement("li");
    const helmetImg = document.createElement("img");
    const bootsImg = document.createElement("img");
    const armorImg = document.createElement("img");
    const leggingsImg = document.createElement("img");

    /* Set the source for each armor piece in the set */
    helmetImg.src = armorSet.helmet;
    armorImg.src = armorSet.armor;
    leggingsImg.src = armorSet.leggings;
    bootsImg.src = armorSet.boots;

    createLi.appendChild(helmetImg);
    createLi.appendChild(armorImg);
    createLi.appendChild(leggingsImg);
    createLi.appendChild(bootsImg);

    /* Append the list item to the <ul> */
    createUl.appendChild(createLi);
  });
  armorSelection.appendChild(createUl);
}

/* Function to add click event listeners to the armor selection images */
function addEventCharacterSelect() {
  /* Loop through each list item in the armor selection */
  for (let x in armorSelection.children[0].children) {
    /* Loop through each image in the list item */
    for (
      let y = 0;
      y < armorSelection.children[0].children[x].childElementCount;
      y++
    ) {
      /* Add a click event listener to each image */
      armorSelection.children[0].children[x].children[y].addEventListener(
        "click",
        function () {
          /*  Get the armor names for the clicked set */
          const splitName = armorClothes[x].nameSet;
          const name = splitName.toString().split(", ");
          const tempSrc = characterPrev.children[y].src;

          /* Update the character preview with the clicked armor piece */
          characterPrev.children[y].src = this.src;
          characterPrev.children[y].alt = name[y];
          characterPrev.children[y].dataset.dataPart = tempSrc; // Store the old source in a data attribute
        }
      );
    }
  }
}

/* Function to create the character preview and handle character creation */
function characterCreation(callback, secondCallBack) {
  characterPrev.innerHTML = "";
  /*  Create elements for the character's armor and a button to finalize the character */
  const createButton = document.createElement("button");
  const helmet = document.createElement("img");
  const armor = document.createElement("img");
  const leggings = document.createElement("img");
  const boots = document.createElement("img");

  /* Set the source for each armor piece using the default character data */
  helmet.src = character.helmet;
  armor.src = character.armor;
  leggings.src = character.leggings;
  boots.src = character.boots;

  /* Set the button text */
  createButton.innerText = "Create Character";

  /* Append the armor images and button to the DOM */
  characterPrev.appendChild(helmet);
  characterPrev.appendChild(armor);
  characterPrev.appendChild(leggings);
  characterPrev.appendChild(boots);

  document.querySelector("main").appendChild(createButton);

  callback();
  secondCallBack();

  /* Add a click event listener to the "Create Character" button */
  createButton.addEventListener("click", function () {
    /* Split the default armor names into an array*/
    const splitName = character.nameSet;
    const defaultName = splitName.toString().split(", ");

    /* Determine the chosen armor names */
    const chosenHelmet = helmet.alt ? helmet.alt : defaultName[0];
    const chosenArmor = armor.alt ? armor.alt : defaultName[1];
    const chosenLeggings = leggings.alt ? leggings.alt : defaultName[2];
    const chosenBoots = boots.alt ? boots.alt : defaultName[3];

    /* Display an alert with the character's armor details */
    alert(
      `Character Created!! \nDetails:\n Helmet: ${chosenHelmet}\n Armor: ${chosenArmor}\n Leggings: ${chosenLeggings}\n Boots: ${chosenBoots}`
    );
  });
}

characterCreation(characterSelection, addEventCharacterSelect);
