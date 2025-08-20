class Car {
    brand;
    model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails)
    {
        this.brand = carDetails.brand;
        this.model = carDetails.model
    }

    displayInfo()
    {
        // console.log(this.brand, this.model) ;
        return `${this.brand} ${this.model} Speed: ${this.speed} km/h ${this.isTrunkOpen ? 'open' : 'closed'} `;
    }

    go()
    {
        if (!this.isTrunkOpen) {
            this.speed += 5;
        }   
        
         // Limit the speed to 200.
        if (this.speed > 200) {
            this.speed = 0;
        }

    }

    brake()
    {
        this.speed -=5;
        // Limit the speed to 0.
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk()
    {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk()
    {
       this.isTrunkOpen = false;
    }
}

class RaceCar extends Car {

    acceleration;
    constructor(carDetails)
    {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go()
    {
        this.speed +=this.acceleration;

        if(this.speed > 300)
        {
            this.acceleration = 0;
            this.speed = 300;
        }

    }
}

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla'
});

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3'
});

const raceCarOne = new RaceCar({
    brand: 'Ferrari',
    model: 'Su57',
    acceleration : 20
});




// console.log(carOne.displayInfo());
// console.log(carTwo.displayInfo());
// console.log(carOne.go());
// console.log(carTwo.go());

car1.brake();
console.log(car1.displayInfo());

// Trunk should not open since the car is moving.
car1.openTrunk();
car1.go();
car1.closeTrunk();

car1.go();
car1.go();

console.log(car1.displayInfo());

console.log(car2.displayInfo());
car2.go();
car2.go();
car2.go();
car2.go();
car2.brake();
console.log(car2.displayInfo());



// Trunk should open since the car is not moving.
car2.openTrunk();
// Car should not go since the trunk is open.
car2.go();
console.log(car2.displayInfo());



raceCarOne.go();
raceCarOne.go();
raceCarOne.go();
raceCarOne.go();
raceCarOne.go();
raceCarOne.brake();

console.log(raceCarOne.displayInfo());


// console.log(carOne.brake());
