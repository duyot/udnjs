function complex_function(n) {
    return n*3;
}

function memoize(func) {
    let cache = {}

    function hit(n) {
        if (n in cache) {
            console.log("result get from cache is: " + cache[n]);
        } else {
            let result = func(n);
            cache[n] = result;
            console.log("result was calculated is: " + result);
        }
    }

    return hit;
}

var memo = memoize(complex_function);

memo(1);
memo(3);
memo(4);
memo(3);

