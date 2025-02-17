import Aside from "@/components/Aside/Aside";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Products />
        <Aside />
      </div>
    </main>
  );
}
