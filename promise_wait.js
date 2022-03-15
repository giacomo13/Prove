"use strict";

function wait(duration) {

    return new Promise((resolve,reject)=>{

        if (duration < 0)
        reject(new Error("Zi che è sto tempo negativo"));
        else
        setTimeout(resolve,duration);
    })
};

wait(-1).then(()=>{
    console.log("Tutto apposto")}
).catch((error)=>{
    console.log(error.toString()); //Riceve in input ciò che è nella parentesi del reject
                                   //In questo caso è un errore
}

);