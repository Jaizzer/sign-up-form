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

    // Apply to all input elements except confirm password.
    if (input.id !== 'password-confirmation') {

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
        });
    }
    // Apply only to the confirm password input element.
    else {
        checkPassword(input, errorMessagePlaceholder);
    }
});

// Access the form.
const form = document.querySelector('form');

// Prevent form submission if the user attempted to submit form with invalid inputs.
form.addEventListener("submit", (event) => {

    // Iterate throughout all input elements.
    inputElements.forEach(input => {

        // Select the corresponding error placeholder of the current input.
        let errorMessagePlaceholder = (input.parentNode).querySelector('.error-message');

        // If input has error, show corresponding error message and prevent form submission.
        if (!input.validity.valid) {

            showError(input, errorMessagePlaceholder);

            event.preventDefault();
        }
        
        // If password-confirmation has existing error (passwords do not match) prevent form submission.
        if (input.id === 'password-confirmation' & errorMessagePlaceholder !== "") {
            event.preventDefault();
        }
    })
});


// This function checks whether passwords match.
function checkPassword(passwordConfirmation, errorMessagePlaceholder) {

    // Acces the password input.
    const password = document.querySelector('#password');

    // Add password and confirm-password similarity checker feature.
    passwordConfirmation.addEventListener("blur", () => {

        // Show error if passwords does not match.
        if (password.value !== passwordConfirmation.value) {
            errorMessagePlaceholder.textContent = "Password does not match.";
        }
    });

    // Give immediate feedback whether confirm-password already matched the password or not.
    passwordConfirmation.addEventListener("input", ()  => {

        if (password.value === passwordConfirmation.value) {
            errorMessagePlaceholder.textContent = "";
        }
        else {
            errorMessagePlaceholder.textContent = "Password does not match.";
        }

    });

    // Give immediate feedback whether password already matched the confirm-password or not.
    password.addEventListener("input", ()  => {

        if (password.value === passwordConfirmation.value) {
            errorMessagePlaceholder.textContent = "";
        }
        else if (password.value !== passwordConfirmation.value & passwordConfirmation.value !== "") {
            errorMessagePlaceholder.textContent = "Password does not match.";
        }

    });
}