import * as THREE from "three"
import Experience from "../Experience";

export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        
        this.setSunlight();
    }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 0.2);
        this.sunLight.castShadow = true;

        this.sunLight.shadow.mapSize.width = 10;
        this.sunLight.shadow.mapSize.height = 10;
        this.sunLight.shadow.camera.near = 0;
        this.sunLight.shadow.camera.far = 200000;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(-5, 7, 15);
        this.scene.add(this.sunLight);
        
        //this.ambientLight = new THREE.AmbientLight("#08183A", .3);
        this.ambientLight = new THREE.AmbientLight("#070A52", .3);
        this.scene.add(this.ambientLight);
    }


    resize(){
    }

    update(){
    }
}