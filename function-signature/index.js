var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("hi............");
};
userInfo1();
userInfo2 = function (name) {
    console.log("".concat(name, " is trying to grab you attention"));
};
userInfo2("Ahmed");
userInfo3 = function (name, age) {
    return "".concat(name, "_").concat(age, " is trying to grab you attention");
};
console.log(userInfo3("Ahmed", 26));
