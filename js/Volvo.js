import { Cars } from "./Cars.js";

class Car extends Cars {
    constructor (name){ 
       super(name);
        this.age = 25;
        this.color = 'RED';
        
    }
}

export {Car};