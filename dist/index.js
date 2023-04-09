import { Client, factory } from "@lumeweb/libkernel-universal";
const MODULE = "AADuUVqTvjUw_TwG2f9irz5PTP9XNczz0I8t2rStGJjYWA";
export class HandshakeClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async query(method, params) {
        return this.callModuleReturn("query", { method, params });
    }
}
export const createClient = factory(HandshakeClient, MODULE);
