import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function Contact({  }) {
  return (
    <Layout>
      <Head>
        <title>Resume - {siteTitle}</title>
      </Head>
      <section className="py-4">
      <h1 className="text-4xl tracking-tighter font-black my-4">Resume</h1>


        <p>
        resume
        </p>

      </section>
    </Layout>
  )
}