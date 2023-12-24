let userInfo1: () => void;
let userInfo2: (name:string) => void;
let userInfo3: (name:string, age:number) => string;
userInfo1 = () => {
    console.log("hi............");
}
userInfo1();
userInfo2 = (name:string) => {
    console.log(`${name} is trying to grab you attention`);
}
userInfo2("Ahmed");

userInfo3 = (name:string, age:number) => {
    return `${name}_${age} is trying to grab you attention`;
}
console.log(userInfo3("Ahmed", 26));