var user0;
user0 = { userName: "anisul", userId: 101 };
// console.log(user0);
var user1;
user1 = { userName: "anisul" };
// console.log(user1);
var user2;
user2 = { userName: 'rakibul', userId: 401 };
var user3;
user3 = [{ userName: 'taiseer', userId: 902 },
    { userName: 'aiseer', userId: 991 }];
var users;
users = [];
users.push(user1, user2);
// console.log(users);
for (var key in users) {
    console.log(users[key]["userName"]);
}
