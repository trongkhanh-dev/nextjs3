import { notFound, redirect } from "next/navigation";
import mongoose from "mongoose";
import React from "react";

import { auth } from "@/auth";
import QuestionForm from "@/components/forms/QuestionForm";
import ROUTES from "@/constants/routes";
import { getQuestion } from "@/lib/actions/question.action";
import { RouteParams } from "@/types/global";

const EditQuestion = async ({ params }: RouteParams) => {
  const { id } = await params;
  const { data: question, success } = await getQuestion({ questionId: id });
  // console.log("fwafawfawfawfawfawffaw");
  // console.log(question);
  if (!id || !mongoose.isValidObjectId(id)) return notFound();

  const session = await auth();
  if (!session) return redirect("/sign-in");

  if (!success) return notFound();

  const authorId = question?.author._id;
  if (authorId === session.user!.id) {
    return redirect(ROUTES.QUESTION(id));
  }

  return (
    <main>
      <QuestionForm question={question} isEdit />
    </main>
  );
};

export default EditQuestion;
