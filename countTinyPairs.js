
let a = [16, 1, 4, 2, 14]
let b = [7, 11, 2, 0, 15]
let k = 743;

function countTinyPairs(a, b, k) {
    let tinypairs = 0;
    for (let i = 0; i < a.length; i++) {
        let A = a[i].toString();
        let B = b[(b.length - 1) - i].toString();
        let concatinate = (A + B);
        if (concatinate < k) {
            tinypairs++
        }

    }
    return tinypairs;
}

countTinyPairs(a, b, k)
