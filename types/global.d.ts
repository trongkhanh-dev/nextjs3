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

interface IQuestionCard {
  _id: string;
  title: string;
  content: string;
  description: string;
  tags: ITagQuestion[];
  author: IAuthorQuestion;
  createdAt: Date | string;
  upvotes: number;
  answers: number;
  views: number;
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

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface PaginatedSearchParams {
  page?: number;
  pageSize?: number;
  query?: string;
  filter?: string;
  sort?: string;
}
