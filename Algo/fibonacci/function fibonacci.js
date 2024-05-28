function fibonacci(n){
var n0 = 0;
var n1 = 1;
var result;
if(n == 0 || n ==1){


return n;
}


for (var i = 2; i <= n; i++) {


     result = n0 + n1;
    n0 = n1;
    n1 = result;
    
}
return result;
}
console.log(fibonacci(6));