import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How to be a pro developer?" },
  { _id: "2", title: "When will you be rich" },
  {
    _id: "3",
    title: "Have you tried hard enough",
  },
];

const popularTags = [
  { _id: "1", name: "React", questions: 100 },
  {
    _id: "2",
    name: "Javascript",
    questions: 90,
  },
  { _id: "3", name: "Typescript", questions: 85 },
  { _id: "4", name: "Nextjs", questions: 83 },
  { _id: "5", name: "React-query", questions: 80 },
];
const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              className="flex cursor-pointer items-center justify-between gap-7"
              key={_id}
              href={ROUTES.PROFILE(_id)}
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((item) => {
            return <TagCard {...item} key={item._id} showCount compact />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
