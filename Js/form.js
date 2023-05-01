import { validateForm } from "./validations.js";

var button = document.getElementById("submitButton");
var buttonDiv = document.getElementById("submitDivId");


function moveButton() {
    if (buttonDiv.classList.contains('submitDiv')) {
        buttonDiv.className = "submitMoved";
    }
    else {
        buttonDiv.className = "submitDiv";
    }    
}

function confirmMessage() {
    event.preventDefault(); // evita la recarga de la página
    var confirmation = document.getElementById("confirmMessageID");
    confirmation.classList.replace("confirmHidden", "confirmMessage");
}

button.addEventListener("mouseover", function() {
    var validation = validateForm();
    if(validation) {
        moveButton();
    }
});

button.addEventListener("click", confirmMessage);

