import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AAAz2qQHwKQ7YurprbLmzpHc66BY0pljDZsa_a6QmeBe_g";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
