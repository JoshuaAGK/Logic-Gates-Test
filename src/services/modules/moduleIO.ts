import Module from "./module";

class ModuleIO implements ModuleIOInterface {
    value: number = 0;
    parentModule: Module;
    direction: "input" | "output";
    outputs?: [ModuleIO?] = [];

    constructor(direction: "input" | "output", parentModule: Module) {
        this.parentModule = parentModule;
        this.direction = direction;
        if (direction === "input") {
            delete this.outputs;
        }
    }

    setValue(value: number): void {
        this.value = value;
        if (this.direction === "output") {
            for (let output of this.outputs) {
                output.setValue(value);
            }
        } else {
            this.parentModule.calculate();
        }
    }

    connect(target: ModuleIO): void {
        this.outputs.push(target);
        target.setValue(this.value);
    };
}

export default ModuleIO;