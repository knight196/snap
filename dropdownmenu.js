var close = document.querySelector('.close-menu')
var menubar = document.querySelector('.menu')


close.addEventListener('click', () => {
    document.querySelector('.dropdown-menu').classList.toggle('show');
})

menubar.addEventListener('click', () => {
    document.querySelector('.dropdown-menu').classList.toggle('show');
})

// //dropdown menu

// function myFunction(x){
//     x.classList.toggle('drop')
// }

// Set up the click event on the accordion itself
// When a panel is clicked, that event will bubble up
// to the accordion and can be handled there.
document.querySelector(".accordion").addEventListener("click", function(event){

    // Check to see if the clicked panel was the currently open one.
    let alreadyActive = event.target.classList.contains("active");
    
    // Loop over all the panels an close each one
    document.querySelectorAll(".panel").forEach(function(panel){
      panel.style.display="none";
      panel.previousElementSibling.classList.remove("active");
    });
  
    // If the clicked panel wasn't the already active one go ahead
    // and open the clicked panel. Otherwise, do nothing and leave
    // all the panels closed.
    if(!alreadyActive){
      // Then show the clicked panel which is accessible as event.target
      event.target.classList.add("active");
      var panel = event.target.nextElementSibling;
      panel.style.display="block";
    }
  
  });