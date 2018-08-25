
let textHeader = document.getElementById("textHeader");
console.log(textHeader.innerHTML);
let button1 = document.getElementById("button1");
function makeSomewhatRed(){
    if(textHeader.classList.contains("somewhatRed")){
        textHeader.classList.remove("somewhatRed");
    }else{
        textHeader.classList.add("somewhatRed");
    }
 }
 
button1.addEventListener("click", makeSomewhatRed);