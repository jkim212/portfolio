import * as THREE from "three";

import Sizes from "./Utils/Size.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";

import Camera from "./Camera";
import Renderer from "./Renderer";

import World from "./World/World.js";
import assets from "./Utils/assets.js";

export default class Experience {
    static instance
    constructor(canvas) {
        if (Experience.instance){
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time(); 
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        this.world = new World();

        this.currentStation = 1;
        
        this.sizes.on("resize", ()=>{
            this.resize();
        });
        this.time.on("update", ()=>{
            this.update();
        });
        
        this.time.on("next", ()=>{
            this.nextStation();
        });
    }
    
    resize(){
        this.camera.resize();
        this.renderer.resize();
    }
    update(){
        this.camera.update();
        this.renderer.update();
        this.world.update();
    }
    
    nextStation(){
        if(this.time.i === 1200){
            this.currentStation = 2;
        }
        
        this.camera.update();
        this.renderer.update();
        this.world.nextStation();
    }


}