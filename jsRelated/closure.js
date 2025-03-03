function createCounter(start) {
    let count = start;

    return {
        increment: function() {
           count++;
           return  count;
        },
        decrement: function() {
            count--;
            return  count;
        },
        reset: function() {
            count = start;
            return  count;
        },
    }
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());