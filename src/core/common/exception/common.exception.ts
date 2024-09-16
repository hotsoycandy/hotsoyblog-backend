import { ExceptionCode } from "./exception-code";

export abstract class CommonException extends Error {
  private code: string;
  private statusCode: number;
  private clientMessage: string;

  constructor(params: {
    code: string;
    statusCode: number;
    clientMessage: string;
    internalMessage: string;
  }) {
    const { code, statusCode, clientMessage, internalMessage } = params;
    super(internalMessage);
    this.code = code;
    this.statusCode = statusCode;
    this.clientMessage = clientMessage;
  }
}
