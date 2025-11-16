class Config{
    static dbUser = 'username';
    static dbpassword = 'secret';
    static apiToken = 'abcd';
}

console.log(Config.apiToken);



// // utiltity function

class User{
    static id=1;

    static cache = {
        1:"value"
    }

    constructor(name,age,income){
        this.name = name,
        this.age = age,
        this.income=income
        this.id=User.id++;
    }

    static hasInCache(){
        console.log(this.cache);
    }

    static {
        console.log("Inisilized");
        
    }

    static CompareByAge(user1,user2){
        return user1.age - user2.age;
    }
    static CompareByIncome(user1,user2){
        return user1.income - user2.income;
    }

}

console.log(User.hasInCache());
console.log(User.hasInCache());

// Math.random();
// Object.hasOwnProperty();

// let rajaUser = new User("raja",22,10000);
// let samaUser = new User("sama",72,50000);
// let ramaUser = new User("rama",52,70000);

// // Note we can not access static property using instance , becouse Static are store in Class Only.
// // So throw Class we can get access.

// let users = [ramaUser,rajaUser,samaUser];
// // users.sort(User.CompareByAge);
// // users.sort(User.CompareByIncome);

// console.log(users);







