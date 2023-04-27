import EventEmitter from "events";

export default class Time extends EventEmitter{
    constructor() {
        super();
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;
        this.i = 0;
        this.stopped = true;
        this.update();
    }

    update(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;

        this.emit("update");
        window.requestAnimationFrame(() => this.update());
    }

    nextStation(){
        if (this.i < 500){
            this.stopped = false;
            this.i++;
            this.emit("next");
            window.requestAnimationFrame(() => this.nextStation());
        }
        else if (this.i > 500 && this.i < 1000){
            this.stopped = false;
            this.i++;
            console.log("second");
            this.emit("next");
            window.requestAnimationFrame(() => this.nextStation());
        }
        else if (this.i > 1000 && this.i < 1500){
            this.stopped = false;
            this.i++;
            console.log("third");
            this.emit("next");
            window.requestAnimationFrame(() => this.nextStation());
        }
        else if (this.i > 1500 && this.i < 2000){
            this.stopped = false;
            this.i++;
            console.log("fourth");
            this.emit("next");
            window.requestAnimationFrame(() => this.nextStation());
        }
        else{
            this.stopped = true;
            this.i++;
            const titleDiv = document.querySelector('.title');
            const infoDiv = document.querySelector('.info');
            const fullDiv = document.querySelector('.fullScreen');
            const githold = document.querySelector('.gitHolder');
            if (this.i === 501){
                githold.style.display = "block";
            }
            if (this.i === 1001){
                infoDiv.innerHTML = "I received my Bachelor's in Mathmatics from Queen's University\
                and now am pursuing Computer Programming Analysis at Seneca College";
            }
            if (this.i === 1501){
                fullDiv.style.display = "block";
                const link = document.createElement('a');
                link.href = 'https://www.example.com';
                link.target = '_blank';
                link.textContent = 'Portfolio Webpage Project';
                fullDiv.appendChild(link);
                fullDiv.innerHTML += "<br>With a combined usage of Blender and Three.js along with html/css/js skills learned at\
                Seneca College, I am currently developing this very webpage to build on my portfolio\
                and also to display other projects from my Github<br><br>";

                const link2 = document.createElement('a');
                link2.href = 'https://www.example.com';
                link2.target = '_blank';
                link2.textContent = 'OOP244 Final Project';
                fullDiv.appendChild(link2);
                fullDiv.innerHTML += "<br>The goal of this project from my 2nd semester was to build a POS app for a supermarket.\
                By using object-oriented programming skills learned throughout the semester, each module\
                neccessary is created with its respective member functions and by using hierarchy of\
                base-derived functions, I was able to develop a fully functioning POS app, which keeps\
                track of items, each items' stocks, and print out a bill when all shopping is done.";
            }
            if (this.i === 2001){
                infoDiv.innerHTML = "This is our final destination for now. More projects and stations\
                will be updated as my journey continues. Stay tuned!";
            }
        }

    }
}