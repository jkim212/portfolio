import * as THREE from "three"
import Experience from "../Experience";
import Environment from "./Environment";
import Controls from "./Controls";

import Room from "./Room";
import Floor from "./Floor";
import Train from "./Train";

export default class World{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("ready", ()=>{
            this.environment = new Environment();
            this.room = new Room();
            this.floor = new Floor();
            this.controls = new Controls();
            this.train = new Train();
        });

    }


    resize(){
    }

    update(){
        if (this.room){
            this.room.update();
        }
        if (this.train){
            this.train.update();
        }
        if (this.controls){
            this.controls.update();
        }
    }

    nextStation(){
        if (this.room){
            this.room.nextStation();
        }
        if (this.train){
            this.train.update();
        }
        if (this.controls){
            this.controls.update();
        }
    }
}