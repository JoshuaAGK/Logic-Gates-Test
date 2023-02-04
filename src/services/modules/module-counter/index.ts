import Module from "../module.js";

class ModuleCounter extends Module {
    count: number;
    countTarget: number;
    constructor(countTarget: number = 3) {
        super();
        this.type = "ModuleCounter";
        this.inputs = this.makeIO("input", 2);
        this.outputs = this.makeIO("output", 1);

        this.count = 0;
        this.countTarget = countTarget;

        this.calculate();
    }

    calculate(): void {
        if (this.inputs[1].value >= 1) {
            this.count = 0;
        }
        
        if (this.inputs[0].value >= 1 && this.inputs[1].value < 1) {
            this.count = Math.min(this.count + 1, this.countTarget);
        }

        this.outputs[0].setValue(this.count === this.countTarget ? 1 : 0);
    }
}

export default ModuleCounter;