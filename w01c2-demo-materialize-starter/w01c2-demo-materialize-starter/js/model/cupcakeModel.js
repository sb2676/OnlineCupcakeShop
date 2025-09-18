export class CupcakeModel{
    #selects = null;//pointer to the data

    //make method to get properties andvalues and options


    constructor(selects){
        this.#selects=selects;
        //
        this.bread = "";//for the bread
        this.icing = "";//for the icing
        this.decor = "";//for the decor
        //
        let properties = Object.keys(this.#selects);
       //Define 
    }
}