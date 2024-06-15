// document.addEventListener("DOMContentLoaded", function() {
//     let submitPassSec = document.getElementById("pas-sec-input");
//     let dispPassSec = document.getElementById("password-sec-container");
//     let pasSec = document.getElementById("password-secreto");

//     submitPassSec.addEventListener("click", function(event) {
//         event.preventDefault(); 
//         if (pasSec.value === "12345") {
//             dispPassSec.style.display = "block";
//         } else {
//             alert("Contraseña incorrecta"); 
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    let submitPassSec = document.getElementById("pas-sec-input");
    let dispPassSec = document.getElementById("password-sec-container");
    let pasSec = document.getElementById("password-secreto");

    submitPassSec.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        if (pasSec.value === "12345") {
            dispPassSec.style.display = "block";
        } else {
            pasSec.placeholder = "Contraseña incorrecta";
            pasSec.value = ""; // Limpiar el campo de contraseña
        }
    });
});