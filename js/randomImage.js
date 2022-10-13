const myButton = document.querySelector("button");
const image = document.querySelector("img");
const images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg"];

myButton.addEventListener("click", changeImage);

function changeImage() {
  let randomIndex = Math.floor(Math.random() * images.length);
  console.log(randomIndex);

  image.src = "images/" + images[randomIndex];
}
