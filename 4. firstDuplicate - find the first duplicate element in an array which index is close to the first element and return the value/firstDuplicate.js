function firstDuplicate(a) {
    let foundDuplicateOnIndex=a.length;
    let firstDuplicate=-1;
    for(let i = 0; i<a.length; i++){
        for(let j = i+1; j< a.length; j++){
            if(a[i] === a[j] && j < foundDuplicateOnIndex){
                firstDuplicate=a[j];
                foundDuplicateOnIndex=j
                break;
            }
        }
    }
    return firstDuplicate;
}

let result = firstDuplicate([2, 1, 3, 5, 3, 2]);
console.log(result);