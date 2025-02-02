function foo(a,b){return a+b;}
console.log(foo(1,2)); //3
//or use only function expressions
var foo = function(a,b){return a-b;}
console.log(foo(1,2)); //-1
//In this example, we avoid the issue by only using either function declaration or function expression, therefore avoiding any issues related to hoisting.