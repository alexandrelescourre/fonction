"use strict";

//Je vais tout d'abord délarer trois variables : a="jean" et b="paul" et result 
//Ensuite, je vais déclarer une fonction checkName(qui possède 2 paramètres) qui verifie si les deux noms sont identique 

let aQ="jean";
let bBis="Paul";
let result=checkName(a,b)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);