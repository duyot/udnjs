var unit_1 = ["apple", "alligator", "ax"];
unit_1.elbow = "elbow";
console.log(unit_1.length);
console.log(unit_1.elbow);
unit_1.forEach(function (value, index){
    console.log(value + " - " + index);
});
console.log("--------------------")
//
var unit_2 = ["bear", "bottle", "bow"];
unit_2["1"] = "salad";
var arr_length = unit_2.push("fish", "crab", "claw");
console.log("Array length is: " + arr_length);

unit_2.forEach(function (name,  index) {
    console.log(index + " - " + name);
});

/*
    common arr function
    push: add elements to the end, return length
    unshift: add element to the beginning
    pop<> shift
    indexOf()
 */