//controller is filled with handelers

//do constructor then handle handelers

//in event handeler it should read input, update the model and update the view

export class CupcakeController {
    /**
     * Creates an object representing the animal controller.
     * 
     * @param {type} model - The model the controller interacts with.
     * @param {type} view - The view the controller interatcs with.
     * @returns {CupcakeController} The object representing the animal controller.
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.decorSelect.addEventListener("change", this.handleInputChange);
        this.view.breadSelect.addEventListener("change", this.handleInputChange);
        this.view.icingSelect.addEventListener("change", this.handleInputChange);
      
        this.view.renderCupcake(this.model.bread, this.model.icing, this.model.decor);
    }

    /**
     * Handles "change" events fired by input fields.
     * On change, the model is updated to reflect the new values and the view 
     * is tasked with enabling/disabling the submit button.
     * 
     * @param {Event} event - the event to be processed 
     */
    handleInputChange = (event) => {
        let input = event.target;
        this.model[input.name] = input.value;
        this.view.renderCupcake(this.model.bread, this.model.icing, this.model.decor);
    }

}