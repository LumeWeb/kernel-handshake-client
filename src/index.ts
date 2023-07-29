import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduFk8sWbJ2Q2whMuZyQP5VU1Dx8Z9JpVhEyDspj6P1R47VgmAn8QQ49iF";

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
