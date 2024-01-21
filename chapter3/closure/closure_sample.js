function parent() {
    var currentAge = this.age;

    function child() {
        console.log("The current age is: "+ currentAge);
    }
    return child;
}
var people = {name: "duyot", age: 10};
console.log("people: " + people.age)
var a = parent();
a.call(people);