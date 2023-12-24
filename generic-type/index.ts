function prinUserInfo(userId:string | number | boolean | object){
    // console.log(userId);
}
prinUserInfo('ahmed')
prinUserInfo(101)
prinUserInfo(true)
prinUserInfo({id: 1010})
// using generic type

function prinUserInfo1<X, Y>(userId:X, age:Y){
    console.log(`userId:${userId}, age: ${age}`);
}
prinUserInfo1('ahmed',25)
prinUserInfo1(101,43)
prinUserInfo1(true,43)