let MYdiv =document.querySelector("#myDIV")
let button =document.querySelector("#btn")

button.addEventListener("click",myFunction)


function myFunction() {
    let x= document.getElementById("myDIV");
    if (x.style.display === "none") 
    {
      x.style.display = "block";
    } else 
    {
      x.style.display = "none";
    }
  }