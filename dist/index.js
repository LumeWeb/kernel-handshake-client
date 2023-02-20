import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AABpkxAEOLG5JKGVrC4pFCdFnBpA5SbBZYqtz_eIjEEabg";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
