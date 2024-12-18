"use client";

import Head from "next/head";
import type { NextPage } from "next";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase"; 
import { useRouter } from "next/navigation";

const SignUp: NextPage = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const HandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            await updateProfile(user, {
                displayName: name
            });
            
            setSuccess("Account created successfully");
            setTimeout(() => {
                setSuccess("");
                router.push("/dashboard");
            }, 1000);
        }

        catch (err: any) {
            setError(err.message);
            
        }
    }

    return(
        <div>
            <Head>
                <title>Sign-up Page</title>
            </Head>
            <main>
                <form className="flex flex-col justify-center items-center h-screen" onSubmit={HandleSubmit}>
                    <div className="border-4 p-10 rounded-3xl">
                        <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
                        <div className="block mb-2 justify-center text-center align-center">
                            <label htmlFor="name">Name: </label>
                            <input 
                            className="rounded p-1 mb-6 placeholder-gray-400 text-black" 
                            type="text" 
                            id="name" 
                            placeholder="Name"
                            name="name" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            >
                            </input>

                            <br/>   

                            <label htmlFor="email">Email : </label>
                            <input 
                            className="rounded p-1 mb-6 placeholder-gray-400 text-black" 
                            type="text" 
                            id="email" 
                            placeholder="Email"
                            name="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                        
                            <br/>

                            <label htmlFor="password">Password: </label>
                            <input 
                            className="rounded p-1 mb-6 placeholder-gray-400 text-black" 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            name="password" 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            >
                            </input>

                            <br/>
                            <button className="border rounded p-2 w-ful" type="submit">Sign up now</button>
                            {error && <p className="text-red-500">{error}</p>}
                            {success && <p className="text-green-500">{success}</p>}
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}
export default SignUp;



   