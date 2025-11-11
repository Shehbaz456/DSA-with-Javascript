// const student = {
//     fullname : "shehbaz",
//     marks:90.3,
//     printMarks: function(marks){
//         console.log("marks = ",this.marks);
//     },

// }

// console.log(student.fullname);
// console.log(student.printMarks());



/////////////////////////////////////////////////

// const employee = {
//     calctax(){
//         console.log("tax rate is 10%");
//     },
// }
// let karan ={
//     salary:50000,
//     calctax(){
//         console.log("tax rate is 10%");
//     },
// }
// karan.__proto__ = employee;
// console.log(karan.calctax());

/////////////////////////////////////////////////


// class Car{
//     start(){
//         console.log("start car");
//     }
//     stop(){
//         console.log("stop Car");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }

// let objnewCar = new Car();
// let aultoCar = new Car();

// objnewCar.start();
// objnewCar.setBrand("fortuner");
// aultoCar.setBrand("maruti");
// console.log(objnewCar);
// console.log(aultoCar);


// console.log(objnewCar.start());
// console.log(objnewCar.stop());


class ToyataCar{
    constructor(brand){
        this.brand = brand;
    }
    start(){
        console.log("start car");
    }
    stop(){
        console.log("stop Car");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}


let fortuner = new ToyataCar("fortuner");
let lexus = new ToyataCar("lexus");

console.log(fortuner);


