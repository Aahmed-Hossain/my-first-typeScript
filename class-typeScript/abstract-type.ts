abstract class  User {
    name: string;
    age: number;
    constructor(userName:string, ageee:number ){
        this.name = userName;
        this.age = ageee;
    }
    abstract display():void;
}
class Student  extends User {
    studentId: number;
}
let student1  = new Student("anisul", 32)
