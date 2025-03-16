import Aside from "@/components/Aside/Aside";
import Cookie from "@/components/Cookie/Cookie";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Products />
        <Cookie/>
        <Aside />
      </div>
    </main>
  );
}
