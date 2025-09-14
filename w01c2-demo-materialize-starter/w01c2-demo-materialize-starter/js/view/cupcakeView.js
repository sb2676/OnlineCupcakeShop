export class CupcakeView{
    constructor(){
        this.breadSelect = document.querySelector('#bread');
        this.icingSelect = document.querySelector('#icing');
        this.decorSelect = document.querySelector('#decor');
        
        this.breadImage = document.querySelector("#breadImg");   // FIXED
        this.icingImage = document.querySelector("#icingImg");   // FIXED
        this.decorImage = document.querySelector("#decorImg");   // FIXED
    }

    renderCupcake(bread, icing, decor){
        
        let breadImgSrc = bread ? `../../images/${bread}.png` : "";
        let icingImgSrc = icing ? `../../images/${icing}.png` : "";
        let decorImgSrc = decor ? `../../images/${decor}.png` : "";

        this.breadImage.src = breadImgSrc;
        this.icingImage.src = icingImgSrc;
        this.decorImage.src = decorImgSrc;
    }
}