import { NextResponse } from "next/server";

interface ITagQuestion {
  _id: string;
  name: string;
}

interface IAuthorQuestion {
  _id: string;
  name: string;
  image: string;
}

export interface IQuestionCard {
  question: {
    _id: string;
    title: string;
    description: string;
    tags: ITagQuestion[];
    author: IAuthor;
    createAt: Date;
    upvotes: number;
    answers: number;
    views: numbers;
  };
}

export type ActionResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
    status?: number;
  };
};

export type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
export type ErrorResponse = ActionResponse<undefined> & { success: false };
export type APIErrorResponse = NextResponse<ErrorResponse>;
export type APIResponse<T = null> = NextResponse<
  SuccessResponse<T> | ErrorResponse
>;
