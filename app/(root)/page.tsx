import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import Link from "next/link";
const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: {
      _id: "1",
      name: "John",
      image:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn Redux?",
    description: "I want to learn React, can anyone",
    tags: [
      { _id: "1", name: "Redux" },
      { _id: "2", name: "Javascript" },
    ],
    author: {
      _id: "1",
      name: "John",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createAt: new Date(),
  },
];

const test = async () => {
  try {
    throw new ValidationError({
      title: ["Required"],
      tags: ["JavaScript is not a valid tag."],
    });
  } catch (error) {
    // throw error;
    return handleError(error);
  }
};

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  // test();
  const { query = "", filter = "" } = await searchParams;
  const filterQuestions = questions.filter((question) => {
    const matchesQuery = query
      ? question.title.toLowerCase().includes(query.toLowerCase())
      : true;

    const matchesFilter = filter
      ? question.tags.some(
          (tag) => tag.name.toLowerCase() === filter.toLowerCase()
        )
      : true;

    return matchesQuery && matchesFilter;
  });
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          asChild
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search..."
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filterQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>

      {/* <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_UP });
        }}
      >
        <Button className="cursor-pointer  bg-white text-black" type="submit">
          Sign out
        </Button>
      </form> */}
    </>
  );
};

export default Home;

// ("use client");
// import { useQueryState } from "nuqs";
// import { cn } from "@/lib/utils";
// import { Button } from "../ui/button";

// const filters = [
//   { name: "React", value: "react" },
//   { name: "JavaScript", value: "javascript" },
// ];

// export function HomeFilters() {
//   const [active, setActive] = useQueryState("filter", {
//     defaultValue: "",
//     parse: (value) => value as string,
//     shallow: false,
//   });

//   const handleTypeClick = (value: string) => {
//     if (active === value) {
//       setActive("");
//     } else {
//       setActive(value);
//     }
//   };

//   return (
//     <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
//       {filters.map((filter) => (
//         <Button
//           key={filter.name}
//           onClick={() => handleTypeClick(filter.value)}
//           className={cn(
//             `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
//             active === filter.value
//               ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
//               : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
//           )}
//         >
//           {filter.name}
//         </Button>
//       ))}
//     </div>
//   );
// }
