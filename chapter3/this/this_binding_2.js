function info() {
    console.log(this.a);
}

var object = {a:"this is a variable", info:info};

var object2 = object.info;

var a = "this is global value";
object2();


function error(message) {
    console.log(this.id, message);
}

var object = {id:"awsome"};

[1,2,4].forEach(error, object);
