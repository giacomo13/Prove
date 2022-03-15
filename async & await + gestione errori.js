"use strict";

function resolveAfterMs(ms) {
    return new Promise((resolve,reject) => {

        if(ms < 0)
        reject("Fra ma è negativo");
        else
        setTimeout(() => {
            resolve("resolved");
        }, ms);
    })
}

async function asyncCall(){
    try{
        console.log("calling");
        const result = await resolveAfterMs(-1); //Prima di fornire il risultato, aspetta che finisca resolveAfterMs
        console.log(result);
    }catch(e){
        console.log('Exception: ', e);
        throw new Error('eccezione');
    }
}

asyncCall();

