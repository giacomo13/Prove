"use script";

let giusto = 1;

const myPromise = new Promise((resolve,reject) =>{
    
    if (giusto)
    resolve("t'appost");
    else
    reject("failure reason");

});

myPromise.then((result) => {
    console.log("Success: ", result);
}).catch((error) => {
    console.log("Error: ",error);
});