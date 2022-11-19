import { Login } from "@root/components/Login/Login";

export const LoginContainer = () => {
  const onSubmit = async () => {
    console.log("Hi");
  };

  return (
    <Login
      {...{
        onSubmit,
      }}
    />
  );
};
