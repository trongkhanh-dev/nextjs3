"use client";

import { AskQuestionSchema } from "@/lib/validation";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: standardSchemaResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = () => {};

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-10"
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        {" "}
        <FormField
          //   key={field}
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col ">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                {/* {field.name === "email"
                  ? "Email Address"
                  : field.name.charAt(0).toUpperCase() + field.name.slice(1)} */}
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  //   required
                  //   type={field.name === "password" ? "password" : "text"}
                  {...field}
                  className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] rounded-1.5 border"
                />
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Be specific and imagine you're asking a question
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          //   key={field}
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col ">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                {/* {field.name === "email"
                  ? "Email Address"
                  : field.name.charAt(0).toUpperCase() + field.name.slice(1)} */}
                Detail explanation of your problem.{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                {/* <Input
                  //   required
                  //   type={field.name === "password" ? "password" : "text"}
                  {...field}
                  className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] rounded-1.5 border"
                /> */}
                Editor
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Introduce the problem and expand on what you've put in the
                title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          //   key={field}
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                {/* {field.name === "email"
                  ? "Email Address"
                  : field.name.charAt(0).toUpperCase() + field.name.slice(1)} */}
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    //   required
                    //   type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] rounded-1.5 border"
                    placeholder="Add tags..."
                  />
                </div>
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-16 flex justify-end">
          <Button className="primary-gradient w-fit !text-light-900">
            Ask a Question
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
