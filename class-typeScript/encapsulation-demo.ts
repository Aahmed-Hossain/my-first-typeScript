// public, private, protected, readonly;
class User {
    name: string;
    age: number;
    constructor(userName: string, ageee: number) {
        this.name = userName;
        this.age = ageee;
    }
    display(): void {
        console.log("hi");
    }
}
class Student extends User {
    studentId: number;
    constructor (userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`user name: ${this.name}, age: ${this.age} , id: ${this.studentId}`);
    }
}
let student1 = new Student("asif ", 31, 2347237423);
student1.display();

let user1  = new User("robi", 21)
user1.name = "rapiq"
console.log(user1);
