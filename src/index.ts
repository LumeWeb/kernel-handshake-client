import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduLdBY8xmMEHEmkHTh2HoYrJEdNxofbUeWRq2xDaesSKc81v1www2CQD5";

export interface Response {
  id?: number;
  error?: string;
  result: any;
}

export class HandshakeClient extends NetworkClient {
  public async query(method: string, params: any): Promise<Response> {
    return this.callModuleReturn("query", { method, params });
  }
}

export const createClient = factory<HandshakeClient>(HandshakeClient, MODULE);
