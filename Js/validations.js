
// Valida los datos del formulario.
export function validateForm() {
    const idLabel = ["labelName", "labelLastName", "labelMail", "labelMessage"];
    const idInput = ["fname", "lname", "email", "lmessage"];
    let error = false;

    // Verifico que todos los campos tengan contenido.
    for (let i = 0; i < idLabel.length; i++) {
        const label = document.getElementById(idLabel[i]);
        const input = document.getElementById(idInput[i]);

        if (i === 3) {
            if (input.value.trim().length === 0) {
                resetError(label, input, "errorInputMessage", "inputMessage");
                showError(label, input, "inputMessage", "errorInputMessage", "El mensaje es obligatorio y solo se permiten letras");
                error = true;
            } else {
                resetError(label, input, "errorInputMessage", "inputMessage");
            }
            continue;
        }

        if (input.value.trim().length === 0) {
            resetError(label, input, "errorInput", "input");
            showError(label, input, "input", "errorInput", `El ${idLabel[i].replace("label", "").toLowerCase()} es obligatorio y solo se permiten letras`);
            error = true;
        } else {
            resetError(label, input, "errorInput", "input");
        }
    }

    // Verifico que el correo tenga un formato correcto.
    const labelMail = document.getElementById("labelMail");
    const inputMail = document.getElementById("email");
    if (!validateEmail(inputMail.value)) {
        resetError(labelMail, inputMail, "errorInput", "input")
        showError(labelMail, inputMail, "input", "errorInput", "El correo electrónico no tiene un formato válido");
        error = true;
    } else {
        resetError(labelMail, inputMail, "errorInput", "input");
    }

    return error;
}

// Retorna 'true' si el correo es válido
function validateEmail(mail) {
    const regularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularEmail.test(mail);
}

// Muestra un mensaje de error y cambia el estilo de los elementos de entrada y etiquetas correspondientes.
function showError(label, input, inputClass, newInputClass, errorMessage) {
    label.classList.replace("labelStyle", "labelError");
    input.classList.replace(inputClass, newInputClass);
    const errorSpan = document.createElement("span");
    errorSpan.classList.add("error-message");
    errorSpan.textContent = errorMessage;
    input.parentElement.appendChild(errorSpan);
}

// Restablece el estilo de los elementos de entrada y etiquetas correspondientes y elimina el mensaje de error.
function resetError(label, input, inputClass, newInputClass) {
    label.classList.replace("labelError", "labelStyle");
    input.classList.replace(inputClass, newInputClass);
    var errorSpan = input.parentElement.querySelector(".error-message");
    if (errorSpan) {
        errorSpan.remove();
    }
}
