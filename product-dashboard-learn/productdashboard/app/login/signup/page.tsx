"use client";

import Link from "next/link";
import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";

const signup: NextPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return(
        <div>
            <Head>
                <title>Sign-up Page</title>
            </Head>
            <main>
                <form className="flex flex-col justify-center items-center h-screen" method="POST">
                    <div className="border p-10 rounded">
                        <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
                        <div className="block mb-2 justify-center text-center align-center">
                            <label htmlFor="name">Name: </label>
                            <input 
                            className="rounded p-1 mb-6" 
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
                            <input className="rounded p-1 mb-6" type="email" id="email" name="email" required></input>
                        
                        
                            <br/>

                            <label htmlFor="password">Password: </label>
                            <input className="rounded p-1 mb-6" type="password" id="password" name="password" required></input>

                            <br/>
                            <button className="border rounded p-2 w-ful" type="submit">Sign up now</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default signup;



   