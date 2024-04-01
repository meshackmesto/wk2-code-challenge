//function acceptString(string){
  //   let word = "Hi! I am Meshack, How are you";
    //return word.toUpperCase();
    //console.log.toUpperCase(word);
//}
// the function check the characters if there i are in lower case then ifn there are there are changed to uppercase.
// the split method converts the string to arrays where then the array of charctes is switched to uppercase with map method 
function changecase(str) {
    return str.split('').map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('');
}
const string = "Hi!, I am Meshack, How are you";
// the output should be "HI! I AM MESHACK,  HOW ARE YOU"
console.log(swapCase(string));  
