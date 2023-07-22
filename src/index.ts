import { Client, factory } from "@lumeweb/libkernel/module";

export const MODULE = "zduGANW6wKgvQkA7VnmZS6RsiNZYsTy72VfgbQYHHQGXFEwTaoJN47do51";

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
