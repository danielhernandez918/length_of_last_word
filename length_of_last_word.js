/**
 * @param {string} s
 * @return {number}
 */
s1 = "Hello World"
s2 = "   fly me   to   the moon  "
s3 = "luffy is still joyboy"
var lengthOfLastWord = function(s) {
    const arr = s.split(" ");
    const newArr= [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length >= 1){
            newArr.push(arr[i]);
        }
    }
    const wordLength = newArr[newArr.length-1].length;
    return wordLength;
    // return newArr;
};
console.log(lengthOfLastWord(s1));
console.log(lengthOfLastWord(s2));
console.log(lengthOfLastWord(s3));