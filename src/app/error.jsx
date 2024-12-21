"use client";
import React from "react";
import Logo from "@/components/Icon/Logo";

export default function error({ error, reset }) {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
      <div className="w-fit box-border h-fit bg-white dark:bg-dark rounded-3xl gap-2 justify-center flex flex-col p-4 items-center">
        <Logo />
        <code className=" bg-gray-200 dark:bg-dim inline flex-wrap gap-1 text-dim dark:text-gray-400 rounded-2xl p-4 text-sm font-bold">
        <span className=" text-base text-green-800 ">Error</span>
        <b className=" text-red-600 px-1">{"->"}</b>{error.message}</code>
        <button
          className=" font-bold capitalize text-white w-full bg-primary dark:bg-secondary p-2 rounded-full"
          onClick={reset}
        >
          reload
        </button>
      </div>
    </div>
  );
}
