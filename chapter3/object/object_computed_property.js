var prefix = "bar";
var object = {
    [prefix+"a"]:"hello a",
    [prefix+"b"]:"hello b"
};

console.log(object["bara"]);
console.log(object["barb"]);