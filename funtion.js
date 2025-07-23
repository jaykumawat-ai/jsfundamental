
// function greet(name) {
//     console.log(`hello how are you, ${name}`); // function defination
// }
// greet("Jay");
// greet("parth");
// greet("shivam");// function calling 

  

// function greet(name) {
//    return (`hello how are you, ${name}`); // function defination
// }
// console.log (greet("Jay"));
// console.log(greet("parth"));
// console.log(greet("shivam"));// function calling 

// function addNum(num1,num2){
//     return num1+num2;
//     console.log("i have nere");//it won't print because its after return 
    
// } 
// console.log(addNum(10,20));

 
function addNum(num1, num2) {
    let n1 = Number(num1);
    let n2 = Number(num2);
    if (isNaN(n1)||isNaN(n2)){
        return("enter proper number")
    }
    return n1 + n2;
}
console.log(addNum(10, "abc"));//nan-> not a number
