import * as modules from "./services/modules";

let not1 = new modules.ModuleNot;
let not2 = new modules.ModuleNot;

let counter1 = new modules.ModuleCounter;

not1.outputs[0].connect(counter1.inputs[0]);

console.log(counter1);

not1.outputs[0].disconnect(counter1.inputs[0]);

console.log(counter1);

not1.outputs[0].connect(counter1.inputs[0]);

console.log(counter1);

not1.outputs[0].disconnect(counter1.inputs[0]);

console.log(counter1);

not1.outputs[0].connect(counter1.inputs[0]);

console.log(counter1);

not1.outputs[0].disconnect(counter1.inputs[0]);

console.log(counter1);

not2.outputs[0].connect(counter1.inputs[1]);

console.log(counter1);

not1.outputs[0].connect(counter1.inputs[0]);

console.log(counter1);
