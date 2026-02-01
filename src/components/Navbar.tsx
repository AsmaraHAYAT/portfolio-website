"use client"  // ⚠️ Sabse upar add karo

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
  const { cart } = useCart()

  return (
    <header className="bg-lightPink px-8 py-4 flex justify-between items-center shadow-md">
      {/* Left side: profile image + name */}
      <div className="flex items-center gap-4">
        <Image
          src="/img.jpg"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="font-bold text-2xl text-linkBlue">Asmara</span>
      </div>

      {/* Right side: page links + cart */}
      <nav className="flex items-center gap-8">
        {['/','/about','/products','/contact'].map((path, i) => (
          <Link
            key={i}
            href={path}
            className="text-linkBlue font-bold text-xl hover:underline"
          >
            {path === '/' ? 'Home' : path.replace('/','').charAt(0).toUpperCase() + path.replace('/','').slice(1)}
          </Link>
        ))}
        {/* Cart icon */}
        <Link href="/cart" className="relative text-linkBlue text-2xl">
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}
