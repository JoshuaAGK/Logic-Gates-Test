const { ModuleAnd, ModuleNot } = require("./services/modules/moduleBundler.js");
// require("./api/index.js");

let and1 = new ModuleAnd;
let not1 = new ModuleNot;
let not2 = new ModuleNot;



and1.inputs[0].connect(not1.outputs[0]);