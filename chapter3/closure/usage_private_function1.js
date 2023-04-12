function authorize() {
    var username;
    var password;

    function init(u, p) {
        username = u;
        password = p;
    }

    function login(u, p) {
        if (username === u && password === p) {
            console.log("Login success!");
        } else {
            console.log("Login fail!");
        }
    }

    return {init:init, login:login};
}
 var user1 = authorize();
user1.init("user1", "123456a@");
var user2 = authorize();
user2.init("user2", "123456a@");

user1.login("user", "123456a@");
user2.login("user2", "123456a@");
