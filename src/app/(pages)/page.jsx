import Menu from "@/components/Menu/Menu";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Products />
        <Menu />
      </div>
    </main>
  );
}
