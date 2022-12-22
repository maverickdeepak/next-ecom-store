import React from "react";

import Head from "next/head";
import Title from "./Title";
import NavBar from "./NavBar";

export default function Page({ title, children }) {
  return (
    <div className="py-10 px-10">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="p-4">
        <Title>{title}</Title>
        {children}
      </main>
    </div>
  );
}
