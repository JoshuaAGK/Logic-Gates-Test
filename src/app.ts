import { ModuleAnd, ModuleNot, ModuleOr, ModuleXor } from "./services/modules/moduleBundler";

// require("./api/index.js");

let and1 = new ModuleAnd;
let not1 = new ModuleNot;
let not2 = new ModuleNot;
let or1 = new ModuleOr;
let xor1 = new ModuleXor(3);



not1.outputs[0].connect(xor1.inputs[0]);
not2.outputs[0].connect(xor1.inputs[1]);

console.log(xor1);