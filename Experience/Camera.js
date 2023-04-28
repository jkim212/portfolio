import * as THREE from "three"
import Experience from "./Experience";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.setOrbitControls();
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(25, this.sizes.aspect, 0.1, 1000);

        this.perspectiveCamera.position.z = 6;
        this.perspectiveCamera.position.x = 0;
        this.perspectiveCamera.position.y = 0.5;
        this.scene.add(this.perspectiveCamera);

    }
    setOrbitControls(){
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        //this.controls.enableZoom = false;
        this.controls.enableRotate = false;
        //this.controls.enablePan = false;

    }


    resize(){
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

    }

    update(){
        this.controls.update();
    }
}