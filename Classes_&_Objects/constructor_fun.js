function BankAccount(customerName,balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        if(amount>0){
            this.balance += amount;
        }
    }
    this.withdraw =function(amount){
        this.balance -= amount; 
    }

}

// const rajaAccount = new BankAccount("raja",2000);
// const johnAccount = new BankAccount("sami");

// rajaAccount.deposit(2000);
// rajaAccount.withdraw(1000);


// console.log(rajaAccount);
// console.log(johnAccount);







///////////////////////////////////////////////////////

const accounts = [];

const accountform = document.querySelector("#formid");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");



accountform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const account = new BankAccount(customerName.value,+balance.value);
    accounts.push(account);
    console.log(accounts);
    
})








