// global variables
var burgerMenu = document.getElementById('burgerMenu');
var filterArea = document.getElementById('filterArea');
var filterBar = document.getElementById('filterBar');
let burgerTitle = document.getElementById('burgerHeader');
// add eventListener to window to detect for resizing
window.addEventListener("resize", filterOptions);
// call the filterOptions function to ensure correct correct display on load
filterOptions();
// filter options function
// @description manages filter area display, hidden behind burger menu for mobiles
function filterOptions(){
// screen width less than 599px
if(screen.width <= '599'){
filterArea.style.display = "none";
burgerMenu.addEventListener("click", function show(){
  // shows filter optios if currently hidden
  if(filterArea.style.display === "none"){
    burgerTitle.style.display = "none";
    filterArea.style.display = "block";
    filterBar.style.height = '170px';
    // changes burger menu to close image
    burgerMenu.src = "img/close-button.svg";
    // add new eventListener to close filter options
    burgerMenu.removeEventListener("click", show);
    burgerMenu.addEventListener("click", function(){
      // hides filter options if currently shown
      if(filterArea.style.display === "block"){
        filterArea.style.display = "none";
        // re-add the eventListener to show filters
        burgerMenu.addEventListener("click", show);
        burgerTitle.style.display = "block";
        burgerMenu.src = "img/menu.png";
        filterBar.style.height = '50px';
      }
    })
  }
})
}
// screens above 600px wide
if(screen.width >= '600'){
  // removes burger menu display and shows filter area alone
  burgerMenu.style.display = "none";
  filterArea.style.display = "flex";
  filterBar.height = '50px';
  // remove title for burger menu
  burgerTitle.style.display = "none";
}
}
