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


// Add validation to individual input elements.
inputElements.forEach(input => {

    // Select the corresponding error placeholder of the input.
    let errorMessagePlaceholder = (input.parentNode).querySelector('.error-message');

    input.addEventListener("blur", () => {
        // Remove error message if the input is valid.
        if (input.validity.valid) {
            errorMessagePlaceholder.textContent = "";
        }
        // Show error if the input is invalid. 
        else {
            showError(input, errorMessagePlaceholder);
        }
    });z
});
