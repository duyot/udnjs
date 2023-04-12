function identify(){
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello " + identify.call(this);
    console.log(greeting);
}

var you = {name:"gauconlonton"};
var me = {name:"duyot"};
/*
function.call was used to invoke the function and specify this parameter for the function
 */
console.log(identify.call(you));

speak.call(me);

function init() {
    console.log("This is init function for: " + this.age);
}
var people = {age: 10};
init.call(people)
