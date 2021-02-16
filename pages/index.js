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
          Software engineer in Santa Cruz, CA. Easily excited by new tech. Ask me how to identify common edible wild plants.

        </p>

      </section>


  
      <section className="py-4 mb-20 px-5 my-5 rounded-xl shadow-lg  border-b border-gray-300">
        <h2 className="font-black tracking-tighter py-4">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="py-2 mb-5 border-b-2 border-gray-200" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 hover:underline">{title}</a>
              </Link>
              <br />
              <span className="text-gray-500 italic font-light text-lg">
                <Date dateString={date} />
              </span>
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
