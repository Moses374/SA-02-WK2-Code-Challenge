function changeCase(text){
    return text
    .split('')
    //takes an element and creates an array
    .map(function (letter){
        //finds out the case of each letter then converts to the opposite case
        if (letter ===letter.toLowerCase()){
            return letter.toUpperCase();
        }
        else{
            return letter.toLowerCase()
        }
    }
    )
    .join('')
    // .join rejoins the elements of the array to a singular string
}
