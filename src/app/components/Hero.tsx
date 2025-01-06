
// components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-[600px] w-full">
      <div className="grid grid-cols-2 h-full">
        {/* Left side with image */}
        <div className="relative h-full">
          <Image
            src="/api/placeholder/800/600"
            alt="Hero fashion"
            fill
            className="object-cover"
          />
        </div>
        {/* Right side with content */}
        <div className="flex items-center justify-center bg-slate-50 p-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">New Collection</h1>
            <p className="mb-8">Discover our latest sustainable styles</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
