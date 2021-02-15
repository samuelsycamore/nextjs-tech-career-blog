import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="py-4">
        <p>
          Software engineer in Santa Cruz, CA. Easily excited by new tech.
        </p>

        <p>
        Ask me how to identify common edible wild plants.
        </p>

      </section>
      <section className="py-4">
        <h2 className="font-black text-3xl tracking-tighter py-4">Blog</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li className="py-2" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 hover:underline">{title}</a>
              </Link>
              <br />
              <small className="text-gray-500 tracking-tight">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
