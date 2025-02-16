import { NextResponse } from "next/server";

export class HttpException extends Error {
  private code: number;
  private details: object = {};
  message: string;

  /**
   * Constructor for HttpException class.
   *
   * @param {string} message A human-readable error message.
   * @param {number} code An HTTP status code.
   * @param {object} [details] An optional object with additional error details.
   */
  constructor(message: string, code: number, details?: object) {
    super(message);
    this.message = message;
    this.code = code;
    if (details) this.details = details;
  }

  getHttpResponse() {
    return NextResponse.json(
      { name: this.message, message: this.message, details: this.details },
      { status: this.code },
    );
  }
}
