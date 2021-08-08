exports.min = function min(array = 0) {
    return array.length > 0 ? Math.min(...array) : 0;
}

exports.max = function max(array = 0) {
    return array.length > 0 ? Math.max(...array) : 0;

}

exports.avg = function avg(array = 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.length > 0 ? array.reduce(reducer, 0) / array.length : 0;
}

