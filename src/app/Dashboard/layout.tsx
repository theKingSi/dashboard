
import Sidebar from "../sidebar/page";
import "../globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex">
            <div >
                <Sidebar />
            </div>
            <main className="flex-1 md:ml-[220px]">
                {children}
            </main>
        </div>
    );
}
