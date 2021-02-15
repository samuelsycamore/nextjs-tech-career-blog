import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function Portfolio({  }) {
  return (
    <Layout>
      <Head>
        <title>Portfolio - {siteTitle}</title>
      </Head>
      <section className="py-4">
      <h1 className="text-4xl tracking-tighter font-black my-4">Portfolio</h1>

        <p>
        portfolio
        </p>

      </section>
    </Layout>
  )
}