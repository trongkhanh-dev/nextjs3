import { auth } from "@/auth";
import QuestionForm from "@/components/forms/QuestionForm";
import { redirect } from "next/navigation";
import React from "react";
import { getQuestion } from "@/lib/actions/question.action";
import mongoose from "mongoose";

const AskQuestion = async ({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string>> | Record<string, string>;
}) => {
  const session = await auth();
  if (!session) return redirect("/sign-in");

  const params =
    typeof searchParams === "object" ? searchParams : await searchParams;
  const from = params?.from;
  const id = params?.id;

  let question: any = undefined;
  const isEditing = from === "edit" && id && mongoose.isValidObjectId(id);
  if (isEditing) {
    const { data, success } = await getQuestion({ questionId: id! });
    if (success) question = data;
  }

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a Question </h1>
      <div className="mt-9">
        <QuestionForm
          question={question}
          isEdit={Boolean(isEditing && question)}
        />
      </div>
    </>
  );
};

export default AskQuestion;
