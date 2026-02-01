import { FaTiktok, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-lightPink py-8 flex flex-col items-center gap-6">
      <div className="flex gap-8 text-3xl text-linkBlue">
        <FaTiktok className="hover:text-black transition duration-300" />
        <FaInstagram className="hover:text-black transition duration-300" />
        <FaLinkedin className="hover:text-black transition duration-300" />
        <FaFacebook className="hover:text-black transition duration-300" />
        <FaYoutube className="hover:text-black transition duration-300" />
      </div>
      <p className="text-linkBlue font-bold text-lg mt-2">
        &copy; {new Date().getFullYear()} Asmara. All rights reserved.
      </p>
    </footer>
  )
}
