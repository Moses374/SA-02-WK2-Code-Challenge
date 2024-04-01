function getPrimeNo(arr){
    function isPrime(no){
        //function finds out if a number is prime or not prime
        if(no<2) return false;
        //removing 1 as it not prime 
        for(let i=2;i<= Math.sqrt(no);i++){
            
           if(no%i ===0)return false;
        }

        return true;
    }
    
    return arr.filter(isPrime)
}