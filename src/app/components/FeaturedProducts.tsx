import Image from 'next/image'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Classic Loafer",
      price: "$165",
      image: "/api/placeholder/400/400"
    },
    {
      id: 2,
      name: "Comfortable Flat",
      price: "$145",
      image: "/api/placeholder/400/400"
    },
    // Add more products as needed
  ]
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
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