function checkPrime(num){
    let secs = 0;
    function counter(){
        secs++;
    }
    setTimeout(counter, 1000);

    if(num <= 1){
        return secs;
    };
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return secs;
        };
    };
    return secs;
}

console.log(checkPrime(949149419419419403204349482378940923876437890))