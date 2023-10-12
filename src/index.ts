import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE = "zrjGvTrdxGEsNZiHBQisebuEDYzHPkuq9L8GBRB5AZ2iwQf";

export interface Response {
  id?: number;
  error?: string;
  result: any;
}

export class HandshakeClient extends NetworkClient {
  public async query(method: string, params: any): Promise<Response> {
    return this.callModuleReturn("query", { method, params });
  }
  public async dnsQuery(fqdn: string, type: string): Promise<Response> {
    return this.callModuleReturn("dnsQuery", { fqdn, type });
  }
}

export const createClient = factory<HandshakeClient>(HandshakeClient, MODULE);
