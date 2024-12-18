"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";  
import { app } from "@/firebase";  
import { useRouter } from "next/navigation";



export default function dashboard() {

    const [claims, setClaims] = useState<any>(null);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const getToken = async () => {
            try {
                const user = getAuth(app).currentUser;
                if (user) {
                    const token = await user.getIdTokenResult();
                    setClaims(token.claims);
                }
                else {
                    router.push("/login");
                }
            }
            catch (err: any) {
                setError(err.message);
            }
    }


    return (
        <main>
            You've logged in! Welcome {claims?.role}!
        </main>
    );
}