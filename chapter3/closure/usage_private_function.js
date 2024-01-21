function counter() {
    let count = 0;

    function increase() {
        count++;
        console.log("counter.js number is: " + count);
    }

    function decrease() {
        count--;
        console.log("counter.js number is: " + count);
    }

    return {
        inc: increase,
        dec: decrease
    }
}

let count = counter();
count.dec();
count.inc();

