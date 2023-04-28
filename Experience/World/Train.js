import * as THREE from "three"
import Experience from "../Experience";

export default class Train{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.Train = this.resources.items.train;
        this.actualTrain = this.Train.scene;
        this.time = this.experience.time;
        
        this.mixer = new THREE.AnimationMixer(this.actualTrain);
        this.setModel();

    }

    setModel(){
        this.actualTrain.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
            
            if (child instanceof THREE.Group){
                child.children.forEach((groupchild)=>{
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                })
            }
        });
        this.scene.add(this.actualTrain);
        this.actualTrain.scale.set(0.2, 0.2, 0.2);
        console.log(this.Train.animations);
    }

    throttle(){
        this.go = this.mixer.clipAction(this.Train.animations[3]);
        this.go.setLoop(THREE.LoopOnce);
        this.go.reset();
        this.go.play();
    }


    resize(){
    }

    update(){
        this.mixer.update(this.time.delta * 0.0005);
    }
}