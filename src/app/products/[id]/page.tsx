import { products } from '@/data/products'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { addToCart } = useCart()
  const product = products.find(p => p.id === params.id)

  if (!product) return <p>Product not found.</p>

  return (
    <section className="p-10 text-center">
      <Image src={product.image} alt={product.name} width={300} height={300} className="mx-auto" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl mt-2">${product.price}</p>
      <p className="mt-4 max-w-xl mx-auto">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-6 py-3 bg-linkBlue text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </section>
  )
}
