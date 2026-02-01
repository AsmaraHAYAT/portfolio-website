"use client"  // ⚠️ Must be first line

import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 bg-white p-4 rounded shadow"
            >
              <div>
                <p className="font-bold text-xl">{item.name}</p>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="text-right font-bold text-xl mt-4">Total: ${total}</p>
        </div>
      )}
    </section>
  )
}
