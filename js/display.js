// global variables
var burgerMenu = document.getElementById('burgerMenu');
var filterArea = document.getElementById('filterArea');
var filterBar = document.getElementById('filterBar');
let burgerTitle = document.getElementById('burgerHeader');

// add eventListener to window to detect for resizing
window.addEventListener("resize", filterOptions);
window.addEventListener("resize", largeScreenFilters);
// call the filterOptions function to ensure correct correct display on load
filterOptions();
// filter options function
// @description manages filter area display, hidden behind burger menu for mobiles
function filterOptions(){
  console.log("screen change")
  console.log(screen.width)
  // screens below 600px wide
  let screenWidth = screen.width;
  if(screenWidth <= '599'){
    console.log("less than 600px")
  filterArea.style.display = "none";
  burgerMenu.style.display = "block";
  burgerTitle.style.display = "block";
  // add event listener to burger menu
  burgerMenu.addEventListener("click", toggleFilters);
  // function that toggles display of filter
    function toggleFilters(){
    console.log("toggle filters called")
    // if filterArea display currently none
    if(filterArea.style.display === "none"){
      console.log("if display none")
      // show filter area, increase bar height, change image and hide title
      burgerTitle.style.display = "none";
      filterArea.style.display = "block";
      filterBar.style.height = '170px';
      // changes burger menu to close image
      burgerMenu.src = "img/close-button.svg";
      // burgerMenu.title = "Hide Filters";
      // add new eventListener to close filter options, remove toggleFilters
      burgerMenu.removeEventListener("click", toggleFilters);
      burgerMenu.addEventListener("click", hide);
    }
    // function to hide filters and display burger menu again
      function hide(){
        console.log("hide called")
        // if filterArea display currentl set to block
        if(filterArea.style.display === "block"){
          console.log("if display block")
          // hide filter area, decrease bar height, change image and show title
          filterArea.style.display = "none";
          burgerMenu.src = "img/menu.png";
          filterBar.style.height = '50px';
          burgerTitle.style.display = "block";
          // removeEventListener for hide function
          burgerMenu.removeEventListener("click", hide);
          // re-add the eventListener to show filters
          burgerMenu.addEventListener("click", toggleFilters);
        }
      }
    }
  }
}
function largeScreenFilters(){
  // screens above 600px wide
  if(screen.width > '600'){
    // removes burger menu display and shows filter area alone
    burgerMenu.style.display = "none";
    filterArea.style.display = "flex";
    filterBar.height = '50px';
    // remove title for burger menu
    burgerTitle.style.display = "none";
  }
}
