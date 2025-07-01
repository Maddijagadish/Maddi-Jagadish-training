// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("hello"));


// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello"));

// function longestWord(sentence) {
//   const words = sentence.split(' ');
//   let longest = '';

//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }

// console.log(longestWord("The quick brown fox jumped over the lazy dog"));


// let arr=[1, [2, [3, 4], 5], 6]
// console.log(arr.flat(Infinity))

// function flatten(){
//     let res = []
//     function flat(inner){
//         for (let i =0;i<inner.length;i++){
//             console.log(i)
//             if (Array.isArray(inner[i])){
//                 flat(inner[i])
//             }
//             else{
//                 res.push(inner[i])
//             }
//         }
//     }
//     flat(arr2)
//     return res
// }
// const arr2=[1,2,[3,[4],5]]
// console.log(flatten(arr2))



// function isAnagram(a, b) {
//   const lowerA = a.toLowerCase();
//   const lowerB= b.toLowerCase();

//   if (lowerA.length !== lowerB.length) return false;

//   const sortedA = lowerA.split('').sort().join('');
//   const sortedB = lowerB.split('').sort().join('');
//   return sortedA === sortedB;
// }

// console.log(isAnagram("listen", "silent")); 
// console.log(isAnagram("hello",  "world")); 



// function duplicateremove(arr){
//     let removedarr=[...new Set(arr)]
//     return removedarr
// }

// console.log(duplicateremove([1, 2, 2, 3, 4, 4, 5]))


function capitalizeWords(str){
    words=str.split(" ")
    for (let word of words){
        
        let arr2=word.split("")
        arr2.splice().toUpperCase()
        console.log(words)
    }
}
capitalizeWords("hello world from javascript")

// function capitalizeWords(str){
//     let res=""
//     for (let i=0;i<str.length;i++){

//     }

// }
// capitalizeWords("hello world from javascript")

// let arr=[23,45,32,56,21]
// const res=arr.filter((element,index,array)=>{
//     arr.pop()
//     return true
// })
// console.log(arr)
