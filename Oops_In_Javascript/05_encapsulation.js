// #balance is private vaiable

class BankAccount{
    customerName;
    accountNumber;
    #balance=0;
    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber = Date.now();
        this.#balance=balance;
    }
    deposit(balance){
        this.#balance +=balance
    }
    withdrow(balance){
        this.#balance -=balance
    }
    set balance(amount){
        if(isNaN(amount)){
            throw new Error("Invalid balance input")
        }
        this.#balance = amount;
    }
    get balance(){
        return this.#balance;
    }
    // setBalance(amount){
    //     if(isNaN(amount)){
    //         throw new Error("Invalid balance input")
    //     }
    //     this.#balance = amount;
    // }
    // getBalance(){
    //     return this.#balance;
    // }
}

class CurrentAccount extends BankAccount{
    transectionLimit = 10000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    } 
    // private method
    #calculateInterest(amount){
        console.log("calculate Interest of loan...",amount);
    }
    takebusinessLoan(amount){
        this.#calculateInterest(amount);
        console.log("taking business loan", amount);   
    }
}


let shehbazAccount = new CurrentAccount("shehbaz",2000);

// #balance is private

// shehbazAccount.#balance=500;
// shehbazAccount.deposit(5000);
// shehbazAccount.setBalance(500);
// console.log(shehbazAccount.getBalance());

// shehbazAccount.claculateInterest(2000);

shehbazAccount.takebusinessLoan(4000);



shehbazAccount.balance=5000;
console.log(shehbazAccount.balance);
console.log(shehbazAccount);


