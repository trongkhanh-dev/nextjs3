const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (_id: string) => `/profile/${_id}`,
  TAGS: (_id: string) => `tag/${_id}`,
  ASK_QUESTION: "/ask-question",
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
  QUESTION: (_id: string) => `/questions/${_id}`,
};

export default ROUTES;
