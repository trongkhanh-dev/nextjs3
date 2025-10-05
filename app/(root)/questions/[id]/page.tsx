import { RouteParams } from "@/types/global";
import React from "react";

const QuestionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;
  return <div>page</div>;
};

export default QuestionDetails;
