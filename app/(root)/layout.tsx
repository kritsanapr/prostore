import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Prostore",
    description: "Modern E-commerce platform build on Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col">
            <main className="flex-1 wrapper">
                {children}
            </main>
        </div>
    );
}
