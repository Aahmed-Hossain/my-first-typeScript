interface IUser { id: number, name: string, age: number }
let users :IUser[]=[];
let user1: IUser = { id: 1, name: "ahmed", age: 26 }
let user2: IUser = { id: 2, name: "hossain", age: 62 };
users.push(user1,user2)

const printUserInfo = (user:IUser) =>{
    console.log(`userId: ${user.id} name: ${user.name} Age: ${user.age}`);
}

users.forEach(item=>printUserInfo(item))

