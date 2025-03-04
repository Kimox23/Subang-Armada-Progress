const main = document.querySelector("main");
const button = document.querySelector("button");
const img = document.querySelector("img");

for (let x = 0; x < main.childElementCount; x++) {
  main.children[x].addEventListener("click", function () {
    let secIndex;

    if (x == 0) {
      secIndex = 0;
    } else {
      secIndex = Math.floor((x + 1) % main.childElementCount);
    }
    const secElement = main.children[secIndex];
    const tempSrc2 = secElement.src;

    console.log(tempSrc2);

    if (!this.className) {
      secElement.src = secElement.dataset.supriseSrc;
      secElement.dataset.supriseSrc = tempSrc2;
      secElement.classList.add("active");
      secElement.innerText = "Close";
      this.style.visibility = "0";
    } else {
      this.style.visibility = "1";
      secElement.src = tempSrc2;
      secElement.innerText = "Click Me";
      secElement.classList.remove("active");
    }
  });
}
