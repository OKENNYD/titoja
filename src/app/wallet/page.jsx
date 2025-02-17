"use client";
import WalAside from "@/components/Aside/WalAside";
import WalletHeader from "@/components/Header/WalletHeader";

export default function Wallet() {
  return (
    <section className="w-full h-auto relative flex justify-center items-center">
      {/* <WalAside/> */}
      <div className="w-1/2 h-auto flex gap-2 flex-col">
        <ul className="flex flex-wrap">
          <li className="basis-48 grow rounded-lg bg-secondary">
            <h1>10000</h1>
            <span>2.3% since last wedesday</span>
          </li>
          <li className="basis-48 grow rounded-lg bg-secondary">
            <h1>10000</h1>
            <span>2.3% since last wedesday</span>
          </li>
          <li className="basis-48 grow rounded-lg bg-secondary">
            <h1>10000</h1>
            <span>2.3% since last wedesday</span>
          </li>
          <li className="basis-48 grow rounded-lg bg-secondary">
            <h1>10000</h1>
            <span>2.3% since last wedesday</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
