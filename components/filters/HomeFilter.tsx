"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
const filters = [
  {
    name: "Newest",
    value: "newest",
  },
  {
    name: "Popular",
    value: "popular",
  },
  {
    name: "React",
    value: "unanswered",
  },
  {
    name: "Redux",
    value: "recommended",
  },
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  const handleTypeClick = (filter: string) => {
    if (filter === active) {
      setActive("");
      const newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      router.push(newUrl, { scroll: false });
    } else {
      setActive(filter);

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className="sm:flex flex-wrap gap-3 hidden mt-10">
      {filters.map((filter) => (
        <Button
          onClick={() => handleTypeClick(filter.value)}
          key={filter.name}
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none bg-black dark:bg-white text-white dark:text-black cursor-pointer`,
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 dark:hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 hover:bg-dark-300"
          )}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
// "use client";
// import { useQueryState, parseAsString, debounce } from "nuqs";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// const filters = [
//   { name: "React", value: "react" },
//   { name: "JavaScript", value: "javascript" },
// ];

// const HomeFilter = () => {
//   const [active, setActive] = useQueryState(
//     "filter",
//     parseAsString.withDefault("").withOptions({
//       clearOnDefault: true,
//     })
//   );

//   const handleTypeClick = (value: string) => {
//     if (active === value) {
//       setActive(""); // Dùng empty string thay vì null
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
//             active === filter.value && active !== ""
//               ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
//               : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
//           )}
//         >
//           {filter.name}
//         </Button>
//       ))}
//     </div>
//   );
// };

// export default HomeFilter;
