
import Link from "next/link";
import { auth } from "@/firebase";
import { useRouter } from "next/router";
import { useState } from "react";



export default function LoginForm() {
    return(
        <form className="flex flex-col justify-center items-center h-screen" method="POST">
            <h2 className="text-2xl font-bold mb-6 text-center">Login Page</h2>
            <div className="block mb-2 justify-center text-center align-center">
                <label htmlFor="email">Email : </label>
                <input className="rounded p-1 mb-6" type="email" id="email" name="email" required></input>
            
            
                <br/>

                <label htmlFor="password">Password: </label>
                <input className="rounded p-1 mb-6" type="password" id="password" name="password" required></input>

                <br/>
                
                <div className="underline mb-2">
                    <Link href="/login/signup">Don't have an account? </Link>
                </div>
                

                <br/>

                <button className="border rounded p-2 w-ful" type="submit">Login!</button>
            </div>
        </form>
    );
};
