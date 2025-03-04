
// 1️⃣ Car Constructor Function
function Car(make, model) {
    this.make = make;   
    this.model = model; 
}

// Car Prototype Method
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); 
    this.topSpeed = topSpeed;    
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

