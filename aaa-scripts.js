
let instCont = document.getElementById("instrucciones-container")

let bigContainer = document.getElementById("display--right-container")

let denyContainer = document.getElementById("q2--deny-display")

let botDeny = document.getElementById("q2-input-10")

let submitq2 = document.getElementById("bot--submit")

let botYes1 = document.getElementById("q2-input-1")
let botYes2 = document.getElementById("q2-input-2")
let botYes3 = document.getElementById("q2-input-3")
let botYes4 = document.getElementById("q2-input-4")
let botYes5 = document.getElementById("q2-input-5")
let botYes6 = document.getElementById("q2-input-6")
let botYes7 = document.getElementById("q2-input-7")
let botYes8 = document.getElementById("q2-input-8")
let botYes9 = document.getElementById("q2-input-9")


let dacaDisplay = document.getElementById("q2--ans-1");
let adopcionDisplay = document.getElementById("q2--ans-2");
let k1Display = document.getElementById("q2--ans-3");
let asiloDisplay = document.getElementById("q2--ans-4");
let peticionFamiliarDisplay = document.getElementById("q2--ans-5");
let peticionDisplay = document.getElementById("q2--ans-6");
let uVisaDisplay = document.getElementById("q2--ans-7");
let vawaDisplay = document.getElementById("q2--ans-8");
let sVisaDisplay = document.getElementById("q2--ans-9");



botYes1.addEventListener('click', function() {
    dacaDisplay.style.display = "block";
    botYes1.style.backgroundColor = "orangered";
});
botYes2.addEventListener('click', function() {
    adopcionDisplay.style.display = "block";
    botYes2.style.backgroundColor = "orangered";
});
botYes3.addEventListener('click', function() {
    k1Display.style.display = "block";
    botYes3.style.backgroundColor = "orangered";
});
botYes4.addEventListener('click', function() {
    asiloDisplay.style.display = "block";
    botYes4.style.backgroundColor = "orangered";
});
botYes5.addEventListener('click', function() {
    peticionFamiliarDisplay.style.display = "block";
    botYes5.style.backgroundColor = "orangered";
});
botYes6.addEventListener('click', function() {
    peticionDisplay.style.display = "block";
    botYes6.style.backgroundColor = "orangered";
});
botYes7.addEventListener('click', function() {
    uVisaDisplay.style.display = "block";
    botYes7.style.backgroundColor = "orangered";
});
botYes8.addEventListener('click', function() {
    vawaDisplay.style.display = "block";
    botYes8.style.backgroundColor = "orangered";
});
botYes9.addEventListener('click', function() {
    sVisaDisplay.style.display = "block";
    botYes9.style.backgroundColor = "orangered";
});

submitq2.addEventListener("click", function() {
    bigContainer.style.display = "block";
});


botDeny.addEventListener("click", ()=>{
    denyContainer.style.display = "block";
})



