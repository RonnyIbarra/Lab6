
// calcula el factorial de un numero negativo
function factorial(n) {
    if (n < 0) throw new Error('El número debe ser no negativo');
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// calcula la serie de fibonacci
function fibonacci(n) {
    if (n < 0) throw new Error('El número debe ser no negativo');
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = { factorial, fibonacci };
