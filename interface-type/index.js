var users = [];
var user1 = { id: 1, name: "ahmed", age: 26 };
var user2 = { id: 2, name: "hossain", age: 62 };
users.push(user1, user2);
var printUserInfo = function (user) {
    console.log("userId: ".concat(user.id, " name: ").concat(user.name, " Age: ").concat(user.age));
};
users.forEach(function (item) { return printUserInfo(item); });
