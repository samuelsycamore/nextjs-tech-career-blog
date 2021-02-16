import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function Contact({  }) {
  return (
    <Layout>
      <Head>
        <title>Contact - {siteTitle}</title>
      </Head>
      <section className="py-4">
      <h1 className="text-4xl tracking-tighter font-black my-4">Contact</h1>
        <p>
          Feel free to drop me a line at <a className="text-blue-500 hover:underline" href="mailto:samuelsycamore@gmail.com">samuelsycamore@gmail.com</a>.
        </p>

        <p>
        Find me on <a className="text-blue-500 hover:underline" href="https://www.github.com/samuelsycamore" target="_blank">GitHub</a>, <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/samuelsycamore" target="_blank">LinkedIn</a>, <a className="text-blue-500 hover:underline" href="https://www.twitter.com/tanoaksam" target="_blank">Twitter</a>, and <a className="text-blue-500 hover:underline" href="https://www.dev.to/tanoaksam" target="_blank">DEV.to</a>.
        </p>

        <p>
        Looking to hire a freelance web developer? Check out <a className="text-blue-500 hover:underline" href="https://www.sycamore.design">sycamore.design</a>.
        </p>

      </section>
    </Layout>
  )
}