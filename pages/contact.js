import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'


export default function Post({  }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        hello
      </article>
    </Layout>
  )
}