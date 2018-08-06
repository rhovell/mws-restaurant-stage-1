var burgerMenu = document.getElementById('burgerMenu');
var filterArea = document.getElementById('filterArea');
var filterBar = document.getElementById('filterBar');
let burgerTitle = document.getElementById('burgerHeader');
filterArea.style.display = "none";
burgerMenu.addEventListener("click", function show(){
  console.log("clicked");
  if(filterArea.style.display === "none"){
    burgerTitle.style.display = "none";
    filterArea.style.display = "block";
    filterBar.style.height = '170px';
    burgerMenu.src = "img/close-button.svg";
    console.log("show");
    burgerMenu.removeEventListener("click", show);
    burgerMenu.addEventListener("click", function(){
      if(filterArea.style.display === "block"){
        filterArea.style.display = "none";
        burgerMenu.addEventListener("click", show);
        burgerTitle.style.display = "block";
        burgerMenu.src = "img/menu.png";
        filterBar.style.height = '50px';
        console.log("hide");
      }

    })
  }


})
