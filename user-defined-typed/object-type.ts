let user0: { userName: string, userId: number };
user0 = { userName: "anisul", userId: 101 };
// console.log(user0);

let user1: { userName: string, userId?: number };
user1 = { userName: "anisul"};
// console.log(user1);

let user2: Object;
user2 = { userName: 'rakibul', userId: 401 }
let user3: Object[];
user3 = [{ userName: 'taiseer', userId: 902 },
{ userName: 'aiseer', userId: 991 }]

let users: Object[];
users = [];
users.push(user1,user2)
// console.log(users);
for(const key in users){
    console.log(users[key]["userName"]);
}

