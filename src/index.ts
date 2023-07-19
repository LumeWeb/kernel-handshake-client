import { Client, factory } from "@lumeweb/libkernel/module";

export const MODULE = "zduK1zTsuL84p2AK1pPZy1RenyBFqVbbYqV9NEuEgv3f1J9d4kkng6wKxb";

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

  public async register(){
      return this.callModuleReturn("register");
  }
}

export const createClient = factory<HandshakeClient>(HandshakeClient, MODULE);
