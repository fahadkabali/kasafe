import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import SignUp from "@/components/Register";

export const metadata: Metadata = {
  title: "Kasafe Registration Page | Admin Dashboard ", 
  description: "This is kasafe Registration Page Admin Dashboard",
};

const SignUpPage: React.FC = () => {
  return (

    <div className="flex flex-col min-h-screen bg-gray-100 lg:px-[16rem] lg:pt-[10rem] sm:px-10 sm:pt-10 pb-10">
      <Breadcrumb pageName="Sign Up" />
      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <SignUp />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2 px">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 bg-gradient-to-r from-indigo-200 ... ">
              <Link className="mb-10 inline-block" href="/login">
                {/* <Image
                  className="hidden dark:block"
                  src={"/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                /> */}
              </Link>
              <div className="px-10 pt-20">
              <p className="mb-3 text-2xl font-medium text-dark dark:text-gray-700">
              Get Started for Free
              </p>

              <h1 className="mb-4 text-3xl font-bold text-dark dark:text-gray-700 sm:text-heading-3">
                Welcome!!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
               To create your account please fill up the necessary fields below
              </p>
              </div>
              <div className="mt-31">
                <Image
                  src={"/grids/grid-02.svg"}
                  alt="Logo"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
