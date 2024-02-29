import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLable="Welcome back"
      backButtonLable="Don't have account?"
      backButtonHref="/auth/register"
      showsocial
    >
      login form!
    </CardWrapper>
  );
};
