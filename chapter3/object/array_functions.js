//map: create new function with results of function all on each element
var number_arr = [2,3,4,5,4];
var number_doubled_arr = number_arr.map((number) => number * 2);
console.log(number_doubled_arr);
//filter create array with elements that pass the function
var number_filtered_array = number_arr.filter(function (number){
    return number % 2 === 0;
});
console.log(number_filtered_array);
//indexOf
console.log(number_arr.indexOf(4));


//////
var gauconlonton = {name:"gauconlonton", age:2, height:82};
var jsonObject = JSON.stringify(gauconlonton);
console.log(jsonObject);
