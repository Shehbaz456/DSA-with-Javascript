// class Parent{
//     hello(){
//         console.log("hello from parent class");
//     }
// }
// class Child extends Parent{
//     childnew(){
//         console.log("child Class");
//     }
// }

// let baby = new Child();

// baby.childnew();
// baby.hello();

// console.log(Child.hello());
// console.log(Child.childnew);


// class Human{
//     constructor(){
//         this.species ="homo sapiens"
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }

//     repeat(){
//         console.log("repate");
//     }
// }


// class Engineer extends Human{
//     work(){
//         console.log("solving Problem, build new things");
//     }
// }

// class Doctor extends Human{
//     work(){
//         console.log("see paticent and study madical book");
//     }
// }
// let ram = new Engineer();
// ram.eat();
// ram.sleep();
// ram.work();
// ram.repeat();

// let rajaDr = new Doctor();
// console.log(rajaDr.work());

////////////////////////////////////////////////////////////

// class Human{
//     constructor(Name){
//         this.species ="homo sapiens"
//         this.Name=Name;
//     }
//     eat(){
//         console.log("Eat");
//     }
// }

// class Engineer extends Human{
//     constructor(Name,branch){
//         super(Name);
//         this.branch = branch;
//     }
//     work(){
//         super.eat();
//         console.log("solving Problem, build new things");
//     }
// }

// const ramEng = new Engineer("shehbaz","IT");

// ramEng.work();
// console.log(ramEng); 

/////////////////////////////////////////////////////////////


//const BankAccount = class{
class BankAccount{
    customerName;
    accountNumber;
    balance=0;
    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber = Date.now();
        this.balance=balance;
    }
    deposit(balance){
        this.balance +=balance
    }
    withdrow(balance){
        this.balance -=balance
    }
}

const raja = new BankAccount("raja");

raja.deposit(5000);
raja.withdrow(4000);

console.log(raja);
