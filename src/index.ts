import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduSeYqfkMn8cUpdUCTKbJLosd6FDEi3qfrKMTjDMBd4DKtrGL8Rd21aB9";

export interface Response {
  id?: number;
  error?: string;
  result: any;
}

export class HandshakeClient extends NetworkClient {
  public async query(method: string, params: any): Promise<Response> {
    return this.callModuleReturn("query", { method, params });
  }
  public async queryDns(fqdn: string, type: string): Promise<Response> {
    return this.callModuleReturn("queryDns", { fqdn, type });
  }
}

export const createClient = factory<HandshakeClient>(HandshakeClient, MODULE);
