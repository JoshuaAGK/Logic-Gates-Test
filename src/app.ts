import * as modules from "./services/modules";

require("./api/index.js");

let yeet = new modules.ModuleEndpoint("GET", "/test");

// console.log(yeet);

let logger1 = new modules.ModuleLogger;
let not1 = new modules.ModuleNot;

yeet.outputs[0].connect(logger1.inputs[0]);

// not1.outputs[0].connect(logger1.inputs[0]);
// not1.outputs[0].disconnect(logger1.inputs[0]);