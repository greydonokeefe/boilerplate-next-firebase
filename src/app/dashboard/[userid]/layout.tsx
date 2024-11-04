
import { Outfit } from "next/font/google"
const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </body>
        </html>
    );
}