import Module from "../module.js";

class ModuleXor extends Module {
    constructor(inputQuantity: number = 2) {
        super();
        this.type = "ModuleXor";
        this.inputs = this.makeIO("input", inputQuantity);
        this.outputs = this.makeIO("output", 1);

        this.calculate();
    }

    calculate(): void {
        let highInputs: number = this.inputs.filter(input => { return input.value >= 1 }).length;
        this.outputs[0].setValue(highInputs % 2 == 0 ? 0 : 1);
    }
}

export default ModuleXor;