const sliderContainer = document.getElementById('sliderContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;

function showSlides() {
  const slides = sliderContainer.getElementsByTagName('img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = sliderContainer.getElementsByTagName('img').length;
  }
  showSlides();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > sliderContainer.getElementsByTagName('img').length) {
    slideIndex = 1;
  }
  showSlides();
});

showSlides();