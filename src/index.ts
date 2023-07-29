import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduKgJ3grSZvc4AnnCfiJUSLmizKzPByJ5ZeRU3pvo2LRf1DsVjQDdbFvw";

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
