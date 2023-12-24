var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public, private, protected, readonly;
var User = /** @class */ (function () {
    function User(userName, ageee) {
        this.name = userName;
        this.age = ageee;
    }
    User.prototype.display = function () {
        console.log("hi");
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("user name: ".concat(this.name, ", age: ").concat(this.age, " , id: ").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student("asif ", 31, 2347237423);
student1.display();
var user1 = new User("robi", 21);
user1.name = "rapiq";
console.log(user1);
