import { Client, factory } from "@lumeweb/libkernel-universal";

const MODULE = "AAAz2qQHwKQ7YurprbLmzpHc66BY0pljDZsa_a6QmeBe_g";

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
