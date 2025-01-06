// app/page.tsx
import Hero from '@/components/Hero'
import CategoryNav from '@/components/CategoryNav'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryNav />
      <FeaturedProducts />
    </main>
  )
}