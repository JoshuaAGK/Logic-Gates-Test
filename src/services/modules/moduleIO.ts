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
        if (this.direction === "output") {
            delete this.inboundConnection;
        } else {
            delete this.outboundConnections;
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
            // Standard connection (connecting an input to an output)
            this.outboundConnections.push(target);
            target.setValue(this.value);

            // If target already has an existing inbound connection from another output, delete it
            if (target.inboundConnection) {
                let existingSender: ModuleIO = target.inboundConnection;
                existingSender.outboundConnections = existingSender.outboundConnections.filter(output => output != target);
            }

            target.inboundConnection = this;
        } else {
            // Reversed connection (connecting an input to an output)
            this.inboundConnection = target;
            this.setValue(target.value);
            target.outboundConnections.push(this);
        }
    }

    disconnect(target: ModuleIO): void {
        if (this.direction === "output") {           
            // Remove this outbound connection and target inbound connection
            // Set target value to 0 and recalculate
            this.outboundConnections = this.outboundConnections.filter(output => output != target);
            target.inboundConnection = null;
            target.value = 0;
            target.parentModule.calculate();
        } else {
            // Remove target outbound connection and this inbound connection
            // Set this value to 0 and recalculate
            target.outboundConnections = target.outboundConnections.filter(output => output != this);
            this.inboundConnection = null;
            this.value = 0;
            this.parentModule.calculate();
        }
    }
}

export default ModuleIO;