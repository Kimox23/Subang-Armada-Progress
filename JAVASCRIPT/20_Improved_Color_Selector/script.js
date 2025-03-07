document.getElementById("container").addEventListener("click", function () {
  this.style.backgroundColor = "yellow";
});

document.querySelectorAll(".color-box").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Uncomment this to see the difference

    document.querySelectorAll(".color-box").forEach((btn) => {
      btn.classList.remove("selected");
    });

    document.body.style.backgroundColor =
      window.getComputedStyle(this).backgroundColor;
    document.getElementById("container").style.backgroundColor =
      window.getComputedStyle(this).backgroundColor;

    document.querySelector("p:nth-child(4)").innerText =
      "Selected Color: " + this.innerText;

    document.body.style.color = window.getComputedStyle(this).color;
    this.classList.add("selected");
  });
});
