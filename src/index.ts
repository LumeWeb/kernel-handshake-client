import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zdiMgQ1xs45s3XGwrNRMzm1oDKr7RfvZhkjtPD8CuXkjvwLkXhmDZJwq8j";

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
