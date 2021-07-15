module.exports = function towelSort (matrix) {
    matrix = matrix || [];
    if (matrix.length > 0) {
        let newArray = [];
        matrix.forEach((arrayString) => {
            if (matrix.indexOf(arrayString) % 2 !== 0) {
                arrayString = arrayString.reverse();
            }
                newArray.push(...arrayString)

            })
        return newArray
    }
  return [];
}
