import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AABSrc3pZHhTmpWfNV8YxNT981CVKDZmN37BII4F27wbxg";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
