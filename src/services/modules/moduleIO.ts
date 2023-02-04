import Module from "./module";

class ModuleIO implements ModuleIOInterface {
    value: number = 0;
    parentModule: Module;
    direction: "input" | "output";
    outboundConnections?: Array<ModuleIO> = [];
    inboundConnection?: ModuleIO = null;

    constructor(direction: "input" | "output", parentModule: Module) {
        this.parentModule = parentModule;
        this.direction = direction;
        if (this.direction === "input") {
            delete this.outboundConnections;
        } else {
            delete this.inboundConnection;
        }
    }

    setValue(value: number): void {
        this.value = value;
        if (this.direction === "output") {
            for (let output of this.outboundConnections) {
                if (output.value !== value) {
                    output.setValue(value);
                }
            }
        } else {
            this.parentModule.calculate();
        }
    }

    connect(target: ModuleIO): void {
        if (this.direction === "output") {
            this.outboundConnections.push(target);
            target.setValue(this.value);
            if (target.inboundConnection) {
                let sender: ModuleIO = target.inboundConnection;
                sender.outboundConnections = sender.outboundConnections.filter(output => output != target);
            }
            target.inboundConnection = this;
        } else {
            this.inboundConnection = target;
            this.setValue(target.value);
            target.outboundConnections.push(this);
        }
    };
}

export default ModuleIO;