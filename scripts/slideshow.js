let myIndex = 0; // opretter variable med værdi 0
carousel(); // kalder funktion

function carousel() { // opretter funktion
  let i; // opretter variable 
  let x = document.getElementsByClassName("mySlides"); //opretter variable x som indeholder class mySlides
  for (i = 0; i < x.length; i++) { // for loop som viser billeder i rækkefølge
    x[i].style.display = "none";  // array
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  // billedet som vises bliver display block
  setTimeout(carousel, 7000); // kører funktionen hver 7. sek

}