import {CupcakeView}         from './view/cupcakeView.js';
import {CupcakeController}   from './controller/cupcakeController.js';
import {CupcakeModel}        from './model/cupcakeModel.js'; // FIXED CASE
import {selects}             from "../data/select.en.js";
import {labels}              from "../data/labels.en.js";

const app = new CupcakeController(new CupcakeModel(selects), new CupcakeView(labels));