import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduQaWz9pMqQx4TWjLam8d1RDJvSzcEH6ECre4ageV6cDeKMozqZvDqu6o";

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
