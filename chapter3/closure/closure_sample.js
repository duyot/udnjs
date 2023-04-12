function parent() {
    var name = this.age;

    function child() {
        console.log("The current age is: "+ name);
    }
    return child;
}
var people = {name: "duyot", age: 10};
console.log("people: " + people.age)
var a = parent();
a.call(people);