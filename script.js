const slides = document.querySelectorAll("#slideshow img");
let current = 0;

document.body.addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
});
