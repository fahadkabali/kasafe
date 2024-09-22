import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import ForgotPassword from "@/components/ForgotPassword";

export const metadata: Metadata = {
  title: "Kasafe Login Page | Admin Dashboard ", 
  description: "This is kasafe Login Page Admin Dashboard",
};

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 lg:px-[16rem] lg:pt-[10rem] sm:px-10 sm:pt-10 pb-10">
      <Breadcrumb pageName="Forgot Password" />

      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <ForgotPassword />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 bg-gradient-to-r from-indigo-200 ...">
              <Link className="mb-10 inline-block" href="/register">
                {/* <Image
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                /> */}
              </Link>
              <div className="px-10 pt-20">
              <p className="mb-3 text-2xl font-medium text-dark dark:text-gray-700">
              Forget your password?
              </p>

              <h1 className="mb-4 text-3xl font-bold text-dark dark:text-gray-600 sm:text-heading-3">
              Reset Password!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Enter your email address to receive a password reset link.
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

export default ForgotPasswordPage;
