let lastTime = Date.now();
var slideIndex = 1;
showSlides(slideIndex);
cycle();

function plusSlides(n=1) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function cycle() {
  if (Date.now() - lastTime > 7000){
    lastTime = Date.now();
    plusSlides(1);
  }
  setTimeout(cycle, 100);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("display_block");
  }
  slides[slideIndex-1].classList.add("display_block");
  lastTime = Date.now()
}
