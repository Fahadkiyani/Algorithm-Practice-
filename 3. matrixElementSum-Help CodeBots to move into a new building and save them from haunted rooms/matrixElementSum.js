function matrixElementsSum(matrix) {
    let haunted = false;
    let sumOfNonHauntedRooms = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0 && i === 0) {
                sumOfNonHauntedRooms = sumOfNonHauntedRooms + matrix[i][j];
            }
            if (i > 0) {
                for (let k = i - 1; k > -1; k--) {
                    if (matrix[k][j] === 0) {
                        haunted = true;
                    }
                }
                if (haunted === false) {
                    sumOfNonHauntedRooms = sumOfNonHauntedRooms + matrix[i][j];
                }
            }
            haunted = false;
        }
    }
    return sumOfNonHauntedRooms;
}

let result = matrixElementsSum([[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]]);
console.log('Expected output 9 and Returned Value is: ', result);