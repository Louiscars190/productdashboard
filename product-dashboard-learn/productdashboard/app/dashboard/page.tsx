"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";  
import { app } from "@/firebase";  
import { useRouter } from "next/navigation";
import { set } from "firebase/database";



export default function dashboard() {

    const [claims, setClaims] = useState<any>(null);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [verified, setVerified] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const getToken = async () => {
            try {
                const user = getAuth(app).currentUser;
                if (user) {
                    const token = await user.getIdTokenResult();
                    setClaims(token.claims);
                    setVerified(true);
                    setName(user.displayName || '');
                }
                else {
                    router.push("/login");
                }
            }
            catch (err: any) {
                setError(err.message);
                console.log(err);
            }
        }
        getToken();
    }, [router]);
    return (
        <main>
            You've logged in! Welcome {name}!
        </main>
    );
}