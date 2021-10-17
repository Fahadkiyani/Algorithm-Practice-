function almostIncreasingSequence(seq) {
    let removedItems = 0;
    for(let i= 0; i < seq.length; i++){
        if(seq[i]>=seq[i+1] && i+1 !== seq.length && removedItems === 0){
            if(seq[i+1]<= seq[i-1]){
                seq.splice(i+1,1);
                removedItems = 1;
            }else{
                seq.splice(i,1);
                removedItems=1;
            }
            
    }
    if(seq[i] >= seq[i+1] || seq[i-1] >= seq[i] ){
        return false;
    }
    if(seq.length === 1  ){
        return true;
    }
}
return true;
}


let result = almostIncreasingSequence([3, 5, 67, 98, 3]);
console.log('Expected value: true', ' returned value:',result);

result = almostIncreasingSequence([1, 2, 3, 4, 3, 6]);
console.log('Expected value: true', ' returned value:',result);

result = almostIncreasingSequence([1, 2, 3, 4, 3, 6,2]);
console.log('Expected value: false', ' returned value:',result);
