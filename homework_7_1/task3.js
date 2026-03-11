function divide(numerator, denominator) {

    if (denominator === 0) {
        throw new Error('Denominator cannot be zero');
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Both numerator and denominator must be numbers');
    }
    return numerator / denominator;
}

try {divide (10,'a');} catch (error) {
    console.error(error.message);
}
try {divide (10,0);} catch (error) {
    console.error(error.message);
}
finally {
    console.log('Робота завершена');
}