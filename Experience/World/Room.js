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
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        console.log(this.room.animations);
        //trees
        for (var i = 167; i < 172; i++){
            this.wind = this.mixer.clipAction(this.room.animations[i]);
            //this.wind.setLoop(THREE.LoopOnce);
            this.wind.play();
        }
        //factory
        for (var i = 211; i < 215; i++){
            this.wind = this.mixer.clipAction(this.room.animations[i]);
            //this.wind.setLoop(THREE.LoopOnce);
            this.wind.play();
        }
        //thinker - sphere 042
        this.statue = this.mixer.clipAction(this.room.animations[207]);
        //this.wind.setLoop(THREE.LoopOnce);
        this.statue.play();
        
        this.wind = this.mixer.clipAction(this.room.animations[218]);
        //this.wind.setLoop(THREE.LoopOnce);
        this.wind.play();
        //lever - cylinder077
        this.wind = this.mixer.clipAction(this.room.animations[226]);
        //this.wind.setLoop(THREE.LoopOnce);
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
            }else if (this.time.i >= 150 && this.time.i < 283){
                child.position.x -= this.inc;
            }else if (this.time.i >= 283 && this.time.i < 500){
                child.position.x -= this.inc;
                this.inc /= 1.00007;
            }else if (this.time.i === 500){
                this.inc = 0.03;
            }

            else if (this.time.i >= 500 && this.time.i < 650){
                child.position.x -= this.inc;
                this.inc *= 1.00007;
            }else if (this.time.i >= 650 && this.time.i < 754){
                child.position.x -= this.inc;
            }else if (this.time.i >= 754 && this.time.i < 1000){
                child.position.x -= this.inc;
                this.inc /= 1.00007;
            }else if (this.time.i === 1000){
                this.inc = 0.03;
            }

            else if (this.time.i >= 1000 && this.time.i < 1150){
                child.position.x -= this.inc;
                this.inc *= 1.00007;
            }else if (this.time.i >= 1150 && this.time.i < 1239){
                child.position.x -= this.inc;
            }else if (this.time.i >= 1239 && this.time.i < 1500){
                child.position.x -= this.inc;
                this.inc /= 1.00007;
            }else if (this.time.i === 1500){
                this.inc = 0.03;
            }

            else if (this.time.i >= 1500 && this.time.i < 1650){
                child.position.x -= this.inc;
                this.inc *= 1.00007;
            }else if (this.time.i >= 1650 && this.time.i < 1727){
                child.position.x -= this.inc;
            }else if (this.time.i >= 1727 && this.time.i < 2000){
                child.position.x -= this.inc;
                this.inc /= 1.00007;
            }else if (this.time.i === 2000){
                this.inc = 0.03;
            }

        })
    }
}