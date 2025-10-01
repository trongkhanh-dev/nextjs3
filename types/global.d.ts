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

type ActionResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
    status?: number;
  };
};

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<undefined> & { success: false };
type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;
