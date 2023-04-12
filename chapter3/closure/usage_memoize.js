function heavyFunction(x) {
    return x*2;
}

function memoize(func) {
    let cache = {};

    function cache_hit(n) {
        if (n in cache) {
            console.log("Hit result from cache:" + cache[n]);
        } else {
            let result = func(n);
            cache[n] = func(n);
            console.log("Result was calculated is: " + result);
        }
    }
    return cache_hit;
}

var memoizeFunction = memoize(heavyFunction);

memoizeFunction(3);
memoizeFunction(3);
memoizeFunction(7);


