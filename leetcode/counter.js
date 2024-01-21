var createCounter = function(n){
    return () => n++;
};

const counter = createCounter(10);
counter();
counter();
let counterResult = counter();
console.log(counterResult);


