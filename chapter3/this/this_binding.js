//default binding
function showLog() {
    console.log("Error: " + this.a);
}
var a = "This is null pointer exception!";
showLog();

//implicit binding
function info() {
    console.log("Info: " + this.a);
}

var object1 =  {a:"This is stack over flow exception!", info:info};
var object2 =  {a:"This is memory exception!", object1:object1};

object2.object1.info();


