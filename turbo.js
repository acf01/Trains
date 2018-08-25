let buttonHeader = document.getElementById("buttonHeader");
console.log(buttonHeader);
buttonHeader.addEventListener("click", function(){
    console.log("Is function firing?")
    this.style.Color = "red"});