"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase"; // Import your Firebase auth instance
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
    const router = useRouter();
    const { toast } = useToast();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast({
                title: "Logged Out",
                description: "You have been successfully logged out.",
            });
            router.push("/login"); // Redirect to the login page or another page
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message,
            });
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button onClick={handleLogout} className="mt-4">
                Logout
            </Button>
        </div>
    )
}