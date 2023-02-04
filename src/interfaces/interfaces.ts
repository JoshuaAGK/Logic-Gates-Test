export {};

declare global {
    interface ModuleIOInterface {
        value: number;
        parentModule: ModuleInterface;
        outboundConnections?: Array<ModuleIOInterface>;
        inboundConnection?: ModuleIOInterface;
        direction: "input" | "output";

        setValue: (value: number) => void;
        connect: (target: ModuleIOInterface) => void;
    }

    interface ModuleInterface {
        inputs: ModuleIOInterface[];
        outputs: ModuleIOInterface[];
        type: string;
        id: string;

        makeIO: (direction: "input" | "output", quantity: number) => Array<ModuleIOInterface>;
        calculate: () => void;
    }
}