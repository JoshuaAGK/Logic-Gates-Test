const modules = require("./services/modules/moduleBundler");

// require("./api/index.js");

let and1 = new modules.ModuleAnd;
let not1 = new modules.ModuleNot;
let not2 = new modules.ModuleNot;
let not3 = new modules.ModuleNot;
let or1 = new modules.ModuleOr;
let xor1 = new modules.ModuleXor(3);



not1.outputs[0].connect(xor1.inputs[0]);
// not2.outputs[0].connect(xor1.inputs[1]);
not3.outputs[0].connect(xor1.inputs[2]);

console.log(xor1);