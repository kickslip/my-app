
// components/FeaturedProducts.tsx
import Image from 'next/image'

export default function FeaturedProducts() {
  // Generate products array with sequential images
  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `$${Math.floor(Math.random() * 50) + 100}`,
    image: `/im${index + 2}.jpg` // Starting from im2.jpg since im1.jpg is used in hero
  }))
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-square mb-4 bg-slate-100 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}