import { CommonException } from "./common.exception";

export class NotFoundException extends CommonException {
  constructor(params: {
    code: string;
    clientMessage: string;
    internalMessage: string;
  }) {
    const { code, clientMessage, internalMessage } = params;
    super({ code, statusCode: 404, clientMessage, internalMessage });
  }
}
