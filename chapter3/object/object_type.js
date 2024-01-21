var s = "demo";
console.log(typeof s);
var n = 12;
var o = {key:"12", value: 23};
console.log(typeof o);
console.log(typeof null);

function sum(a, b) {
    return a+ b;
}

var f = sum;
console.log(typeof f);

var arr = [2,4,4];
console.log(typeof arr);

console.log(3434.3434.toFixed(2));
"use strict"
var customer = {login_id: "gaucon", password:"123456a@"};
Object.freeze(customer);
customer.login_id = "gauconlonton";
console.log(customer.login_id);