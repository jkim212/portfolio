import * as THREE from "three"
import Experience from "../Experience";

export default class Controls{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.camera = this.experience.camera;
        
    }



    resize(){
    }

    update(){
        
        // this.curve.getPointAt(this.progress, this.dummyCurve);
        // this.progress += 0.001;
        // this.camera.orthographicCamera.position.copy(this.dummyCurve);
    }
}