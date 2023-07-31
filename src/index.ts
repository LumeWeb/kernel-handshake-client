import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduGFHCt6dUM25uqw3wuN37LEB7Z9yMjyNqcfqc2H494UqhKhu29CSjF3M";

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
