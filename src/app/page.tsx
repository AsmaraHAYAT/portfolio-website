import Image from 'next/image'

export default function Home() {
  return (
    <section className="text-center py-20">
      <Image
        src="/img.jpg"
        alt="Profile"
        width={200}
        height={200}
        className="mx-auto rounded-full"
      />
      <h1 className="text-4xl font-bold mt-6">Asmara</h1>
      <p className="mt-4 text-lg max-w-xl mx-auto">
        I am a Next.js developer learning AI and modern web technologies.
      </p>
    </section>
  )
}
