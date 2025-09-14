import {CupcakeView}         from '../js/view/cupcakeView.js';
import {CupcakeController}   from '../js/controller/cupcakeController.js';
import {CupcakeModel}        from '../js/model/cupcakeModel.js'; // FIXED CASE

const app = new CupcakeController(new CupcakeModel(), new CupcakeView());