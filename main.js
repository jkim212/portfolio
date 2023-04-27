import Experience from './Experience/Experience.js'

const experience = new Experience(document.querySelector(".experience-canvas"))

var button = document.getElementById("moveRight");
const titleDiv = document.querySelector('.title');
const infoDiv = document.querySelector('.info');

const fullDiv = document.querySelector('.fullScreen');
const githold = document.querySelector('.gitHolder');
// Add a click event listener to the button
button.addEventListener("click", function() {
  if (experience.time.stopped){
    experience.time.nextStation();
    fullDiv.style.display = "none";
    githold.style.display = "none";
    setTimeout(() => {
      //titleDiv.style.display = "none";
      titleDiv.innerHTML = "";
      infoDiv.innerHTML = "";
    }, 1000);

  }

});