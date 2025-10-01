import { NextResponse } from "next/server";
import { RequestError, ValidationError } from "../http-errors";
import { ZodError, z } from "zod"; // import z để dùng z.treeifyError()

export type ResponseType = "api" | "server";

const formatResponse = (
  responseType: ResponseType,
  status: number,
  message: string,
  errors?: Record<string, string[]> | undefined
) => {
  const responseContent = {
    success: false,
    error: {
      message,
      details: errors,
    },
  };
  return responseType === "api"
    ? NextResponse.json(responseContent, { status })
    : { status, ...responseContent };
};

const handleError = (error: unknown, responseType: ResponseType = "server") => {
  if (error instanceof RequestError) {
    return formatResponse(
      responseType,
      error.statusCode,
      error.message,
      error.errors
    );
  }

  if (error instanceof ZodError) {
    // Dùng treeifyError
    const tree = z.treeifyError(error);
    // Hoặc nếu muốn dạng “flat” tương tự flatten:
    const flat = z.flattenError(error);

    // flat sẽ có kiểu:
    // { formErrors: string[]; fieldErrors: { [key: string]: string[] | undefined } }

    // Bạn cần chuyển `fieldErrors` (có thể undefined) về `Record<string, string[]>`
    const fieldErrors = Object.fromEntries(
      Object.entries(flat.fieldErrors).map(([key, arr]) => [key, arr ?? []])
    ) as Record<string, string[]>;

    const validationError = new ValidationError(fieldErrors);

    return formatResponse(
      responseType,
      validationError.statusCode,
      validationError.message,
      validationError.errors
    );
  }

  if (error instanceof Error) {
    return formatResponse(responseType, 500, error.message);
  }
};

export default handleError;
