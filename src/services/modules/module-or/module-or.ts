import Module from "../module.js";

class ModuleOr extends Module {
    constructor(inputQuantity: number = 2) {
        super();
        this.type = "ModuleOr";
        this.inputs = this.makeIO("input", inputQuantity);
        this.outputs = this.makeIO("output", 1);

        this.calculate();
    }

    calculate(): void {
        let someInputsTrue: boolean = this.inputs.some(input => { return input.value >= 1 });
        this.outputs[0].setValue(someInputsTrue ? 1 : 0);
    }
}

export default ModuleOr;