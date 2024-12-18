"use client";

import Link from "next/link";
import Head from "next/head";
import type { NextPage } from "next";
import LoginForm from "./LoginForm";

const Home: NextPage = () => {
    return(
        <div>
            <Head>
                <title>Login Page</title>
            </Head>
            <main>
                <LoginForm/>
            </main>
        </div>
    )
}

export default Home;



