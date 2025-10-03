import { ActionResponse, ErrorResponse } from "@/types/global";
import { SignUpSchema } from "../validation";
import action from "../handlers/action";
import handleError from "../handlers/error";

export async function signUpWithOAuthParams(
  params: AuthCredentials
): Promise<ActionResponse> {
  const validationResult = await action({ params, schema: SignUpSchema });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { name, username, email, password } = validationResult.params!;
}
