import * as THREE from "three"
import Experience from "../Experience";

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time = this.experience.time;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        this.inc = 0.03;

        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        this.setModel();
        this.setAnimation();

    }

    setModel(){
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
            
            if (child instanceof THREE.Group){
                child.children.forEach((groupchild)=>{
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                })
            }

            if (child.name === "GlassGreen"){
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set("#00fffb");
                child.material.ior = 3;
                child.material.transparent = true;
                child.material.opacity = 0.5;
            }
            if (child.name === "GlassBlue"){
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set("#0800ff");
                child.material.ior = 3;
                child.material.transparent = true;
                child.material.opacity = 0.5;
            }
            if (child.name === "GlassYellow"){
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set("#fce028");
                child.material.ior = 3;
                child.material.transparent = true;
                child.material.opacity = 0.5;
            }

            if (child.name === "facGlass"){
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set("#FFFFFF");
                child.material.ior = 3;
                child.material.transparent = true;
                child.material.opacity = 0.3;
            }

            if (child.name === "facGlass2"){
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set("#FFFFFF");
                child.material.ior = 3;
                child.material.transparent = true;
                child.material.opacity = 0.3;
            }
        });
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.2, 0.2, 0.2);
    }

    setAnimation(){
        console.log(this.room.animations);
        //trees
        for (var i = 166; i < 171; i++){
            this.wind = this.mixer.clipAction(this.room.animations[i]);
            //this.wind.setLoop(THREE.LoopOnce);
            this.wind.play();
        }
        //factory
        for (var i = 210; i < 214; i++){
            this.wind = this.mixer.clipAction(this.room.animations[i]);
            //this.wind.setLoop(THREE.LoopOnce);
            this.wind.play();
        }
        //thinker - sphere 042
        this.statue = this.mixer.clipAction(this.room.animations[206]);
        //this.wind.setLoop(THREE.LoopOnce);
        this.statue.play();
        
        this.wind = this.mixer.clipAction(this.room.animations[217]);
        //this.wind.setLoop(THREE.LoopOnce);
        this.wind.play();
        //lever - cylinder077

    }

    displayChalk(){
        console.log("hello");
        //Lever open - cylinder077
        this.wind = this.mixer.clipAction(this.room.animations[225]);
        this.wind.setLoop(THREE.LoopOnce);
        this.wind.clampWhenFinished = true;
        this.wind.play();
        //Chalk text - text007
        this.wind = this.mixer.clipAction(this.room.animations[230]);
        this.wind.setLoop(THREE.LoopOnce);
        this.wind.clampWhenFinished = true;
        this.wind.play();
        this.wind = this.mixer.clipAction(this.room.animations[231]);
        this.wind.setLoop(THREE.LoopOnce);
        this.wind.clampWhenFinished = true;
        this.wind.play();
    }

    resize(){
    }

    update(){ 
        this.mixer.update(this.time.delta * 0.0005);
    }

    nextStation(){
        this.actualRoom.children.forEach((child) => {
            //From 1st to 2nd
            if (this.time.i < 150){
                child.position.x -= this.inc;
                this.inc *= 1.00007;
            }else if (this.time.i >= 150 && this.time.i < 209){
                child.position.x -= this.inc;
            }else if (this.time.i >= 209 && this.time.i < 500){
                child.position.x -= this.inc;
                this.inc /= 1.00007;
            }else if (this.time.i === 500){
                this.inc = 0.03;
            }

            else if (this.time.i >= 500 && this.time.i < 629){
                child.position.x -= this.inc;
                this.inc *= 1.00007;
            }else if (this.time.i >= 629 && this.time.i < 744){
                child.position.x -= this.inc;
            }else if (this.time.i >= 744 && this.time.i < 1000){
                child.position.x -= this.inc;
                this.inc /= 1.00007;
            }else if (this.time.i === 1000){
                this.inc = 0.03;
            }

            else if (this.time.i >= 1000 && this.time.i < 1129){
                child.position.x -= this.inc;
                this.inc *= 1.00007;
            }else if (this.time.i >= 1129 && this.time.i < 1228){
                child.position.x -= this.inc;
            }else if (this.time.i >= 1228 && this.time.i < 1500){
                child.position.x -= this.inc;
                this.inc /= 1.00007;
            }else if (this.time.i === 1500){
                this.inc = 0.03;
            }

            else if (this.time.i >= 1500 && this.time.i < 1630){
                child.position.x -= this.inc;
                this.inc *= 1.00007;
            }else if (this.time.i >= 1630 && this.time.i < 1714){
                child.position.x -= this.inc;
            }else if (this.time.i >= 1714 && this.time.i < 2000){
                child.position.x -= this.inc;
                this.inc /= 1.00007;
            }else if (this.time.i === 2000){
                this.inc = 0.03;
            }

        })
    }
}