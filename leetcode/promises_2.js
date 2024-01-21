async function first() {
    setTimeout(()=>{
        console.log("Hello");
    }, 5000);

}

async function second() {
    setTimeout(()=>{
        console.log("World");
    }, 2000);
}

async function test() {
    first().then(result => {
        return second();
    }).catch(exception => {
        console.log('Exception: ' + exception);
    })
}
test();

