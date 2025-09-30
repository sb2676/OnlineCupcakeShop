export class Model { 
    /**
     *  Window.localStorage is used to store the model as a JSON string under the key 'cupcake'
     * @returns {undefined}
     */
    
    store() {
        localStorage.setItem('cupcake', JSON.stringify(this));
    }     
}