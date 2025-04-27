let RandomNum1 = Math.floor(Math.random() * 6) +1 ;
let RandomNum2 = Math.floor(Math.random() * 6) +1 ;
let RandomImg1 = "images/dice" + RandomNum1 + ".png";
let RandomImg2 = "images/dice" + RandomNum2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", RandomImg1);
document.querySelectorAll("img")[1].setAttribute("src", RandomImg2);
if(RandomNum1 > RandomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(RandomNum1 < RandomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
var button = document.querySelector("button"); // Define the button element
button.addEventListener("click", function() { 
    // Reload the page when the button is clicked
    location.reload();}); // Add the event listener to the button element

