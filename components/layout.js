import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/navbar'

const name = 'Sam Sycamore'
export const siteTitle = 'Sam Sycamore - Software Engineer'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Sam Sycamore is a software engineer who writes about web development, freelancing, and careers in tech."
        />
        
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />
      <div className="container max-w-2xl  
    flex flex-col justify-center items-center 
    p-4 mx-auto 
    text-xl antialiased">
      <header className="flex flex-col justify-center items-center my-4">
        {home ? (
          <>
            <Image
              priority
              src="/images/sam-turtle.jpg"
              className="rounded-full"
              height={150}
              width={150}
              alt={name}
            />
            <h1 className="text-5xl tracking-tighter font-black my-4">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/sam-turtle.jpg"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl tracking-tighter font-black my-4 reset-py">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mb-20">
          <Link href="/">
            <a className="text-blue-500 hover:underline">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
    </div>
  )
}
