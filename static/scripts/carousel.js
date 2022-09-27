



//const track =document.querySelector('.carousel_track');
//const slides= Array.from(track.children);
//const nextButton = document.querySelector('.carousel_button--right');
//const prevButton = document.querySelector('.carousel_button--left');
//onst dotsNav = document.querySelector ('.carousel_nav');
//const dots = Array.from(dotsNav.children);

//const slideWidth = slides[0].getBoundingClientRect().width;

//console.log(slideWidth);

//arrange slides next to one another
//slides[0].style.left = 0;
//slides[1].style.left = '200px';
//slides[0].style.left = 0;
//slides[0].style.left = 0;

//function setSlidePosition(slide, index) {
    //slide.style.left = slideWidth * index + 'px';

//slides.forEach = (setSlidePosition);


//when I click left, move slide to the left


//When I click right, move slide to the right
//nextButton.addEventListener('click', e=> {
    //const currentSlide = track.querySelector('.current-slide');
    //const nextSlide = currentSlide.nextElementSibling;
    //const amountToMove= nextSlide.style.left;
    //move to the next slide
    //track.style.tranform = 'translateX(-635.2px' + amountToMove +')';


//When I click nav indicators; move to that slide


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}