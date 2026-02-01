"use client"  // ⚠️ Ye line sabse upar honi chahiye

import { createContext, useState, useContext, ReactNode } from 'react'

type Product = { id: string; name: string; price: number; image: string }

type CartContextType = {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => setCart([...cart, product])
  const removeFromCart = (id: string) => setCart(cart.filter(p => p.id !== id))

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
