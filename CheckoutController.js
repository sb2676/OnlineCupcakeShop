import {Controller} from './Controller.js';

/**
 * Responds to user inputs. Here, we use the FormData, a JS built-in class that 
 * provides a way to easily construct a set of key/value pairs representing form 
 * fields and their values.
 * 
 * More at {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData FormData}.
 */
export class CheckoutController extends Controller {
    constructor(model, view) {
        super(model, view);

        this.view.createInputs(this.model.getInputData());

        // egister event handler for all input events
        this.view.inputs.forEach((input) => {
            input.addEventListener("change", this.handleInputChange);
        });

        // register form submit handler
        this.view.form.addEventListener("submit",this.handleFormSubmit);
    }

    /**
     * Handles input changes. Retrieves the input element that triggered the 
     * event and updates the model with the new value from the input element.
     * The model property corresponding to the input's name is updated with its 
     * value.
     * 
     * @param {Event} event - an object describing the event that has occurred
     * @returns {undefined}
     */
    handleInputChange = (event) => {
        let input = event.target;
        
        if(!this.view.isValid(input.name, input.value)){return; };
        this.model[input.name] = input.value;
        this.model.store();
    }

    handleFormSubmit = (event) => {
        // Example: Validate all inputs (you can customize this)
        let isFormValid = true;

        this.view.inputs.forEach(input => {
            if (!this.view.isValid(input.name, input.value)) {
            isFormValid = false;
            // Optionally, show errors here
            }
        });

        if (!isFormValid) {
            event.preventDefault();
            console.log("Form submission blocked due to invalid inputs");
        }
        // Otherwise, submission proceeds normally
        }

}