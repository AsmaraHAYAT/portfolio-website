"use client"

import { products } from '@/data/products'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'

export default function ProductsPage() {
  const { addToCart } = useCart()

  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white p-4 rounded shadow text-center hover:scale-105 transition-transform duration-300"
        >
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto cursor-pointer"
            />
          </Link>
          <h3 className="font-bold text-xl mt-2">{product.name}</h3>
          <p className="text-lg">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-4 py-2 bg-linkBlue text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  )
}
