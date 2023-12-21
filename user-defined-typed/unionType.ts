let userId : (string | number |  boolean);

userId = "101";
userId = 101;
userId = true;

function displayUserInfo(userId:(number | string)){
    console.log(userId);
}
displayUserInfo(10101)