
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




// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});

$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel({interval: 500, wrap: false});
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

//carousel-p2


// Activate Carousel
$("#myCarousel2").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel2").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel2").carousel("prev");
});

$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel2").carousel({interval: 500, wrap: false});
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel2").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel2").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel2").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel2").carousel(3);
  });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel2").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel2").carousel("next");
  });
});


// Activate Carousel
$("#myCarousel2").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel2").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel2").carousel("prev");
});

