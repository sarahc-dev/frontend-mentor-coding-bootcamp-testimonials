const buttons = document.querySelectorAll(".arrow-btn");
const images = document.querySelectorAll(".img-container");
const texts = document.querySelectorAll(".container");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log("clicked");

    images.forEach((image) => {
      image.classList.toggle("hidden");
    });
    texts.forEach((text) => {
      text.classList.toggle("hidden");
    });
  });
});
