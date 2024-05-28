var count = 1;
var element = document.querySelector("Like");
console.log(element);

function btn(){
    count--;
    element.innerText = count + "Like(s)";
    console.log(count);


}