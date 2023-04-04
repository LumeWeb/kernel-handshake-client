import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AABF8mJzYWmmAqGS36gRHZHDCEtT8xnoSZkjEiiw2vDcWQ";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
