var users;
users = [];
var user1;
user1 = { userName: "anisul", userId: 1012 };
users.push(user1);
var user2;
user2 = { userName: 'rakibul', userId: 401 };
users.push(user2);
var user3;
user3 = { userName: 'rajib', userId: 11 };
users.push(user3);
var getRequest;
getRequest = "GET";
// getRequest = "get" (its not allow other value , just it will  take GET & POST)
function requestHandler(request) {
    console.log(request);
}
requestHandler("GET");
