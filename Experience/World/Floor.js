import * as THREE from "three"
import Experience from "../Experience";

export default class Floor{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setFloor();
    }
    setFloor(){
        this.geometry = new THREE.PlaneGeometry(100, 100);
        this.material = new THREE.MeshStandardMaterial({
            color: "#000000",
        })
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
        this.plane.position.z = -50;
    }

    resize(){
    }

    update(){
    }
}