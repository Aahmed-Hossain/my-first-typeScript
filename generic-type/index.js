function prinUserInfo(userId) {
    // console.log(userId);
}
prinUserInfo('ahmed');
prinUserInfo(101);
prinUserInfo(true);
prinUserInfo({ id: 1010 });
// using generic type
function prinUserInfo1(userId, age) {
    console.log("userId:".concat(userId, ", age: ").concat(age));
}
prinUserInfo1('ahmed', 25);
prinUserInfo1(101, 43);
prinUserInfo1(true, 43);
