const characterPrev = document.getElementById("character-preview");
const armorSelection = document.getElementById("character-selection");

const character = {
  helmet: "assets/img/Arctic_Hood.png",
  armor: "assets/img/Arctic_Jacket.png",
  leggings: "assets/img/Arctic_Leggings.png",
  boots: "assets/img/Arctic_Boots.png",
  nameSet: ["Arctic Hood, Arctic Jacket, Arctic Leggings, Arctic Boots"],
};

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

function characterCreation(callback, secondCallBack) {
  characterPrev.innerHTML = "";
  const createButton = document.createElement("button");
  const helmet = document.createElement("img");
  const armor = document.createElement("img");
  const leggings = document.createElement("img");
  const boots = document.createElement("img");

  helmet.src = character.helmet;
  armor.src = character.armor;
  leggings.src = character.leggings;
  boots.src = character.boots;
  createButton.innerText = "Create Character";

  characterPrev.appendChild(helmet);
  characterPrev.appendChild(armor);
  characterPrev.appendChild(leggings);
  characterPrev.appendChild(boots);

  document.querySelector("main").appendChild(createButton);

  if (callback) {
    callback();
    secondCallBack();
  }

  createButton.addEventListener("click", function () {
    const splitName = character.nameSet;
    const defaultName = splitName.toString().split(", ");
    const chosenHelmet = helmet.alt ? helmet.alt : defaultName[0];
    const chosenArmor = armor.alt ? armor.alt : defaultName[1];
    const chosenLeggings = leggings.alt ? leggings.alt : defaultName[2];
    const chosenBoots = boots.alt ? boots.alt : defaultName[3];
    alert(
      `Character Created!! \nDetails:\n Helmet: ${chosenHelmet}\n Armor: ${chosenArmor}\n Leggings: ${chosenLeggings}\n Boots: ${chosenBoots}`
    );
  });
}

function characterSelection() {
  if (!armorSelection) return;

  const createUl = document.createElement("ul");

  armorClothes.forEach((armorSet) => {
    const createLi = document.createElement("li");
    const helmetImg = document.createElement("img");
    const bootsImg = document.createElement("img");
    const armorImg = document.createElement("img");
    const leggingsImg = document.createElement("img");

    helmetImg.src = armorSet.helmet;
    armorImg.src = armorSet.armor;
    leggingsImg.src = armorSet.leggings;
    bootsImg.src = armorSet.boots;

    createLi.appendChild(helmetImg);
    createLi.appendChild(armorImg);
    createLi.appendChild(leggingsImg);
    createLi.appendChild(bootsImg);

    createUl.appendChild(createLi);
  });
  armorSelection.appendChild(createUl);
}

function addEventCharacterSelect() {
  for (let x in armorSelection.children[0].children) {
    for (
      let y = 0;
      y < armorSelection.children[0].children[x].childElementCount;
      y++
    ) {
      armorSelection.children[0].children[x].children[y].addEventListener(
        "click",
        function () {
          const splitName = armorClothes[x].nameSet;
          const name = splitName.toString().split(", ");
          const tempSrc = characterPrev.children[y].src;
          characterPrev.children[y].src = this.src;
          characterPrev.children[y].alt = name[y];
          characterPrev.children[y].dataset.dataPart = tempSrc;
        }
      );
    }
  }
}

characterCreation(characterSelection, addEventCharacterSelect);
