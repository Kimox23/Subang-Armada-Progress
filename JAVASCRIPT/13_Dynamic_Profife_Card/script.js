let forms = document.querySelectorAll("form");
let sections = document.querySelectorAll("section");

// Update Name
forms[0].addEventListener("submit", updateName);

function updateName(e) {
  e.preventDefault();
  let nameInput = forms[0].querySelector("input[name='name']");
  let nameDisplay = sections[1].querySelector("h3");

  if (nameInput && nameDisplay) {
    nameDisplay.innerText = nameInput.value;
  }
}

// Update Bio
forms[1].addEventListener("submit", updateBio);

function updateBio(e) {
  e.preventDefault();
  let bioInput = forms[1].querySelector("input[name='bio']");
  let bioDisplay = sections[1].querySelector("p");

  if (bioInput && bioDisplay) {
    bioDisplay.innerText = bioInput.value;
  }
}

// Update Profile Picture
forms[2].addEventListener("submit", updateProfilePic);

function updateProfilePic(e) {
  e.preventDefault();
  let imgInput = forms[2].querySelector("input[name='photo']");
  let profileImg = sections[0].querySelector("img");

  if (imgInput && profileImg) {
    profileImg.src = imgInput.value;
  }
}

// Change Background Color
forms[3].addEventListener("submit", updateBackground);

function updateBackground(e) {
  e.preventDefault();
  let colorInput = forms[3].querySelector("input[name='color']");

  if (colorInput) {
    document.getElementById("card").style.backgroundColor = colorInput.value;
  }
}
