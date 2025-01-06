
// app/page.tsx

import CategoryNav from "./components/CategoryNav";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryNav />
      <FeaturedProducts />
    </main>
  )
}