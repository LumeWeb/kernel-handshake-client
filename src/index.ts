import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduHui3wDazyjop4PjcXGHzbs6QJgkVb6hfqWRkja4QCkQ3JeLUd2aFhm9";

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
