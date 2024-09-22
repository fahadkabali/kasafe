import type { Metadata } from "next";
import React from "react";
import SignUp from "./(auth)/register/page";


export const metadata: Metadata = {
  title: "Kasafe",
  description: "Your personal financial assistant",
};

export default function Home() {
  return (
    <>
    <SignUp/>
    </>
  );
}
