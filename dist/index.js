import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AABCDWpcbyCkTWy5ZP6qZWZ5eiFe--CRJSMKxRYLE4usfQ";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
