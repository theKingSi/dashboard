import LoginPage from "@/app/signup/page";
import Sidebar from "@/app/sidebar/page";
import Signup from "@/app/login/page";
import Image from "next/image";
import Page from "./landing/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <div className="">
        {/* <Dashboard /> */}
      </div>
      {/* <LoginPage /> */}
      {/* <Signup /> */}
      <Page />
    </>
  );
}
