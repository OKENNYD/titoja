"use client";
import React from "react";
import Logo from "@/components/Icon/Logo";

export default function error({ error, reset }) {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
      <div className="w-fit box-border h-fit bg-white rounded-3xl gap-2 justify-center flex flex-col p-4 items-center">
        <Logo />
        <code className=" bg-gray-200 inline flex-wrap gap-1 text-dim rounded-2xl p-4 text-base">
        <span className=" text-lg text-green-800 ">Error</span>
        <b className=" text-red-600 px-1">{"->"}</b>{error.message}</code>
        <button
          className="capitalize text-white w-full bg-primary p-2 rounded-full"
          onClick={reset}
        >
          reload
        </button>
      </div>
    </div>
  );
}
