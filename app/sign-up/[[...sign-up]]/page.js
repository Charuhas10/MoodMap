import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className=" flex justify-center items-center">
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        afterSignUpUrl="/new-user"
        redirectUrl="/new-user"
      />
    </div>
  );
};

export default SignUpPage;

// path="/sign-up"
// signInUrl="/sign-in"
// afterSignUpUrl="/new-user"
// redirectUrl="/new-user"
