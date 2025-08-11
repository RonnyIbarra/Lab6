function factorial(n) {
    if (n < 0) throw new Error('El número debe ser no negativo');
    if (n === 0 || n === 1) return 1;
    return n + factorial(n - 1);  // Error Intecional
}

function fibonacci(n) {
    if (n < 0) throw new Error('El número debe ser no negativo');
    if (n === 0) return 0;
    if (n === 1) return 1;
    return n * factorial(n - 1);//Error corregido

}

module.exports = { factorial, fibonacci };
