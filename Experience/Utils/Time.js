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
        this.finalClick = 0;
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
            const leverOpen = document.querySelector('.leverHolder');
            if (this.i === 501){
                githold.style.display = "block";
            }
            if (this.i === 1001){
                infoDiv.innerHTML = "I received my Bachelor's Degree in Mathematics from Queen's University\
                and now am pursuing Computer Programming Analysis at Seneca College";
            }
            if (this.i === 1501){
                leverOpen.style.display = "block";
            }
            if (this.i === 2001){
                this.finalClick++;
                infoDiv.innerHTML = "This is our final station for now. This webpage will always be\
                in development as more and more projects and stations\
                will be added as my journey continues.<br>Stay tuned!";
            }
        }

    }
}