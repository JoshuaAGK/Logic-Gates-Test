import { ModuleAnd, ModuleNot, ModuleOr } from "./services/modules/moduleBundler";

// require("./api/index.js");

let and1 = new ModuleAnd;
let not1 = new ModuleNot;
let not2 = new ModuleNot;
let or1 = new ModuleOr;



not1.outputs[0].connect(or1.inputs[0]);

console.log(or1);