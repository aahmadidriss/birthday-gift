const slides = document.querySelectorAll("#slideshow img");
let current = 0;

// ganti foto tiap kali klik layar
document.body.addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
});

// pastikan musik play setelah interaksi (aturan browser)
document.body.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  }
}, { once: true });
