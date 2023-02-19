import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AAAWj15-dWy44kfNabXtrcgt9Hae2klbZoHRK9bci5x2nQ";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
