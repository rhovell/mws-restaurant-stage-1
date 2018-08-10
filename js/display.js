// global variables
var burgerMenu = document.getElementById('burgerMenu');
var filterArea = document.getElementById('filterArea');
var filterBar = document.getElementById('filterBar');
let burgerTitle = document.getElementById('burgerHeader');

// add eventListener to window to detect for resizing
window.addEventListener("resize", filterOptions);
// window.addEventListener("resize", largeScreenFilters);
// call the filterOptions function to ensure correct correct display on load
filterOptions();
// filter options function
// @description manages filter area display, hidden behind burger menu for mobiles
function filterOptions(){
  // add event listener to burger menu
  burgerMenu.addEventListener("click", toggleFilters);
  // function that toggles display of filter
    function toggleFilters(){
    // if filterArea display currently none
    // if(filterArea.style.display === "none"){
      // show filter area, increase bar height, change image and hide title
      // burgerTitle.style.display = "block";
      filterArea.style.display = "block";
      // filterBar.style.height = '170px';
      filterBar.classList.toggle('open');
      // filterBar.classList.add('open');
      // changes burger menu to close image
      burgerMenu.src = "img/close-button.svg";
      burgerMenu.alt = "Hide Filters";
      // add new eventListener to close filter options, remove toggleFilters
      burgerMenu.removeEventListener("click", toggleFilters);
      burgerMenu.addEventListener("click", hide);
    }
    // function to hide filters and display burger menu again
      function hide(){
        // if filterArea display currentl set to block
        // if(filterArea.style.display === "block"){
          // hide filter area, decrease bar height, change image and show title
          // filterArea.style.display = "none";
          burgerMenu.src = "img/menu.png";
          // filterBar.style.height = '50px';
          // burgerTitle.style.display = "block";
          filterBar.classList.toggle('open');
          // filterBar.classList.add('closed');
          // removeEventListener for hide function
          burgerMenu.removeEventListener("click", hide);
          // re-add the eventListener to show filters
          burgerMenu.addEventListener("click", toggleFilters);
        // }
      }
    }


var body = document.body;
var scrollUp = document.getElementById("scrollUp");
scrollUp.addEventListener("click", topFunction);

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
