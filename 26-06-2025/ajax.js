// let email=prompt("enter your mail")
// if email.test(/\w+@[a-zA-Z_].[a-z]{2,3}/){
//     console.log("valid email")
// }else{
//     console.log("Invaild email")
// }

// let number="hello world"
// regex=/^"hello"*i/
// if (regex.match(number)){
//     console.log("valid num")
// }else{
//     console.log("Invaild num")
// }

let str="     goood       boy     is    jagadish"
regex=/^\s+|\s+/g
console.log(str.replace(regex," "))


// let str="gsbxn  Gijx  KSjx"
// regex=/\b[A-Z][a-z0-9]*\b/
// console.log(str.match(regex))