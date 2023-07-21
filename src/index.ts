import { Client, factory } from "@lumeweb/libkernel/module";

export const MODULE = "zduGT37j8ctXVUvYgDD1BwAtTz5eUwbx6J9GvodAkKRHAsbU3ztqDcdTGb";

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
