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
