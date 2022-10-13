const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToChooseFrom = document.querySelectorAll("img");

console.log("imagesToChooseFrom ", imagesToChooseFrom);

imagesToChooseFrom.forEach((img) => img.addEventListener("click", imageClick));

function imageClick(e) {
  imagesToChooseFrom.forEach((img) => (img.style.opacity = 1));
  console.log("e.target ", e.target);
  currentMainImage.src = e.target.src;
  e.target.style.opacity = 0.5;
}
