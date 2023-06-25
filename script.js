// Store all input elements to an array.
const inputElements = Array.from(document.querySelectorAll('input'));

// Show error in inputs.
function showError(input, errorMessagePlaceholder) {

    // If field is left empty, show respective message.
    if (input.validity.valueMissing) {
        errorMessagePlaceholder.textContent = "Do not live this input blank."
    }
    // If input is of wrong type, show respective message.
    else if (input.validity.typeMismatch) {
        errorMessagePlaceholder.textContent = "You need to input of type that matches the type required."
    }
}

