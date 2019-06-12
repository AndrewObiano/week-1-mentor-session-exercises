/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

 function firstReverse(str){
     if(typeof str !== "string"){
         return null;
     }
     var wordBox = [];
     var getLetters = [];
     var revWord;
     for(i=0; i<str.length; i++){
         wordBox = str.slice('');
         getLetters.push(wordBox[i]);
     }
     getLetters.reverse();
     revWord = getLetters.join('');
     return revWord;
 }

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder(str){
    if(typeof str !== "string"){
        return null;
    }
    var wordBox2 = [];
    var getLetters2 = [];
    var revWord2;
    for(i=0; i<str.length; i++){
        wordBox2 = str.slice('');
        getLetters2.push(wordBox2[i]);
    }
    getLetters2.sort();
    revWord2 = getLetters2.join('');
    return revWord2;
}

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

function vowelCount(str){
    if(typeof str !== "string"){
        return null;
    }
    var count = 0;
    var lowercase = str.toLowerCase();
    var wordBox3 = lowercase.split('');
    for(i=0; i<wordBox3.length; i++){
        if(wordBox3[i] === 'a'){
            count++;
        }else if(wordBox3[i] === 'e'){
            count++;
        }else if(wordBox3[i] === 'i'){
            count++;
        }else if(wordBox3[i] === 'o'){
            count++;
        }else if(wordBox3[i] === 'u'){
            count++;
        }
    }
    return count;
}

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} num
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

let timeConvert = function(num){
    if(typeof num !== 'number'){
        return null;
    }
    if(num <= 60){
        return '0:' + num;
    }else if(num > 60){
        let hours = Math.floor(num/60);
        let minutes = num%60;
        return hours + ':' + minutes;
    }
}

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

 let repeatString = function(str, times){
     let repeatArr = [];
     let finalAnswer;
     if(times > 1){
         for(i=0; i<times; i++){
             repeatArr.push(str);
         }
         finalAnswer = repeatArr.join('');
         return finalAnswer;
     }else if (typeof str === "string"){
         return null;
     }else{
         return null;
     }
 }

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
