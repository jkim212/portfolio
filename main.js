import Experience from './Experience/Experience.js'

const experience = new Experience(document.querySelector(".experience-canvas"))

var button = document.getElementById("moveRight");
const titleDiv = document.querySelector('.title');
const infoDiv = document.querySelector('.info');

const fullDiv = document.querySelector('.fullScreen');
const githold = document.querySelector('.gitHolder');

const inst = document.querySelector('.instruc');

var clickCount = 1;
// Add a click event listener to the button
button.addEventListener("click", function () {
  
  inst.style.display = "none";
  if (experience.time.stopped && experience.time.finalClick === 0) {
    experience.world.train.throttle();
    experience.time.nextStation();
    fullDiv.style.display = "none";
    githold.style.display = "none";
    setTimeout(() => {
      //titleDiv.style.display = "none";
      titleDiv.innerHTML = "";
      infoDiv.innerHTML = "";
    }, 1000);
  }
  else if (experience.time.finalClick === 1 && clickCount === 1){
    infoDiv.innerHTML = "No, seriously it's still in development";
    clickCount++;
  }
  else if (clickCount > 1){
    infoDiv.innerHTML = "Stop and give me an interview, please";
  }
});

const lever = document.querySelector('.leverHolder');

lever.addEventListener("click", function () {
  experience.world.room.displayChalk();
  lever.style.display = "none";
  setTimeout(() => {
  fullDiv.style.display = "block";
  const link = document.createElement('a');
  link.href = 'https://github.com/jkim212/portfolio';
  link.target = '_blank';
  link.textContent = 'Portfolio WebApp Project';
  fullDiv.appendChild(link);
  fullDiv.innerHTML += " <- Click titles to visit\
                <br>With a combined usage of Blender and Three.js along with html/css/js skills learned at\
                Seneca College, I am currently developing this very webpage to build on my portfolio\
                and also to display other projects from my Github<br><br>";

  const link2 = document.createElement('a');
  link2.href = 'https://github.com/jkim212/OOP244_Final';
  link2.target = '_blank';
  link2.textContent = 'OOP244 Final Project';
  fullDiv.appendChild(link2);
  fullDiv.innerHTML += "<br>The goal of this project from my 2nd semester was to build a POS app for a supermarket.\
                By using object-oriented programming skills learned throughout the semester, each module\
                neccessary is created with its respective member functions and by using hierarchy of\
                base-derived functions, I was able to develop a fully functioning POS app, which keeps\
                track of items, each items' stocks, and print out a bill when all shopping is done.<br><br>";

  const link3 = document.createElement('a');
  link3.href = 'https://github.com/jkim212/WEB222_Final';
  link3.target = '_blank';
  link3.textContent = 'WEB222 Final Project';
  fullDiv.appendChild(link3);
  fullDiv.innerHTML += "<br>Also as a final project for my 2nd semester, I've created a webpage\
                introducing a card game of my choice, Blackjack. As this was an introductory course to\
                html/css/js, it focuses on basic usage of html elements and tags, controlling format with\
                css, and dynamically creating/rearranging/deleting elements using js.";

              }, 1000);
});