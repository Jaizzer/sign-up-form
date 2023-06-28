// Store all input elements to an array.
const inputElements = Array.from(document.querySelectorAll('input'));

// Show error in inputs.
function showError(input, errorMessagePlaceholder) {

    // If field is left empty, show respective message.
    if (input.validity.valueMissing) {
        errorMessagePlaceholder.textContent = "Don't leave this input blank."
    }
    // If input is of wrong type, show respective message.
    else if (input.validity.typeMismatch) {
        errorMessagePlaceholder.textContent = "Invalid input. Please enter a valid value."
    }
}


// Add validation to individual input elements.
inputElements.forEach(input => {

    // Select the corresponding error placeholder of the input.
    let errorMessagePlaceholder = (input.parentNode).querySelector('.error-message');

    // Triggered when the input loses focus (user clicks or tabs away from the current input)
    input.addEventListener("blur", () => {

        // Remove error message if the input is valid.
        if (input.validity.valid) {
            errorMessagePlaceholder.textContent = "";
        }
        // Show error if the input is invalid. 
        else {
            showError(input, errorMessagePlaceholder);
        }
    });

    // Triggered when the user is currently focused on the current field.
    input.addEventListener("focus", () => {

        // Remove error messages while the user is typing.
        errorMessagePlaceholder.textContent = "";
    })
});
