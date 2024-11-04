
import { Outfit } from "next/font/google"
const outfit = Outfit({ subsets: ['latin'] })

import ProtectedRoute from '@/components/auth/ProtectedRoute'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <main className={`flex-1 overflow-y-auto p-6 ${outfit.className}`}>
                {children}
            </main>
        </ProtectedRoute>
    );
}