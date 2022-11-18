const slider = document.querySelector("main-slider");
const container = document.querySelector("main-slider_box");
const slides = document.querySelector("main-slider_box__slide");
const navigations = document.querySelectorAll("main-slider_box__navigation");

let active0rder = 0;

function init() {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];

    slide.dataset.order = i;
  }

  active0rder = Math.floor(slides.length / 2);

  update();
}

function update() {}