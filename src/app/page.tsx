import { Dashboard } from "@/app/Dashboard/Dashboard";
import LoginPage from "@/app/signup/page";
import { Sidebar } from "@/app/Sidebar/Sidebar";
import Signup from "@/app/login/page";
import Image from "next/image";
import Page from "./landing/page";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-[220px_1fr] gap-4 p-4">

        {/* <Sidebar />
        <Dashboard /> */}
      </main>
      {/* <LoginPage /> */}
      {/* <Signup /> */}
      <Page />
    </>
  );
}
