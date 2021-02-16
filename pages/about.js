import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function About({  }) {
  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      <section className="py-4">
      <h1 className="text-4xl tracking-tighter font-black my-4">About</h1>


        <p>
        about
        </p>

      </section>
    </Layout>
  )
}