export abstract class CommonException extends Error {
  public code: string;
  public statusCode: number;
  public clientMessage: string;

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
