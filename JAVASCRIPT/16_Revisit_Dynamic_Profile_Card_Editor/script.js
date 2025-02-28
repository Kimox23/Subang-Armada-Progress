const form = document.querySelector("form");
const nameText = document.querySelector("h3");
const bioText = document.querySelector("p");
const imgView = document.querySelector("img");
const profile = document.getElementById("card");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData);
  console.log(formObject);
  e.preventDefault();
  nameText.innerHTML = formObject.name;
  bioText.innerHTML = formObject.bio;
  imgView.src = formObject.photo;
  profile.style.backgroundColor = formObject.color;
});
