const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (_id: string) => `/profile/${_id}`,
  TAGS: (_id: string) => `tag/${_id}`,
  ASK_QUESTION: "/ask-question",
  QUESTION: (id: string) => `/question/${id}`,
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
};

export default ROUTES;
