var form = document.getElementById("contact-form");

form.addEventListener("submit", function() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  if(name != " "){
    return true;
  } else {
    alert("You can't submit the form without a full name!");
    event.preventDefault();
    return false;
  }
  if(email != " "){
    return true;
  } else {
    alert("You can't submit the form without a full name!");
    event.preventDefault();
    return false;
  }
  if(message != " "){
    return true;
  } else {
    alert("You can't submit the form without a full name!");
    event.preventDefault();
    return false;
  }
});

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
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
