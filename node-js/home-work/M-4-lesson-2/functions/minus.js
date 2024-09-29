function minusArray(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

module.exports = minusArray;