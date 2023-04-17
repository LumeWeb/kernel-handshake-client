import { Client, factory } from "@lumeweb/libkernel-universal";

const MODULE = "AAAZt-Coa6uKvZDRRbyHhiPp2c__quWA7ZT7Ahf8vj7yWA";

export interface Response {
  id?: number;
  error?: string;
  result: any;
}

export class HandshakeClient extends Client {
  public async ready(): Promise<void> {
    return this.callModuleReturn("ready");
  }

  public async query(method: string, params: any): Promise<Response> {
    return this.callModuleReturn("query", { method, params });
  }
}

export const createClient = factory<HandshakeClient>(HandshakeClient, MODULE);
