// "Animsition"

$(document).ready(function() {
  $(".animsition").animsition({
    inClass               :   'fade-in-up-sm',
    inDuration            :    1000,
    linkElement           :   '.animsition-link',
    loading               :    true,
    loadingParentElement  :   'div#wrapper',
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    overlay               :   false,
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'div#wrapper'
  });
});


// w3schools Slideshow : https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //slides[slideIndex-1].style.display = "block";
}
