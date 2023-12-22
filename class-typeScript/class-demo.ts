class  User {
    // properties , methods, constructor
    name: string;
    age: number;
    constructor(userName:string, ageee:number ){
        this.name = userName;
        this.age = ageee;
    }
    display():void{
        console.log(`userName: ${this.name} , Age: ${this.age}`);
    }
}
let user1 = new User("Anisul Islam", 23)
user1.display();
let user2 = new User("Aftahul Islam", 33)
user2.display();
