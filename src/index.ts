import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zduPvUcNY7u2AzXoiERPRNgATBcpHgR5BLtQtTdiVfE73yiiiFmfyfjGR5";

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
