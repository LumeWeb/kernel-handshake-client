import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AAAZt-Coa6uKvZDRRbyHhiPp2c__quWA7ZT7Ahf8vj7yWA";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
