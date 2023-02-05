import Module from "../module.js";
import app from "../../../api";

class ModuleEndpoint extends Module {
    body: {};
    ip: string;
    query: {};
    headers: {};
    params: {};
    path: string;
    constructor(method: string = "GET", endpoint: string = "/") {
        super();
        this.type = "ModuleEndpoint";
        this.outputs = this.makeIO("output", 1);

        switch(method) {
            case "GET":
                app.get(endpoint, async (req: any, res: any) => {
                    this.body = req.body;
                    this.ip = req.ip;
                    this.query = req.query;
                    this.headers = req.headers;
                    this.params = req.params;
                    this.path = req.path;
                    this.calculate();
                })
                break;
            case "POST":
                app.post(endpoint, async (req: any, res: any) => {
                    this.body = req.body;
                    this.ip = req.ip;
                    this.query = req.query;
                    this.headers = req.headers;
                    this.params = req.params;
                    this.path = req.path;
                    this.calculate();
                })
                break;
            case "PUT":
                app.put(endpoint, async (req: any, res: any) => {
                    this.body = req.body;
                    this.ip = req.ip;
                    this.query = req.query;
                    this.headers = req.headers;
                    this.params = req.params;
                    this.path = req.path;
                    this.calculate();
                })
                break;
            case "DELETE":
                app.delete(endpoint, async (req: any, res: any) => {
                    this.body = req.body;
                    this.ip = req.ip;
                    this.query = req.query;
                    this.headers = req.headers;
                    this.params = req.params;
                    this.path = req.path;
                    this.calculate();
                })
                break;
        }
    }

    calculate(): void {
        this.outputs[0].setValue({
            body: this.body,
            ip: this.ip,
            query: this.query,
            headers: this.headers,
            parameters: this.params,
            path: this.path
        });
        this.outputs[0].setValue(0);
    }
}

export default ModuleEndpoint;