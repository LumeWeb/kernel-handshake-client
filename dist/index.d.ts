import { Client } from "@lumeweb/libkernel-universal";
export interface Response {
    id?: number;
    error?: string;
    result: any;
}
export declare class HandshakeClient extends Client {
    ready(): Promise<void>;
    query(method: string, params: any): Promise<Response>;
}
export declare const createClient: (...args: any) => HandshakeClient;
//# sourceMappingURL=index.d.ts.map