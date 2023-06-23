var buttons = document.querySelectorAll(".drum");
for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
    var thisButton = this.innerHTML;
    var soundFile = this.getAttribute("data-sound");
    var audio = new Audio(soundFile);
     audio.play();
     buttonAnimation(thisButton);
    });
}


document.addEventListener("keypress", function (event) {
    console.log(event);
})

function buttonAnimation(thisButton) {
  var colorButton = document.querySelector("." + thisButton);
  colorButton.classList.add("pressed");

  setTimeout(function() {
   colorButton.classList.remove("pressed");
 }, 50);
}


// var audio = new Audio("sounds/snare.mp3");
//   audio.play();
