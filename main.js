/* xify - returns the same string, but with every character replaced by an 'x'
Examples:
xify('hello') -> 'xxxxx'
xify('hi there') -> 'xxxxxxxx'  */


function xify(str){
    let newStr = "";
    
    for(let i = 0; i < str.length; i++){
    newStr += "x";
    }
   return newStr;
   
}
console.log(xify("asdfgh"));

//---------------------------------------------------------------------------------------

/* yellingChars - returns the given string with an exclamation point after each character
Examples:
yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
Hints:
We can add more than one thing to the string each time through the loop. In this case, 
it's the current character AND an exlamation point. */

// function yellingChars (str){
    
//     let newStr = "";
    
//     for (let i = 0; i < str.length; i++){
//         newStr += str[i] + "!";
//         }
//     return newStr;
// }

// console.log(yellingChars("qwert"));
//---------------------------------------------------------------------------------------

/* indexedChars - adds the index of each character before that character in the given string
Examples:
indexedChars('hello') -> '0h1e2l3l4o'
indexedChars('bye') -> '0b1y2e'
Hints:
We can add something BEFORE the current character as well! */


// function indexedChars (str){
//     let newStr = "";
//     for (let i = 0; i<str.length; i++){
//         newStr += [i]+str[i];
//     }
//     return newStr;
// }

// console.log(indexedChars("qwe"));
//---------------------------------------------------------------------------------------

/* exclaim - returns the given sentence with every question mark or period changed to an exclamation point
Examples:
exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
exclaim('This is fine.') -> 'This is fine!' */

// function exclaim(str){
//     let newStr = "";
//     for (let i = 0; i<str.length; i++){

//         if (str[i] === "?" || str[i] === "."){
//             newStr+="!"
//         } else {
//             newStr+=str[i];
       
//         }
//     }
//     return newStr;

// }

// console.log(exclaim("?qwe."));

//---------------------------------------------------------------------------------------

/* truncate - shortens a long string to 15 characters plus an ellipsis (...)
Examples:
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."   */

// function truncate (str){
//     let newStr = "";
//     for (let i = 0; i<15; i++){
//         newStr+=str[i];
//     }
//     // console.log(newStr.length);
//     newStr+="..."
//     return newStr;
   
// }
// console.log(truncate("qazwsxedcrfvtgbxxxxxxxx"));
//---------------------------------------------------------------------------------------

/* ciEmailify - creates an email from a two-part name
Examples:
ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'*/


// function ciEmailify(str){
//     let newStr = "";
//     for (let i = 0; i<str.length; i++){
//         if (str[i]===" "){
//             newStr+=".";
//         } else {
//             newStr+= str[i].toLowerCase();
//         }
//     }
//     newStr+="@codeimmersives.com";
//     return newStr;
// }

// console.log(ciEmailify("CoLin JaFFe"));
//---------------------------------------------------------------------------------------

/* reverse - reverses the given string  Examples: reverse('colin') -> 'niloc'
                reverse('mesuara') -> 'arausem'                             */

// function reverse(str){
//     let newStr = "";
//     for(let i = 1; i<=str.length; i++){
        
//         newStr += str[str.length-[i]];
//     }
//     return newStr
// }
// console.log(reverse("xxxyyy"));

//---------------------------------------------------------------------------------------

/* onlyVowels - returns only the vowels from a word
Examples:
onlyVowels('Colin Jaffe') -> 'oiae'
onlyVowels('quickly') -> 'ui'
onlyVowels('Anthony DeRosa') -> 'Aoeoa'   */

// function onlyVowels(str){
//     let newStr = "";
//     for (let i = 0; i<str.length; i++){
//         if(str[i].toLowerCase()==="a"||str[i].toLowerCase()==="o"||str[i].toLowerCase()==="i"||
//         str[i].toLowerCase()==="u"||str[i].toLowerCase()==="e"){
//             newStr += str[i];
//         } 
//     }
//     return newStr;
// }


// console.log(onlyVowels("Colin Jaffe"));





