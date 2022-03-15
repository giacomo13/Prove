"use strict";

//La funzione prende in input un numero e lo eleva alla seconda,
//vediamo come scriverla in differenti modi

let n = 2;

function classic(a){
    return a*a;
};

const function_expression = function(a){
    return a*a*a;
}

const arrow_function = (a) => {
     a*a*a*a;
}


console.log(classic(n));  //n^2

console.log(function_expression(n)); //n^3

console.log(arrow_function(n)); //n^4

