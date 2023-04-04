import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AAC6uAvksM4gl6eKmnKJXalXQ7bMOQmQNzVfASzrQH2ejw";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
