function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

console.log(x);

//Stack Over Flow Error

function fn() {
    fn();
}

fn(); // stack overflow