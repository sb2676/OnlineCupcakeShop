export class CheckoutView {
    /**
     * Creates an instance of CheckoutView and initializes form references.
     */
    constructor() {
        /** @type {HTMLInputElement[]} */
        this.inputs = [];
        /** @type {HTMLFormElement|null} */
        this.form = document.querySelector("#form-checkout");
    }

    /**
     * Dynamically generates input fields inside the checkout form.
     *
     * @param {Object.<string, string>} data - Key-value pairs where the key is the input name
     *                                         and the value is the default input value.
     * @example
     * view.createInputs({
     *   name: "John Doe",
     *   email: "john@example.com",
     *   phone: "123-4567"
     * });
     */
    createInputs(data) {
        for (let property in data) {
            this.form.querySelector('#div-inputs').insertAdjacentHTML("beforeend", `
                <label>${property}: </label>
                <input type="text" name="${property}" value="${data[property]}" size="30"/>
                <br><span class="error-message" name="${property}"></span><br>
            `);
        }
       
    }

    /**
     * Updates the visual state of an input and its associated error message.
     *
     * @param {HTMLInputElement} input - The input element to update.
     * @param {string} message - The error message to display if invalid.
     * @param {boolean} ok - Whether the input is valid.
     * @returns {boolean} - True if valid, false otherwise.
     */
    toggle(input, message, ok) {
        const errorSpan = document.querySelector(`span[name=${input.name}]`);
        /* colour the input */
        if (input.classList.toggle('valid', ok)) {
            errorSpan.textContent = '';                     // hide message
            errorSpan.style.display = 'none';
        }
        if (input.classList.toggle('invalid', !ok)) {
            errorSpan.textContent = message;                // show message
            errorSpan.style.display = 'inline';
        }
        return ok;
    }

    /**
     * Validates an input field's value based on its name.
     *
     * @param {string} name - The name of the input (e.g., "name", "phone", "email").
     * @param {string} value - The value to validate.
     * @returns {string} - An error message if invalid, or an empty string if valid.
     */
    validateInput(name, value) {
        switch (name) {
            case "name":
                return /^[A-Za-z]+ [A-Za-z]+$/.test(value) ? "" : "Enter your full name (first and last).";
            case "phone":
                return /^\d{3}-\d{4}$/.test(value.trim()) ? "" : "Use format 123-4567.";
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address.";
            default:
                return "";
        }
    }

    
    /**
     * @param {string} inputName - The name of the input field.
     * @param {string} inputValue - The value to validate.
     * @returns {boolean} - True if the input is valid, false otherwise.
     */
    
   
    isValid(inputName, inputValue) {
        let result = this.validateInput(inputName, inputValue);        
        let ok = result === "";
        
        //retrieve the first input element whose name matches the inputName
        let input = this.inputs.find(input => input.name === inputName);
        
        //change the visual state of the input based on validation results
        this.toggle(input, result, ok);
        return ok;
    }
    
}