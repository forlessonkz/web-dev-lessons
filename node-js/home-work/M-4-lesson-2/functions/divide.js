function divideArray(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return min !== 0 ? max / min : 'Division by zero error';
}

module.exports = divideArray;
