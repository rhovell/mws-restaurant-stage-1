// global variables
var burgerMenu = document.getElementById('burgerMenu');
var filterArea = document.getElementById('filterArea');
var filterBar = document.getElementById('filterBar');
let burgerTitle = document.getElementById('burgerHeader');
var body = document.body;
var scrollUp = document.getElementById("scrollUp");

// filter options function
// @description manages filter area display, hidden behind burger menu for mobiles
// (css display on screens over 600px)
// add event listener to burger menu
burgerMenu.addEventListener("click", toggleFilters);
// function that toggles display of filter
function toggleFilters(){
  // show filter area by adding open class
  filterArea.style.display = "block";
  filterBar.classList.toggle('open');
  // changes burger menu to close image
  burgerMenu.src = "img/close-button.svg";
  burgerMenu.alt = "Hide Filters";
  // add new eventListener to close filter options, remove toggleFilters
  burgerMenu.removeEventListener("click", toggleFilters);
  burgerMenu.addEventListener("click", hide);
}
// function to hide filters and display burger menu again
function hide(){
  // change image back to burger menu
  burgerMenu.src = "img/menu.png";
  burgerMenu.alt = "Show Filters";
  // hide filter area and remove open class to show thinner bar
  filterArea.style.display = "none";
  filterBar.classList.toggle('open');
  // removeEventListener for hide function
  burgerMenu.removeEventListener("click", hide);
  // re-add the eventListener to show filters
  burgerMenu.addEventListener("click", toggleFilters);
}

// scroll to top of page loaded on element click
scrollUp.addEventListener("click", topFunction);
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
