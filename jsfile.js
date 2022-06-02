var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 10000); // Change image every 10 seconds
}
function navmenuFunction() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("main-doc");
  if (x.className === "menunav") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "menunav";
    y.className = "main-doc";
  }
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


