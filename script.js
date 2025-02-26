document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded!");

  // --- Popup ---
  let popup = document.getElementById("popup");
  let openBtn = document.getElementById("need-help");
  let closeBtn = popup.querySelector(".close-btn");
  let overlay = popup.querySelector(".overlay");

  openBtn.addEventListener("click", function () {
    popup.classList.add("active");
  });

  function closePopup() {
    popup.classList.remove("active");
  }

  closeBtn.addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);

  // --- Slider ---
  let currentSlide = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  let autoSlide;

  function showSlide(index) {
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  window.nextSlide = function () {
    showSlide(currentSlide + 1);
  };

  window.prevSlide = function () {
    showSlide(currentSlide - 1);
  };
});
