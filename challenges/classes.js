// 1. Copy and paste your prototype in here and refactor into class syntax.



// function CuboidMaker(Cuboid) {

//     this.length = Cuboid.length;
//     this.width = Cuboid.width;
//     this.height = Cuboid.height;

// }

class CuboidMaker{
    constructor(Cuboid){
        
        this.length = Cuboid.length;
        this.width = Cuboid.width;
        this.height = Cuboid.height;
    }

    volume()
    {
        return this.length * this.width * this.height;
    }

    surfaceArea()
    {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}



// CuboidMaker.prototype.volume =
//     function () {
//         return this.length * this.width * this.height;
//     }



// CuboidMaker.prototype.surfaceArea =
//     function () {
//         return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
//     }


const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130





// Stretch Task: Extend the base class CuboidMaker with
// a sub class called CubeMaker. 

// Find out the formulas for volume and surface area
// for cubes and create those methods using the dimension properties
// from CuboidMaker. 

// Test your work by logging out your volume and surface area.


class cubeMaker extends CuboidMaker{
    constructor(cube){
        super(cube);
        
    }

    cubevolume(){
        return this.length*this.width*this.height;
    }

    cubesurfaceArea(){
        return this.length*this.width*6;
    }
}

const cube = new cubeMaker({ length: 5, width: 5, height: 5 })


console.log(cube.cubevolume()); 
console.log(cube.cubesurfaceArea()); 