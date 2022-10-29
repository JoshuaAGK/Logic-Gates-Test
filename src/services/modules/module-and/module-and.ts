import Module from "../module.js";

class ModuleAnd extends Module {
    constructor(inputQuantity: number = 2) {
        super();
        this.type = "ModuleAnd";
        this.inputs = this.makeIO("input", inputQuantity);
        this.outputs = this.makeIO("output", 1);

        this.calculate();
    }

    calculate(): void {
        let allInputsTrue: boolean = this.inputs.every(input => { return input.value >= 1 });
        this.outputs[0].setValue(allInputsTrue ? 1 : 0);
    }
}

export default ModuleAnd;