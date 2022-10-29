import Module from "../module.js";

class ModuleNot extends Module implements ModuleNotInterface {
    constructor() {
        super();
        this.type = "ModuleNot";
        this.inputs = this.makeIO("input", 1);
        this.outputs = this.makeIO("output", 1);

        this.calculate();
    }

    calculate(): void {
        this.outputs[0].setValue(this.inputs[0].value > 0 ? 0 : 1);
    }
}

export default ModuleNot;