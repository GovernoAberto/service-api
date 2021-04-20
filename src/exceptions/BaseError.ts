import { Response } from 'express';

export default class BaseError extends Error {
    
  readonly code: number;
  readonly message: string;
  readonly httpCode: number = 500;

  constructor() {
    super();
  }

  render() : { message: string, code: number } {
    return {
      message: this.message,
      code: this.code
    };
  }

  renderHttpResponse(response: Response) : Response {
    return response.status(this.httpCode).json({
      message: this.message,
      code: this.code
    });
  }
}