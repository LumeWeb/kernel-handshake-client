import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AAAArUFfECicfHF6nB8bTOVPlIH5zLOrT0nviQocrWmohg";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
