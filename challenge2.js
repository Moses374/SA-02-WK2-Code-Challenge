function arrayCreate(num1,num2){
    let gen = {};
    let i = num1
    //the looping bit
    while (i<num2+1){
        gen.push(i);
        i++;
    }
    //fills in the missing number between num1 and num 2
    return gen;
    //outputs the new set of numbers

}