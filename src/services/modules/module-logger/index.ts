import Module from "../module.js";

class ModuleLogger extends Module {
    constructor() {
        super();
        this.type = "ModuleLogger";
        this.inputs = this.makeIO("input", 1);
    }

    calculate(): void {
        console.log(this.inputs[0].value);
    }
}

export default ModuleLogger;