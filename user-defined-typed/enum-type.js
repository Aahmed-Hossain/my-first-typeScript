// enum: store constants ; no duplicate value can't be stored;
// enum types: numeric, string , heterogenous;
// numeric type enum:
var RequestType;
(function (RequestType) {
    // readData ,
    // getData ,
    // deleteData
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["getData"] = 3] = "getData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
    // readData = 1,
    // getData = 3,
    // deleteData = 5
})(RequestType || (RequestType = {}));
// console.log(RequestType);
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = " Read Data Please";
    RequestType2["getData"] = "get your data";
    RequestType2["deleteData"] = "delete your data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2["readData"]);
// console.log(RequestType2.readData);
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = " Read Data Please";
    RequestType3["getData"] = "get your data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.id);
