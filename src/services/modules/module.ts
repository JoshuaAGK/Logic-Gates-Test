import ModuleIO from "./moduleIO.js";
const { v4: uuidv4 } = require('uuid');

class Module implements ModuleInterface {
    inputs: Array<ModuleIO> = [];
    outputs: Array<ModuleIO> = [];
    id: string;
    type: string;

    constructor() {
        this.id = uuidv4();
    }

    makeIO(direction: "input" | "output", quantity: number): Array<ModuleIO> {
        let ioArray: Array<ModuleIO> = [];
        
        for (let i = 0; i < quantity; i++) {
            ioArray.push(new ModuleIO(direction, this));
        }

        return ioArray;
    }

    calculate(): void {
        // Override me!
    };

    // connect(): void {

    // };
}

export default Module;