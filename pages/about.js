import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'


export default function About({  }) {
  const newLocal = 555
  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      <section className="py-4">
      <h1 className="text-4xl tracking-tighter font-black my-4">About</h1>


        <p>
        Thanks for stopping by! I'm Sam, a software engineer who's proficient in full-stack JavaScript development. 
        </p>

        <div className="flex flex-col justify-center items-center my-4">
           <Image
              src="/images/sycamore.jpg"
              className="rounded-md"
              height={554}
              width={640}
              alt="Sam Sycamore"
            />
        </div>

        <p>
        My specialty is the front end, and I especially love working with libraries and frameworks that allow me to build as quickly and efficiently as possible. 
        </p>

        <p>
        This blog was created to share my programming projects, as well as my writings about web development and breaking into the tech industry.
        </p>

        <p>
        Beyond coding and writing, I'm an avid gardener and hobby carpenter. What do these things all have in common? In order to excel, you have to be a lifelong learner with a sharp eye for details.
        </p>

        <div className="flex flex-col justify-center items-center my-4">
           <Image
              src="/images/truck-desert.jpg"
              className="rounded-md"
              height={440}
              width={640}
              alt="My truck in the desert"
            />
        </div>

      </section>
    </Layout>
  )
}