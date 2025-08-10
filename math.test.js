const { factorial, fibonacci } = require('./math');

describe('Pruebas de factorial', () => {
    test('Factorial de 0 es 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('Factorial de 1 es 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('Factorial de 5 es 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('Factorial lanza error con número negativo', () => {
        expect(() => factorial(-1)).toThrow('El número debe ser no negativo');
    });
});

describe('Pruebas de fibonacci', () => {
    test('Fibonacci de 0 es 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('Fibonacci de 1 es 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('Fibonacci de 6 es 8', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('Fibonacci lanza error con número negativo', () => {
        expect(() => fibonacci(-3)).toThrow('El número debe ser no negativo');
    });
});
