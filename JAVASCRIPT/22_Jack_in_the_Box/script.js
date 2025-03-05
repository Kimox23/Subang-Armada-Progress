const main = document.querySelector("main");
const button = document.querySelector("button");
const img = document.querySelector("img");

for (let x = 0; x < main.childElementCount; x++) {
  main.children[x].addEventListener("click", function () {
    const createAudio = document.createElement("audio");
    let secIndex;

    if (x == 0) {
      secIndex = 0;
    } else {
      secIndex = Math.floor((x + 1) % main.childElementCount);
    }
    const secElement = main.children[secIndex];
    const tempSrc2 = secElement.src;

    if (!this.className) {
      if (this.tagName == "IMG") {
        button.classList.add("active");
        button.innerText = "Close";
      } else {
        this.classList.add("active");
        this.innerText = "Close";
      }
      secElement.src = secElement.getAttribute("data-suprise-src");
      secElement.style.scale = "1.1";
      secElement.setAttribute("data-suprise-src", tempSrc2);
      setTimeout(() => {
        secElement.style.scale = "1";
      }, 700);

      createAudio.autoplay = true;

      if (createAudio.canPlayType("audio/mpeg")) {
        const source = document.createElement("source");
        source.setAttribute("src", "assets/audio/wow.mp3");
        source.type = "audio/mpeg";
        createAudio.appendChild(source);
      }
      main.appendChild(createAudio);
    }
    setTimeout(() => {
      if (this.tagName == "IMG") {
        button.classList.remove("active");
        button.innerText = "Click Me";
      } else {
        this.innerText = "Click Me";
        this.classList.remove("active");
      }
      secElement.setAttribute("data-suprise-src", secElement.src);
      secElement.src = tempSrc2;
      createAudio.remove();
    }, 2000);
  });
}
