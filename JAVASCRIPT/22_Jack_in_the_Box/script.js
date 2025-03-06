/* Getting the main container, button, and image elements from the html */
const main = document.querySelector("main");
const button = document.querySelector("button");
const img = document.querySelector("img");

/*  Loop through each child element of the main container */
for (let x = 0; x < main.childElementCount; x++) {
  /*  Add a click event listener to each child element */
  main.children[x].addEventListener("click", function () {
    /* Create a new audio element for playing sounds */
    const createAudio = document.createElement("audio");
    let secIndex; /* Variable to store the index of the element */

    /*  Determine the index of the element to modify. If it's the first element, this will return as 0. Otherwise, calculate the index using modulo */
    if (x == 0) {
      secIndex = 0;
    } else {
      secIndex = Math.floor((x + 1) % main.childElementCount);
    }

    const secElement = main.children[secIndex];
    const tempSrc2 = secElement.src;

    /*  Check if the clicked element does not have a class name */
    if (!this.className) {
      // If the clicked element is an image, update the button's text to  else
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

      /* Setting the audio to autoplay */
      createAudio.autoplay = true;

      /* In this section checks if the browser supports the audio */
      if (createAudio.canPlayType("audio/mpeg")) {
        /* Creating a source element for the audio. After creating the element we are setting the audio file path and its type */
        const source = document.createElement("source");
        source.setAttribute("src", "assets/audio/wow.mp3");
        source.type = "audio/mpeg";
        createAudio.appendChild(source);
      }

      /* Append the audio element to the main container to play the sound */
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
      /* Restore the element's original source */
      secElement.setAttribute("data-suprise-src", secElement.src);
      secElement.src = tempSrc2;

      /* Remove the audio element from the DOM */
      createAudio.remove();
    }, 2000);
  });
}
