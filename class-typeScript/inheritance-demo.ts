class  User {
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
class Student  extends User {
    studentId: number;
}
let student1  = new Student("anisul", 32)
