var User = /** @class */ (function () {
    function User(userName, ageee) {
        this.name = userName;
        this.age = ageee;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.name, " , Age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Anisul Islam", 23);
user1.display();
var user2 = new User("Aftahul Islam", 33);
user2.display();
