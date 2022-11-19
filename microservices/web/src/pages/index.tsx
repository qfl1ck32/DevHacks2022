import { NavigationBar } from "@root/components/Loader/NavigationBar/NavigationBar";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <NavigationBar />

      <div className="grid h-screen place-items-center">Hi!</div>
    </div>
  );
};

export default Home;
