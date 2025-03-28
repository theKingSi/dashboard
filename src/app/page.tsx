import { Dashboard } from "@/Dashboard/Dashboard";
import { Sidebar } from "@/Sidebar/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-[220px_1fr] gap-4 p-4">

    <Sidebar />
    <Dashboard />
   </main>
  );
}
