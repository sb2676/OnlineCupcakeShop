export class CupcakeModel{
     #selects = null; // external data

    /**
     * Creates an object representing the animal model.
     * 
     * @param {type} selects - The reference to the external resource with data
     * @returns {ProductModel} - The object representing the animal model.
     */
    constructor(selects) {
        // Assign the selects to the private field #selects
        this.#selects = selects;

        let properties = Object.keys(this.#selects);

        properties.forEach(property => {
            this[property] = "";//initialize 
        });
    }
    /**
     * Returns an array of this object's properties names. The returned array is
     * used by View to dynamically render the selects. For each Model property, 
     * a select is being rendered in View.
     * 
     * NOTE: Object.keys(this) does not return #selects because #selects 
     * is a private field in the ProductModel class. Private fields are part of 
     * the new class fields syntax introduced in ECMAScript 2022 and are not 
     * accessible as part of the object's enumerable properties.
     * 
     * @returns {Array} array of property names (strings)
     */

    getProperties() {
        return Object.keys(this);
    }
    
    /**
     * Returns an array of this object's properties values. The returned array 
     * is used by View to dynamically render the image.
     * 
     * @returns {Array} array of property values (strings)
     */

    getValues() {
        return Object.values(this);
    }
    
    /**
     * Gets the data from the external resource to be used as select options.
     * 
     * @param {String} name - the name of the select element
     * @returns {Array} array of select's options (strings)
     */
    getOptions(name) {
        // 1. extract the data from the external resource (dataSource).
        let options = this.#selects[name];

        return options;
    }

       /**
     * Stores cupcake data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'cupcake'.
     * 
     * @returns {undefined}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON}
     */
    store() {
        localStorage.setItem('cupcake', JSON.stringify(this));
    }    

}