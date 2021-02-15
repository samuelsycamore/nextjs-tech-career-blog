import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="fixed z-50 top-100 bottom-0 w-full md:left-1/2 transform md:-translate-x-1/2">
        <div className="bg-blue-500 bg-opacity-90 flex justify-evenly mx-auto py-3 overflow-hidden text-gray-50" aria-label="quick access">

        <Link href="/">
          <a className="relative text-inverted text-center hover:text-yellow-300" title="Home">
          <Image
              src="/images/document-outline.svg"
              height={25}
              width={25}
              alt="icon"
            />
            <span className="block text-xs md:text-lg">Blog</span></a>
          </Link>

          <a className="relative text-inverted text-center hover:text-yellow-300" title="Portfolio" href="#portfolio">
          <Image
              src="/images/mail-outline.svg"
              height={25}
              width={25}
              alt="icon"
            />
            <span className="block text-xs md:text-lg">Contact</span></a>

          <a className="relative text-inverted text-center hover:text-yellow-300" title="About" href="#about">
          <Image
              src="/images/logo-linkedin.svg"
              height={25}
              width={25}
              alt="icon"
            />
            <span className="block text-xs md:text-lg">LinkedIn</span></a>

          <a className="relative text-inverted text-center hover:text-yellow-300" title="Contact" href="#contact">
          <Image
              src="/images/logo-github.svg"
              height={25}
              width={25}
              alt="icon"
            />
            <span className="block text-xs md:text-lg">GitHub</span></a>

        </div>

      </div>
    )
  }