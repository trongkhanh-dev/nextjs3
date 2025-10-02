import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validation";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";
import { ZodFormattedError } from "zod";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const validationData = UserSchema.safeParse(body);
    if (!validationData.success) {
      const formatted = validationData.error.format();

      // ép kiểu value về ZodFormattedError<any, string>
      const fieldErrors: Record<string, string[]> = Object.fromEntries(
        Object.entries(formatted)
          .filter(([key]) => key !== "_errors")
          .map(([key, value]) => [
            key,
            (value as ZodFormattedError<any, string>)._errors,
          ])
      );

      throw new ValidationError(fieldErrors);
    }

    const { email, username } = validationData.data;

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    const existingUsername = await User.findOne({ username });
    if (existingUsername) throw new Error("Username already exists");

    const newUser = await User.create(validationData.data);

    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
