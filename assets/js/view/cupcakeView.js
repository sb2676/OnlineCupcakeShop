export class CupcakeView{
    constructor(labels){
        this.productImage = document.querySelector("#productImage");
        this.selects = [];
        this.labels = labels;

        this.renderLabels(labels);    
    }

    /**
     * Renders an HTML select element.
     *  
     * @param {String} name - the name of the select to be created. 
     * @param {Array} options - array of strings for select's options
     */

    createSelect(name, options) {
        let selectsDiv = document.querySelector("#div-selects");

        selectsDiv.insertAdjacentHTML("beforeend", `
            <select name="${name}">
                <option value="undefined">-- Select a ${name} --</option>
            </select>
        `);

        let select = selectsDiv.querySelector(`[name=${name}]`);
        
        options.forEach((option)=>{
            select.insertAdjacentHTML("beforeend", `
                <option value=${option}>${option}</option>
            `);
        });

        this.selects.push(select);
    }

    renderLabels(){
        const elementsToUpdate = document.querySelectorAll("[data-label]");
        elementsToUpdate.forEach((element) => {
            const labelName = element.dataset.label;
            if (this.labels[labelName]) {
                element.textContent = this.labels[labelName];
            }}        );
    }
          
        
    /**
     * Renders the image based on the model data.
     * @param {Array} data - array holding the model data.
     */

    renderCupcake(bread, icing, decor){
        const data={bread, icing, decor};
        
        Object.entries(data).forEach(([name, value])=>{
            const img = document.querySelector(`#${name}Img`);
            img.src = value ? `assets/images/${value}.png` : "";
        });

    }

}
