// enum: store constants ; no duplicate value can't be stored;
// enum types: numeric, string , heterogenous;
// numeric type enum:
enum RequestType{
    // readData ,
    // getData ,
    // deleteData
    readData,
    getData = 3,
    deleteData 
    // readData = 1,
    // getData = 3,
    // deleteData = 5
}
// console.log(RequestType);

enum RequestType2 {
    readData = " Read Data Please", 
    getData = "get your data",
    deleteData = 'delete your data'
}
// console.log(RequestType2["readData"]);
// console.log(RequestType2.readData);

enum RequestType3 {
    readData = " Read Data Please", 
    getData = "get your data",
    id = 101
}
console.log(RequestType3.id);