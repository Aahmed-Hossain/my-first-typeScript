
let users: Object[];
users = [];

type User = { userName: string, userId: number };
let user1: User;
user1 = { userName: "anisul", userId: 1012};
users.push(user1);

let user2:User;
user2 = { userName: 'rakibul', userId: 401 };
users.push(user2);

let user3:User;
user3 = { userName: 'rajib', userId: 11 };
users.push(user3);

// console.log(users);

type RequestType = "GET" | "Post";
let getRequest : RequestType;
getRequest = "GET"
// getRequest = "get" (its not allow other value , just it will  take GET & POST)

function requestHandler(request: RequestType){
    console.log(request);
}
requestHandler("GET")

