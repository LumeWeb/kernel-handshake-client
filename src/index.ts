import { factory, NetworkClient } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduS4q1t6q5tLtANmRaUuAJNDqTggfwtV9hhK6wMRg1v891z5ts7iyobnw";

export interface Response {
  id?: number;
  error?: string;
  result: any;
}

export class HandshakeClient extends NetworkClient {
  public async query(method: string, params: any): Promise<Response> {
    return this.callModuleReturn("query", { method, params });
  }
}

export const createClient = factory<HandshakeClient>(HandshakeClient, MODULE);
