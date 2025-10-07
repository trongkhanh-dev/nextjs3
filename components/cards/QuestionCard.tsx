import React from "react";
import { IQuestionCard, ITagQuestion } from "@/types/global.d";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import TagCard from "./TagCard";
import Metric from "../Metric";

interface Props {
  question: IQuestionCard;
}
const QuestionCard = ({ question }: Props) => {
  const { _id, title, tags, author, createdAt, upvotes, answers, views } =
    question;
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 dark:!bg-dark-500">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row ">
        <div>
          {" "}
          <Link href={ROUTES.QUESTION(_id)}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 ">
              {title}
            </h3>
          </Link>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
        </div>
      </div>
      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag: ITagQuestion) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imageUrl={author.image}
          alt={author.name}
          value={author.name}
          title={`• Ask ${getTimeStamp(createdAt)}`}
          href={ROUTES.PROFILE(author._id)}
          textStyle="body-medium text-dark400_light700"
          isAuthor
          titleStyles="max-sm hidden"
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imageUrl="/icons/like.svg"
            alt="Like"
            value={`${upvotes}`}
            title="Votes"
            textStyle="small-medium text-dark400_light800"
          />
        </div>
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imageUrl="/icons/message.svg"
            alt="Answers"
            value={`${answers}`}
            title="Answers"
            textStyle="small-medium text-dark400_light800"
          />
        </div>
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imageUrl="/icons/eye.svg"
            alt="Views"
            value={String(views)}
            title="Views"
            textStyle="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
