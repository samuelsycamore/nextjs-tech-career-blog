import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="fixed z-50 
    top-100 bottom-0 w-full 
    lg:top-60 lg:left-4 lg:w-1/6
    xl:left-10
    ">
        <div className="bg-gradient-to-b from-blue-600 to-blue-400 bg-opacity-90 flex justify-evenly mx-auto py-3 overflow-hidden text-gray-50 text-xs md:text-sm
        lg:flex-col lg:rounded-lg lg:py-8
        " aria-label="quick access">

        <Link href="/">
          <a className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4" title="Home">
          <Image
              src="/images/home-outline.svg"
              height={20}
              width={20}
              alt="icon"
            />
            <span className="block">Home</span></a>
          </Link>

          <Link href="/contact">
            <a className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4" title="Contact">
            <Image
                src="/images/mail-outline.svg"
                height={20}
                width={20}
                alt="icon"
              />
              <span className="block">Contact</span></a>
            </Link>

          <a className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4" title="LinkedIn" href="https://www.linkedin.com/in/samuelsycamore">
          <Image
              src="/images/logo-linkedin.svg"
              height={20}
              width={20}
              alt="icon"
            />
            <span className="block">LinkedIn</span></a>

          <a className="relative text-inverted text-center hover:text-gray-900
          lg:block lg:py-4" title="GitHub" href="https://www.github.com/samuelsycamore" target="_blank">
          <Image
              src="/images/logo-github.svg"
              height={20}
              width={20}
              alt="icon"
            />
            <span className="block">GitHub</span></a>

        </div>

      </div>
    )
  }